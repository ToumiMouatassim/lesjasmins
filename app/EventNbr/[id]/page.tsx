"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { eventsList } from "@/data/data";

 
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
       <section className="event-hero">
        <div className="hero-overlay"></div>
        
         <div className="container position-relative z-2 h-100 d-flex flex-column justify-content-between pb-5">
          <div className="mt-4">
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline-light btn-sm rounded-pill px-3 back-btn"
            >
              ← Retour
            </button>
          </div>
          
          <div className="text-center mb-4 animate-fade-up">
            <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
              Événement
            </span>
            <h1 className="display-3 fw-bold mb-3 text-white lh-tight">
              {event.title}
            </h1>
            
            {/* Métadonnées */}
            <div className="d-flex justify-content-center gap-4 text-white-50 small fw-medium">
              {event.date && (
                <span className="d-flex align-items-center gap-2">
                  <i className="bi bi-calendar3"></i> {formatDate(event.date)}
                </span>
              )}
              {event.location && (
                <span className="d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt"></i> {event.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="container py-5">
        <div className="event-card mx-auto">
          
          {/* Introduction / Excerpt */}
          <div className="event-intro text-center mb-5 px-md-5">
            <p className="lead text-primary fw-bold">
              {event.excerpt}
            </p>
          </div>

          {/* Image Principale */}
          <div className="main-image-container mb-5 rounded-4 overflow-hidden shadow-lg">
            <Image
              src={event.images?.[0] ?? "/img/placeholder.png"}
              alt={event.title}
              width={1200}
              height={600}
              className="img-fluid w-100 object-fit-cover"
              priority
              style={{ maxHeight: '600px' }}
            />
          </div>

          {/* Description Détaillée */}
          <div className="event-content px-2 px-md-4 mb-6">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h3 className="fw-bold mb-4 text-dark">À propos de cet événement</h3>
                <div className="text-muted lh-lg fs-5" style={{ textAlign: 'justify' }}>
                  <p>
                    {event.description || 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <hr className="my-5 border-light" />

          {/* GALERIE PHOTOS */}
          {event.images && event.images.length > 1 && (
            <div className="gallery-section">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h4 className="fw-bold m-0">Galerie Photos</h4>
                <span className="text-muted small">{event.images.length} photos</span>
              </div>
              
              <div className="row g-4">
                {event.images.slice(1).map((img, index) => (
                  <div key={index} className="col-6 col-md-4">
                    <div
                      className="gallery-item rounded-4 overflow-hidden position-relative shadow-sm"
                      onClick={() => setSelectedImage(img)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`${event.title} - Photo ${index + 2}`}
                        width={600}
                        height={400}
                        className="img-fluid w-100 h-100 object-fit-cover transition-transform"
                        style={{ aspectRatio: '4/3' }}
                      />
                      <div className="gallery-overlay d-flex align-items-center justify-content-center">
                        <div className="icon-circle bg-white text-primary rounded-circle p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="lightbox" 
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button 
            className="lightbox-close" 
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer"
          >
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Aperçu agrandi"
              width={1600}
              height={900}
              className="img-fluid rounded shadow-5"
              priority
            />
          </div>
        </div>
      )}

      {/* STYLES AMÉLIORÉS */}
      <style>{`
        /* Hero Section */
        .event-hero {
          height: 60vh;
          min-height: 400px;
          background: url('/img/aboutbg.png') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
        }

        .back-btn {
          backdrop-filter: blur(5px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Main Card */
        .event-card {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
          padding: 3rem;
          margin-bottom: 4rem;
          border: 1px solid #f0f0f0;
        }

        @media (max-width: 768px) {
          .event-card {
            padding: 1.5rem;
            border-radius: 0;
          }
          .event-hero {
            height: 50vh;
          }
        }

        /* Gallery */
        .gallery-item {
          cursor: pointer;
          aspect-ratio: 4/3;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease-out;
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
          line-height: 1;
          transition: transform 0.2s;
        }

        .lightbox-close:hover {
          transform: rotate(90deg);
          color: #fff;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}