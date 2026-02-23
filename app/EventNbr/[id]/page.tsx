"use client";

import { use } from "react";
import { useState } from "react";
import { eventsList } from "@/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function EventDetails({ params }: Props) {
  const { id } = use(params); // ✅ Next 16 compatible

  const event = eventsList.find(
    (e) => e.id.toString() === id
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* HERO */}
      <section className="event-hero d-flex align-items-center justify-content-center text-center text-white position-relative">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-2">
          <h1 className="display-4 fw-bold mb-3">{event.title}</h1>
          <p className="lead opacity-75">
            Découvrez tous les détails de cet événement
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container py-5">
        <div className="event-card mx-auto p-4 p-md-5">

          {/* IMAGE PRINCIPALE PLUS PETITE */}
          <div className="main-image mb-4 text-center">
            <Image
              src={event.images?.[0] ?? "/img/placeholder.png"}
              alt={event.title}
              width={700}
              height={400}
              className="img-fluid rounded-4 shadow-sm"
              priority
            />
          </div>

          {/* TEXTE PLUS GRAND */}
          <div className="event-text mb-5">
            <p className="fw-bold">{event.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit asperiores officiis sint dolorum, natus
              obcaecati tempora illum consequatur. Ici vous pouvez mettre
              le contenu détaillé de l’événement avec une mise en page plus
              professionnelle.
            </p>
          </div>

          {/* GALERIE */}
          {event.images && event.images.length > 1 && (
            <>
              <h4 className="fw-bold mb-4">Galerie Photos</h4>
              <div className="row g-4">
                {event.images.slice(1).map((img, index) => (
                  <div key={index} className="col-6 col-md-4 col-lg-3">
                    <div
                      className="gallery-item position-relative overflow-hidden rounded-4"
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`${event.title} ${index + 1}`}
                        width={400}
                        height={400}
                        className="img-fluid"
                      />
                      <div className="gallery-overlay">
                        <span>Voir</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="preview"
            width={1200}
            height={800}
            className="lightbox-img"
          />
        </div>
      )}

      {/* STYLE */}
      <style>{`
        .event-hero {
          height: 50vh;
          min-height: 300px;
          background: url('/img/aboutbg.png') center/cover no-repeat;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 123, 255, 0.6)
          );
        }

        .event-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          max-width: 1000px;
        }
       

        .gallery-item {
          cursor: pointer;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-weight: bold;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        /* LIGHTBOX */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .lightbox-img {
          max-width: 90%;
          max-height: 85%;
          border-radius: 15px;
        }

          .event-text {
            font-size: 1.1rem;   /* ✅ taille normale */
            line-height: 1.8;
            color: #444;
          }

          @media (max-width: 768px) {
            .event-text {
              font-size: 1rem;  /* un peu plus petit sur mobile */
            }
          }
              `}</style>
    </>
  );
}