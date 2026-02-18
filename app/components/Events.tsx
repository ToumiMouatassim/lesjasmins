"use client"; 

import Image from "next/image";
import { Fragment } from "react";
import { eventsList } from "@/data/data";

export default function NewsPage() {
  const itemsPerSlide = 2;
  const chunkedEvents = Array.from(
    { length: Math.ceil(eventsList.length / itemsPerSlide) },
    (_, i) => eventsList.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide)
  );

  return (
    <Fragment>
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
            background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))",
            zIndex: 2,
            top: 0,
            bottom: 0,
          }}
        ></div>
        <div
          className="container text-center position-relative pt-10"
          style={{ zIndex: 3 }}
        >
          <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">
            Actualités & Événements
          </h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Restez informé des dernières nouvelles et événements de notre hôpital.
          </p>
        </div>
</section>
  <section className="bg-light py-5">
    <div className="container">
      <div className="container">
        <div
    id="eventsCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">

      {chunkedEvents.map((group, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? "active" : ""}`}
        >
          <div className="row justify-content-center">

            {group.map((event) => (
              <div
                key={event.id}
                className="col-12 col-md-6 mb-4"
              >
                <div className="card event-card border-0 shadow-sm h-100">

                  <div className="ratio ratio-16x9 position-relative">
                    <Image
                      src={event.images?.[0] ?? "/img/placeholder.png"}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">{event.title}</h5>
                    <time className="text-muted small d-block mb-2">
                      {event.date}
                    </time>
                    <p className="card-text">{event.excerpt}</p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      ))}

    </div>

    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#eventsCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#eventsCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>

      </div>

    </div>


          <style >{`
            :root {
              --primary-color: #0d6efd;
              --accent-color: #8bbb44;
            }

            .event-card {
              width: 100%; /* prend toute la largeur de la colonne */
  border-radius: 0.8rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .event-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
            }

            .event-card .card-body {
              padding: 1.2rem 0.1rem;
            }

            .event-card .card-title {
              font-size: 1.1rem;
              font-weight: 700;
              margin-bottom: 0.4rem;
            }

            .event-card time {
              font-size: 0.78rem;
            }

            .event-card .card-text {
              font-size: 0.88rem;
              line-height: 1.4;
              margin-bottom: 1.1rem;
              color: #555;
            }

            .btn-cta {
              font-size: 0.85rem;
              padding: 7px 18px;
              border-radius: 6px;
              border: 2px solid var(--accent-color) !important;
              color: var(--accent-color) !important;
              background: transparent !important;
              transition: 0.3s ease;
            }

            .btn-cta:hover {
              background-color: var(--accent-color) !important;
              color: #fff !important;
              transform: translateY(-2px);
            }

            .custom-arrow {
              width: 3rem;
              height: 3rem;
              border-radius: 50%;
              top: 50%;
              transform: translateY(-50%);
              opacity: 0.9;
            }

            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              filter: invert(1);
            }

            @media (max-width: 768px) {
              .event-card {
                max-width: 90%;
              }

              .event-card .card-body {
                padding: 1rem 0.8rem;
              }
            }
          `}</style>
        </section>
    </Fragment>
  );
}
