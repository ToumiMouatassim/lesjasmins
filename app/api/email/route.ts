import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENTS: Record<string, string | undefined> = {
  contact: process.env.CONTACT_EMAIL,
  appointment: process.env.APPOINTMENT_EMAIL,
  recruitment: process.env.RECRUITMENT_EMAIL,
  laboratory: process.env.LABORATORY_EMAIL,
};

interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: { user: string; pass: string };
}

function getSmtpConfig(): SmtpConfig | null {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  const port = Number(SMTP_PORT) || 587;
  return {
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  };
}

async function getTestSmtpConfig(): Promise<SmtpConfig | null> {
  try {
    const testAccount = await nodemailer.createTestAccount();
    return {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: { user: testAccount.user, pass: testAccount.pass },
    };
  } catch {
    return null;
  }
}

function buildText(type: string, data: Record<string, string>) {
  const lines = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const subjects: Record<string, string> = {
    contact: data.sujet || "Message depuis le site web",
    appointment: "Nouveau rendez-vous",
    recruitment: `Nouvelle candidature – ${data.poste || ""}`,
    laboratory: "Nouveau message du laboratoire",
  };

  return {
    subject: subjects[type] || "Nouveau message",
    text: `Type: ${type}\n\n${lines}`,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      type?: string;
      data?: Record<string, string>;
    };

    const { type, data } = body;
    if (!type || !data || typeof data !== "object") {
      return NextResponse.json(
        { message: "Type et données requis." },
        { status: 400 }
      );
    }

    const recipient = RECIPIENTS[type];
    if (!recipient) {
      return NextResponse.json(
        { message: "Type de formulaire non reconnu." },
        { status: 400 }
      );
    }

    let smtp = getSmtpConfig();
    let isTest = false;

    if (!smtp) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          { message: "SMTP non configuré. Veuillez renseigner les variables d'environnement." },
          { status: 503 }
        );
      }
      smtp = await getTestSmtpConfig();
      isTest = true;
    }

    if (!smtp) {
      return NextResponse.json(
        { message: "Impossible d'obtenir une configuration SMTP." },
        { status: 503 }
      );
    }

    const from = process.env.SMTP_FROM || smtp.auth.user;
    const { subject, text } = buildText(type, data);

    const transporter = nodemailer.createTransport(smtp);
    const info = await transporter.sendMail({
      from,
      to: recipient,
      subject,
      text,
    });

    const previewUrl = isTest ? nodemailer.getTestMessageUrl(info) : undefined;

    return NextResponse.json({
      message: isTest
        ? "Message envoyé (mode test). Vérifiez l'URL de prévisualisation."
        : "Votre message a bien été envoyé.",
      previewUrl,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ message }, { status: 500 });
  }
}
