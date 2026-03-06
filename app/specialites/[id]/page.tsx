"use client";

import { use, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { specialitesList } from "@/data/data";
import NextLink from "../../components/NextLink";

export interface Specialite {
  id: number;
  title: string;
  description: string;
  images?: string[];
  whatsapp?: string;
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function SpecialiteDetail({ params }: Props) {
  const { id } = use(params);

  const specialite: Specialite | undefined = specialitesList.find(
    (e) => e.id.toString() === id
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!specialite) {
    notFound();
  }

  return (
    <>
      {/* HERO */}
      <section
        className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center"
        style={{
          height: "45vh",
          minHeight: "150px",
          backgroundImage: "url(/img/aboutbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 999,
        }}
      >
        <div
          className="overlay position-absolute w-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))",
            zIndex: 2,
            top: 0,
            bottom: 0,
          }}
        ></div>

        <div
          className="container text-center position-relative pt-12"
          style={{ zIndex: 3 }}
        >
          <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">
            {specialite.title}
          </h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Découvrez les détails et informations essentielles de cette spécialité.
          </p>
        </div>
    </section>

      {/* MAIN CONTENT */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* IMAGE */}
            <div className="col-lg-6 text-center">
              <div className="shadow rounded overflow-hidden">
                <Image
                  src={
                    specialite.images?.[0] ?? "/img/placeholder.png"
                  }
                  alt={specialite.title}
                  width={600}
                  height={400}
                  className="img-fluid w-100 object-fit-cover"
                  style={{ height: "360px" }}
                  priority
                />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="col-lg-6">
              <div className="card shadow-sm border-0 p-4">
                <p className="lead">{specialite.description}</p>

                <div className="mt-4 d-flex gap-2 flex-wrap">
                  <NextLink
                    href="/#specialites"
                    title="Découvrir nos autres spécialités"
                    className="btn btn-outline-primary"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      {specialite.images && specialite.images.length > 1 && (
        <section className="container py-5">
          <h3 className="text-center mb-4">Galerie Photos</h3>

          <div className="row g-3">
            {specialite.images.slice(1).map((img, index) => (
              <div key={index} className="col-6 col-md-3">
                <div
                  className="rounded shadow-sm overflow-hidden"
                  role="button"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt="gallery"
                    width={400}
                    height={300}
                    className="img-fluid w-100 object-fit-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: "rgba(0,0,0,0.9)",
            zIndex: 9999,
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="btn position-absolute top-0 end-0 m-4"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <Image
            src={selectedImage}
            alt="preview"
            width={1200}
            height={800}
            className="img-fluid rounded shadow"
          />
        </div>
      )}
    </>
  );
}