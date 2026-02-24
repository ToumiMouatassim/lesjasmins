"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import { specialitesList, specialite } from "@/data/data";
import NextLink from "./NextLink";

export default function NewsPage() {
  const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

   const slides = useMemo(() => {
    const out: specialite[][] = [];
    const step = isMobile ? 1 : 2;

    for (let i = 0; i < specialitesList.length; i += step) {
      out.push(specialitesList.slice(i, i + step));
    }
    return out;
  }, [isMobile]);

  return (
    <Fragment>
      <section className="bg-light py-5">
        <div className="container position-relative">
          <div
            id="specialitesCarousel"
            className="carousel slide pb-4"
            data-bs-ride="carousel"
            data-bs-interval="3500"
          >
            <div className="carousel-inner">
              {slides.map((group, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="row justify-content-center ">
                    {group.map((specialite) => (
                      <div
                        key={specialite.id}
                        className="col-12 col-md-5 d-flex justify-content-center"
                      >
                        <div className="card specialite-card border-0 shadow-sm">
                          <Link href={`/Specialite/${specialite.id}`}>
                            <div className="ratio ratio-16x9">
                              <Image
                                src={specialite.src ?? "/img/placeholder.png"}
                                alt={specialite.title}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </Link>

                          <div className="card-body text-center">
                            <h4 className="card-title">
                              {specialite.title}
                            </h4>
                            <p className="card-text">
                              {specialite.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

             <button
              className="carousel-control-prev custom-arrow"
              type="button"
              data-bs-target="#specialitesCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>

            <button
              className="carousel-control-next custom-arrow"
              type="button"
              data-bs-target="#specialitesCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>

             <div className="text-center mt-5">
              <NextLink
                href="/rendez-vous"
                title="Prendre rendez-vous"
                className="btn btn-lg btn-primary rounded-pill shadow"
              />
            </div>
          </div>
        </div>

        {/* Styles */}
        <style>{`
        .specialite-card {
          max-width: 380px;
          width: 100%;
          border-radius: 0.9rem;
          overflow: hidden;
          transition: 0.3s ease;
        }
        .specialite-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .card-text {
          font-size: 0.9rem;
          color: #555;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .custom-arrow {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(1);
        }
      `}</style>

      </section>
    </Fragment>
  );
}
