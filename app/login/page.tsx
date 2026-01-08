"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AutoLoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      alert("Token manquant");
      return;
    }

    const API = process.env.NEXT_PUBLIC_API_URL;

    if (!API) {
      console.error("NEXT_PUBLIC_API_URL non défini");
      return;
    }

    const autoLogin = async () => {
      try {
        // 1️⃣ CSRF (obligatoire pour Sanctum + cookies)
        await fetch(`${API}/sanctum/csrf-cookie`, {
          method: "GET",
          credentials: "include",
        });

        // 2️⃣ Auto-login via API
        const response = await fetch(`${API}/api/auto-login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new Error("Auto-login échoué");
        }

        // 3️⃣ Redirection vers Laravel (route WEB)
        window.location.href = `${API}/dashboard`;
      } catch (error) {
        console.error(error);
        alert("Connexion automatique impossible");
      }
    };

    autoLogin();
  }, [token, router]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Connexion en cours…</h2>
      <p>Veuillez patienter</p>
    </div>
  );
}
