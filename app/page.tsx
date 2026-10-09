import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "LesJasmins Hospital | Votre Santé, Notre Priorité",
  description:
    "Bienvenue à l’Hôpital LesJasmins, un centre médical moderne offrant des soins spécialisés, une équipe expérimentée et des équipements à la pointe de la technologie.",
  metadataBase: new URL("https://hopitallesjasmins.ma"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LesJasmins Hospital | Votre Santé, Notre Priorité",
    description:
      "Bienvenue à l’Hôpital LesJasmins, un centre médical moderne offrant des soins spécialisés, une équipe expérimentée et des équipements à la pointe de la technologie.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
