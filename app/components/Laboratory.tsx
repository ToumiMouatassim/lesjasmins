"use client";

import Link from "next/link";
import Image from "next/image";

const LaboratoireSection = () => {
  return (
    <section
      className="py-4"
      style={{ minHeight: "60vh" }}  
    >
      <div className="container">
        <div className="row align-items-center g-4">

           <div className="col-lg-6 text-center">
            <Image
              src="/img/labo.jpeg"
              alt="Laboratoire médical"
              width={400}
              height={360}
              className="img-fluid rounded-4 shadow"
            />
          </div>

           <div className="col-lg-6">
            <h6
              className="text-uppercase fw-semibold mb-2"
              style={{ color: "#31A14E" }}
            >
              Notre Laboratoire
            </h6>

            <h2 className="fw-bold mb-3">
              Analyses médicales fiables et rapides
            </h2>

            <p className="text-muted mb-4">
              Laboratoire Les Jasmins — Garde 24h/24 & 7j/7

              Le Laboratoire d&apos;Analyses Médicales Les Jasmins assure une garde permanente 24h/24 et 7j/7, afin de répondre à tous vos besoins urgents en analyses médicales, de jour comme de nuit. Équipé de technologies modernes et respectant les normes médicales les plus strictes, notre laboratoire garantit des résultats fiables, rapides et sécurisés.
              Votre santé est notre priorité, même en dehors des horaires habituels. N&apos;hésitez pas à nous contacter ou à vous présenter directement au laboratoire à tout moment.
            </p>

            <Link href="/laboratoire" className="btn btn-primary px-4 py-2">
              Voir le laboratoire
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LaboratoireSection;
