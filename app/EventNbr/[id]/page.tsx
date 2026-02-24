"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { eventsList } from "@/data/data";
import NextLink from "../../components/NextLink";

 
interface Event {
  id: string | number;
  title: string;
  excerpt?: string;
  description?: string;  
  date?: string;
  location?: string;
  images?: string[];
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function EventDetails({ params }: Props) {
  const { id } = use(params);
  
   const event: Event | undefined = eventsList.find(
    (e) => e.id.toString() === id
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

   if (!event) {
    notFound();
  }

   useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

   const formatDate = (dateString?: string) => {
    if (!dateString) return "Date à venir";
    return new Date(dateString).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
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
            {event.title}
          </h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Découvrez les détails et informations essentielles de cet événement.
          </p>
        </div>
    </section>
    
    <section className="py-5 section-fade">
          <div className="container">
            <div className="row align-items-center">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                  <div className="img-wrap shadow rounded overflow-hidden d-inline-block">
                    <Image
                      src={event.images?.[0] ?? "/img/placeholder.png"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="img-fluid w-100 object-fit-cover "
                      style={{ width: "100%", height: "360px" }}
                      priority
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card card-ghost shadow-sm border-0 p-4">
                    <p className="lead mb-2 fs-17">
                      <strong>Le : </strong> {formatDate(event.date)} <br />
                      {event.excerpt }
                    </p>
                    <div className="mt-4">
                      <NextLink href="/#evenements" title="Découvrir nos autres événements" className="btn btn-outline-primary" />
                    </div>
                  </div>
                </div>
           </div>
          </div>
          </div>
        </section>

  {/* ================= GALERIE ================= */}
  {event.images && event.images.length > 1 && (
    <section className="gallery-section container py-5">
      <h3 className="text-center mb-4">Galerie Photos</h3>
      <div className="row g-3">
        {event.images.slice(1).map((img, idx) => (
          <div key={idx} className="col-6 col-md-3">
            <div
              className="gallery-item rounded-3 overflow-hidden shadow-sm"
              onClick={() => setSelectedImage(img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Photo ${idx + 2}`}
                width={400}
                height={300}
                className="img-fluid w-100 object-fit-cover transition-transform"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )}

  {/* ================= LIGHTBOX ================= */}
  {selectedImage && (
    <div className="lightbox" onClick={() => setSelectedImage(null)}>
      <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <Image
          src={selectedImage}
          alt="Aperçu"
          width={1600}
          height={900}
          className="img-fluid rounded shadow-lg"
          priority
        />
      </div>
    </div>
  )}

  {/* ================= STYLES ================= */}
  <style>{`
    /* A propos */
    .about-event h2 {
      font-weight: 700;
      color: #0052cc;
      margin-bottom: 0.5rem;
    }
    .about-event p {
      color: #555;
    }

    /* IMAGE GAUCHE / DESCRIPTION DROITE */
    .event-main {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
    .event-main .main-image-container img {
      transition: transform 0.5s ease;
    }
    .event-main .main-image-container:hover img {
      transform: scale(1.05);
    }
    .event-description p {
      margin-bottom: 1rem;
    }

    /* GALERIE */
    .gallery-item img {
      transition: transform 0.4s ease;
      cursor: pointer;
    }
    .gallery-item:hover img {
      transform: scale(1.1);
    }

    /* LIGHTBOX */
    .lightbox {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 20px;
    }
    .lightbox-close {
      position: absolute;
      top: 20px;
      right: 30px;
      background: none;
      border: none;
      color: white;
      font-size: 3rem;
      cursor: pointer;
    }
    .lightbox-content img {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
    }

    /* RESPONSIVE */
    @media (max-width: 992px) {
      .event-main {
        flex-direction: column;
      }
      .main-image-container {
        margin-bottom: 2rem;
      }
    }
  `}</style>
</>
  );
}