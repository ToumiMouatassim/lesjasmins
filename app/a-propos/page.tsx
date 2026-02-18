"use client";

import React, { Fragment, useMemo } from "react";
import { Carousel } from "react-bootstrap";
import NextLink from "../components/NextLink";
import Image from "next/image";
 
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  src: string;
}
 
const initialDoctorsList: Doctor[] = [
  {
    id: 1,
    name: "Dr. Ahmed Benali",
    specialty: "Chirurgie générale",
    src: "/img/doctor.jpg",
  },
  {
    id: 2,
    name: "Dr. Sara El Idrissi",
    specialty: "Cardiologie",
    src: "/img/doctor.jpg",
  },
  {
    id: 3,
    name: "Dr. Mohamed Yassine",
    specialty: "Orthopédie",
    src: "/img/doctor.jpg",
  },
  {
    id: 4,
    name: "Dr. Lina Harir",
    specialty: "Pédiatrie",
    src: "/img/doctor.jpg",
  },
  {
    id: 5,
    name: "Dr. Youssef El Fassi",
    specialty: "Radiologie",
    src: "/img/doctor.jpg",
  },
  {
    id: 6,
    name: "Dr. Nadia Benmansour",
    specialty: "Gynécologie",
    src: "/img/doctor.jpg",
  },
];
 
const chunk = <T,>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};
 
const AboutPage: React.FC = () => {
  const slides = useMemo(() => chunk(initialDoctorsList, 3), []);

  return (
    <Fragment>
      <section className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center" style={{
        height: '50vh',
        minHeight: '150px',
        backgroundImage: 'url(/img/aboutbg.png)',  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 999,   
        paddingTop: '120px',  
      }}>
        <div className="overlay position-absolute w-100  " style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))',   
          zIndex: 2,
          top: 0,
          bottom: 0,
        }}></div>
        <div className="container text-center position-relative pt-10" style={{ zIndex: 3 }}>
          <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">À propos de nous</h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Excellence clinique, innovation médicale et un engagement total pour votre santé.
          </p>
        </div>
      </section>

      <main className="content-wrapper">
         <section className="py-5 section-fade">
          <div className="container">
            <div className="row align-items-center">
              <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                  <div className="img-wrap shadow rounded overflow-hidden d-inline-block">
                    <Image
                      src="/img/apropos1.jpg"
                      alt="Notre Mission"
                      width={490}
                      height={340}
                      // style={{ width: "100%", height: "220px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card card-ghost shadow-sm border-0 p-4">
                    <h2 className="text-primary mb-3">Notre Mission</h2>
                    <p className="lead mb-3">
                      Notre mission est de vous accompagner à chaque étape de votre parcours de santé, avec l&apos;objectif constant d&apos;améliorer votre qualité de vie et votre bien-être.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <i className="uil uil-check text-success me-2"></i>Assurer des soins de qualité
                      </li>
                      <li className="mb-2">
                        <i className="uil uil-check text-success me-2"></i>Promouvoir la prévention et l&apos;éducation à la santé
                      </li>
                      <li>
                        <i className="uil uil-check text-success me-2"></i>Apporter un soutien personnalisé
                      </li>
                      <li>
                        <i className="uil uil-check text-success me-2"></i>Favoriser l&apos;innovation et la recherche
                      </li>
                      <li>
                        <i className="uil uil-check text-success me-2"></i>Respecter des valeurs d&apos;écoute et de bienveillance
                      </li>
                    </ul>
                    <div className="mt-4">
                      <NextLink href="/services" title="Découvrir nos services" className="btn btn-outline-primary" />
                    </div>
                  </div>
                </div>
           </div>
          </div>
          </div>
        </section>

         <section className="py-5 bg-white section-fade">
          <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                <div className="card card-ghost shadow-sm border-0 p-4">
                  <h2 className="text-secondary mb-3" >Nos Valeurs</h2>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="uil uil-check text-success me-2"></i>Excellence médicale : Nous nous efforçons d’offrir les meilleurs soins, en utilisant les technologies les plus avancées et en nous appuyant sur des protocoles cliniques rigoureux.
                    </li>
                    <li className="mb-2">
                      <i className="uil uil-check text-success me-2"></i>Écoute et respect : Nous mettons un point d&apos;honneur à écouter chaque patient, à comprendre ses préoccupations et à offrir un traitement personnalisé.
                    </li>
                    <li>
                      <i className="uil uil-check text-success me-2"></i>Humanité et bienveillance : Notre équipe est attentive à vos besoins, offrant un environnement sécurisé et rassurant pour vous permettre de vous sentir soutenu tout au long de votre parcours de soins.
                    </li>
                    <li>
                      <i className="uil uil-check text-success me-2"></i>Innovation et recherche : Nous investissons continuellement dans l’innovation médicale et la recherche pour offrir à nos patients les traitements les plus efficaces et les plus modernes.
                    </li>
                  </ul>
                  <div className="mt-4">
                    <NextLink 
                      href="/services" 
                      title="Découvrir nos services" 
                      className="btn btn-outline-secondary" 
                    />
                  </div>
                </div>
              </div>

               <div className="col-lg-6 text-center">
                <div className="img-wrap shadow rounded overflow-hidden d-inline-block">
                  <Image
                    src="/img/historyabout.png"
                    alt="Notre Histoire"
                    width={700}
                    height={480}
                    style={{ width: "100%", height: "250px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
         <section className="py-5 section-fade bg-light">
          <div className="container text-center">
            {/* <h2 className="mb-3 text-primary">Notre Équipe médicale</h2>
            <p className="mb-4">Des spécialistes expérimentés réunis pour garantir des soins complets.</p>

            <div className="doctor-carousel-wrap mb-4">
              <Carousel fade interval={3800} pause="hover" className="doctor-carousel" touch>
                {slides.map((group, idx) => (
                  <Carousel.Item key={idx}>
                    <div className="d-flex justify-content-center flex-wrap gap-3">
                      {group.map((doctor) => (
                        <article
                          key={doctor.id}
                          className="card doctor-card shadow-sm border-0"
                          style={{ width: 270 }}
                        >
                          <div className="doctor-img position-relative">
                            <Image
                              src={doctor.src}
                              alt={doctor.name}
                              width={600}
                              height={600}
                              style={{ width: "100%", height: 250, objectFit: "cover" }}
                            />
                          </div>

                          <div className="card-body pt-12">
                            <h5 className="card-title mb-1">{doctor.name}</h5>
                            <p className="card-text small text-muted mb-3">{doctor.specialty}</p>
                            <NextLink
                              href="/contact"
                              title="Contacter"
                              className="btn btn-outline-primary btn-sm"
                            />
                          </div>
                        </article>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div> */}

            <NextLink
              href="/rendez-vous"
              title="Prendre rendez-vous"
              className="btn btn-lg btn-primary rounded-pill shadow"
            />
          </div>
        </section>
      </main>

       <style >{`
        .hero-advanced {
          height: 52vh;
          min-height: 280px;
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/img/aboutbg.png');
          background-size: cover;
          background-position: center;
          transform: scale(1.08);
          filter: saturate(0.95) contrast(0.9);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(0, 0, 0, 0.6), rgba(0, 123, 255, 0.2));
        }

        .btn-glow {
          background: linear-gradient(90deg, #0d6efd, #5b8cff);
          color: #fff;
          border: none;
        }

        .section-fade {
          animation: fadeUp 0.7s ease both;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .doctor-card {
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .doctor-card:hover {
          transform: translateY(-6px);
        }

        .doctor-img {
          height: 200px;
          width: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default AboutPage;