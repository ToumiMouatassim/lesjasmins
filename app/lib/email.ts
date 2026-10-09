"use client";

export type FormType = "contact" | "appointment" | "recruitment" | "laboratory";

export interface FormPayload {
  type: FormType;
  data: Record<string, string>;
}

export async function submitForm(type: FormType, data: Record<string, string>) {
  const response = await fetch("/api/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, data } satisfies FormPayload),
  });

  const payload = (await response.json().catch(() => ({
    message: "Erreur inconnue, veuillez réessayer.",
  }))) as { message?: string };

  if (!response.ok) {
    throw new Error(payload.message ?? "Erreur lors de l'envoi.");
  }

  return payload;
}
