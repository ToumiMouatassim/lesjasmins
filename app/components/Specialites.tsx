"use client"; 

import Image from "next/image";
import Link from "next/link";
import { Fragment, useMemo } from "react";
import { specialitesList, specialite } from "@/data/data";
import NextLink from "./NextLink";

export default function NewsPage() {
  const slides = useMemo(() => {
    const out: specialite[][] = [];
    for (let i = 0; i < specialitesList.length; i += 2) {
      out.push(specialitesList.slice(i, i + 2));
    }
    return out;
  }, []);

  return (
    <Fragment>
       <section className="bg-light py-5">
        <div className="container position-relative">
          <div
            id="specialitesCarousel"
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
                  <div className="row justify-content-center">
                    {group.map((specialite) => (
                      <div key={specialite.id} className="col-10 col-sm-6 col-md-5">
                        <div className="card specialite-card border-0 shadow-sm mx-auto">
                          <Link href={`Specialite/${specialite.id}`}>
                            <div className="ratio ratio-16x9">
                              
                              <Image
                                src={specialite.src ?? "/img/placeholder.png"}
                                alt={specialite.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </Link>

                          <div className="card-body text-center">
                            <h4 className="card-title">{specialite.title}</h4>
                            <p className="card-text">{specialite.description}</p>

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
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Précédent</span>
            </button>

            <button
              className="carousel-control-next custom-arrow"
              type="button"
              data-bs-target="#specialitesCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Suivant</span>
            </button>
            <NextLink
              href="/rendez-vous"
              title="Prendre rendez-vous"
              className="btn btn-lg btn-primary mt-4 rounded-pill shadow"
            />
          </div>
        </div>

        <style >{`
          :root {
            --primary-color: #0d6efd;
            --accent-color: #8bbb44;
          }

          .specialite-card {
            max-width: 360px;
            border-radius: 0.8rem;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .specialite-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
          }

          .specialite-card .card-body {
            padding: 1.2rem 0.1rem;
          }

          .specialite-card .card-title {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 0.4rem;
          }

          .specialite-card time {
            font-size: 0.78rem;
          }

          .specialite-card .card-text {
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
            .specialite-card {
              max-width: 90%;
            }

            .specialite-card .card-body {
              padding: 1rem 0.8rem;
            }
          }
        `}</style>
      </section>
    </Fragment>
  );
}
