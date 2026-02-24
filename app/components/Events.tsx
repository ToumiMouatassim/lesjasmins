"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useMemo, useEffect, useState } from "react";
import { eventsList, Event } from "@/data/data";

export default function NewsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const slides = useMemo(() => {
    const out: Event[][] = [];
    const step = isMobile ? 1 : 2;

    for (let i = 0; i < eventsList.length; i += step) {
      out.push(eventsList.slice(i, i + step));
    }

    return out;
  }, [isMobile]);

  return (
    <Fragment>
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

      {/* EVENTS */}
      <section className="bg-light py-5">
        <div className="container position-relative">
          <div
            id="eventsCarousel"
            className="carousel slide pb-11 pt-10"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              {slides.map((group, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="row justify-content-center g-4">
                    {group.map((event) => (
                      <div
                        key={event.id}
                        className="col-12 col-md-5 d-flex justify-content-center"
                      >
                        <div className="card event-card border-0 shadow-sm mx-auto">
                          <Link href={`EventNbr/${event.id}`}>
                            <div className="ratio ratio-16x9">
                              <Image
                                src={
                                  event.images?.[0] ??
                                  "/img/placeholder.png"
                                }
                                alt={event.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </Link>

                          <div className="card-body text-center">
                            <h4 className="card-title">
                              {event.title}
                            </h4>

                            <time className="text-muted small d-block mb-2">
                              {event.date}
                            </time>

                            <p className="card-text">
                              {event.excerpt}
                            </p>

                            <Link
                              href={`EventNbr/${event.id}`}
                              className="btn btn-outline-danger btn-sm btn-cta"
                            >
                              Voir plus
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* NAVIGATION */}
            <button
              className="carousel-control-prev custom-arrow"
              type="button"
              data-bs-target="#eventsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next custom-arrow"
              type="button"
              data-bs-target="#eventsCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* STYLES */}
        <style>{`
          :root {
            --primary-color: #0d6efd;
            --accent-color: #8bbb44;
          }

          .event-card {
            max-width: 380px;
            width: 100%;
            border-radius: 1rem;
            overflow: hidden;
            transition: 0.3s ease;
          }

          .event-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          }

          .event-card .card-body {
            padding: 1.3rem;
          }

          .event-card .card-title {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .event-card time {
            font-size: 0.8rem;
          }

          .event-card .card-text {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 1.2rem;
            color: #555;
          }

          .btn-cta {
            font-size: 0.85rem;
            padding: 8px 20px;
            border-radius: 8px;
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
              max-width: 100%;
            }

            .event-card .card-body {
              padding: 1rem;
            }
          }
        `}</style>
      </section>
    </Fragment>
  );
}