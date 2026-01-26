"use client";

import Link from "next/link";
import Image from "next/image";

const LaboratoireSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          
          {/* Image */}
          <div className="col-lg-6">
            <Image
              src="/img/laboratoire.jpg"
              alt="Laboratoire médical"
              width={600}
              height={400}
              className="img-fluid rounded-4 shadow"
            />
          </div>

          {/* Contenu */}
          <div className="col-lg-6">
            <h6 className="text-uppercase fw-semibold mb-2" style={{ color: "#31A14E" }}>
              Notre Laboratoire
            </h6>
            <h2 className="fw-bold mb-3">
              Analyses médicales fiables et rapides
            </h2>
            <p className="text-muted mb-4">
              Notre laboratoire médical est équipé de technologies modernes pour
              assurer des analyses précises, rapides et conformes aux normes
              médicales, garantissant un diagnostic fiable et sécurisé.
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
