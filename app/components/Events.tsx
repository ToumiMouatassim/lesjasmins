"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

type Event = {
  id: number;
  title: string;
  date?: string;
  excerpt?: string;
  src?: string;
};

export default function EventsSlider() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Chargement des événements...</p>;

  return (
    <section className="bg-light py-5">
      <div className="container position-relative">
        <h2 className="text-center mb-7 text-primary fw-bold position-relative pb-2">
          Événements & Actualités
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "90px",
              height: "3px",
              backgroundColor: "#8BBB44",
              borderRadius: "2px",
            }}
          ></span>
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="card event-card border-0 shadow-sm mx-auto">
                <Link href={`EventNbr/${event.id}`}>
                  <div className="ratio ratio-16x9">
                    <Image
                      src={event.src ?? "/img/events1.jfif"}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  </div>
                </Link>

                <div className="card-body text-center">
                  <h4 className="card-title">{event.title}</h4>
                  <time className="text-muted small d-block mb-2">{event.date}</time>
                  <p className="card-text">{event.excerpt}</p>
                  <Link href={`EventNbr/${event.id}`} className="btn btn-outline-danger btn-sm">
                    Voir plus
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style >{`
        .event-card {
          max-width: 360px;
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

        @media (max-width: 768px) {
          .event-card {
            max-width: 90%;
          }
        }
      `}</style>
    </section>
  );
}
