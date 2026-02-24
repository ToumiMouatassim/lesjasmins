"use client";

import React, { Fragment, useMemo } from "react";
import { Carousel } from "react-bootstrap";
import NextLink from "../components/NextLink";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";



const LaboratoirePage: React.FC = () => {
  const specialities = [
    "Biochimie",
    "Chimie analytique",
    "Dépistage néonatal",
    "Infectiologie",
    "Immunologie",
    "Allergologie",
    "Hématologie",
    "Génétique médicale",
    "Cytogénétique",
    "Histocompatibilité",
    "Cytométrie en flux",
  ];

 

  return (
    
    <Fragment>
      {/* WhatsApp Laboratoire */}
      <a
        href="https://wa.me/212616189323"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-labo"
        aria-label="Contacter le laboratoire sur WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
      {/* Hero */}
      <section className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center" style={{
        height: '50vh',
        minHeight: '150px',
        backgroundImage: 'url(/img/aboutbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 999,
        paddingTop: '120px',
      }}>
        <div className="overlay position-absolute w-100" style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(21,99,171,0.6))',
          top: 0,
          bottom: 0,
          zIndex: 2
        }}></div>
        <div className="container text-center position-relative pt-10" style={{ zIndex: 3 }}>
          <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">Laboratoire</h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Bienvenue dans le Laboratoire Les Jasmins d’Analyses Médicales. <br /> 
            Découvrez nos analyses médicales et services disponibles.
          </p>
        </div>
      </section>

      <main className="content-wrapper">
        <section className="py-5 section-fade">
          <div className="container">
            <div className="row align-items-center">
              <div className="row mt-4 text-start">
                    <div className="col-md-6 mb-3 ">
                      <h6 className="text-secondary">📍 Adresse</h6>
                      <p className="mb-0">
                        Lotissement Mawra, Oulad Ayad - Béni Mellal  
                        <br />
                        (Round-point route Marrakech avant Afriquia Café Oasis)
                      </p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <h6 className="text-secondary">📞 Contact </h6>
                      <p className="mb-0">
                        05 23 42 25 25  
                        <br />
                        06 16 18 93 23
                      </p>
                    </div>
                  </div>
              <div className="col-lg-6 text-center mb-4 mb-lg-0">
                <div className="img-wrap shadow rounded overflow-hidden d-inline-block">
                  <Image
                    src="/img/labo1.jpg"
                    alt="Laboratoire Les Jasmins"
                    width={700}
                    height={480}
                    style={{ width: "100%", height: "260px", objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card card-ghost shadow-sm border-0 p-4 text-center">
                  <h2 className="text-primary mb-3 fs-28">
                    🧪 Laboratoire Les Jasmins — Garde 24h/24 & 7j/7
                  </h2>

                  <p className="lead">
                     Le Laboratoire d&apos;Analyses Médicales <strong>Les Jasmins</strong> assure une garde
                    <strong> 24h/24 et 7j/7</strong>, pour répondre à tous vos besoins urgents en analyses
                    médicales, à toute heure du jour ou de la nuit.
                  </p>
                  <hr className="my-4" />
                  <p>
                    Votre santé est notre priorité, même en dehors des horaires habituels.  
                    N&apos;hésitez pas à nous contacter ou à vous présenter directement au laboratoire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Valeurs */}
        <section className="py-5 bg-white section-fade">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="card card-ghost shadow-sm border-0 p-4">
                  <h2 className="text-secondary mb-3 text-center">Une équipe à votre service</h2>  
                  <p className="lead mb-4">
                    🔬 Chez <strong>Les Jasmins</strong>, la science se vit avec passion.  
                    Chaque boîte de Petri raconte une histoire que nous écrivons à travers la recherche et la précision.
                  </p>
                  <p className="mb-5">
                    Le laboratoire d&apos;analyses médicales <strong>Les Jasmins </strong>, là où la rigueur rencontre
                    la passion scientifique, toujours au service de votre santé ⚕️
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="img-wrap shadow rounded overflow-hidden d-inline-block">
                  <Image
                    src="/img/labo4.jpg"
                    alt="Notre Histoire"
                    width={800}
                    height={480}
                    style={{ width: "100%", height: "280px" }}
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Pôles de spécialités */}
        <section className="py-5 section-fade bg-light text-center">
          <div className="container">
            <h2 className="mb-4">Nos pôles de spécialités</h2>
            <div className="row justify-content-center">
              {specialities.map((spec, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-3 mb-3">
                  <div className="card shadow-sm rounded p-3">{spec}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        
        <section className="py-5 section-fade d-flex justify-content-center bg-light">
          <div className="contact-card shadow p-4 p-md-5">
            <h2 className="text-center mb-4 text-primary">Nous contacter</h2>

            <form action="https://formsubmit.co/TONEMAIL@gmail.com" method="POST">
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" name="nom" placeholder="Nom" required className="form-control form-custom" />
                </div>
                <div className="col-md-6">
                  <input type="text" name="prenom" placeholder="Prénom" required className="form-control form-custom" />
                </div>
                <div className="col-12">
                  <input type="email" name="email" placeholder="Email" required className="form-control form-custom" />
                </div>
                <div className="col-12">
                  <input type="tel" name="telephone" placeholder="Téléphone" className="form-control form-custom" />
                </div>
                <div className="col-12">
                  <textarea name="message" rows={4} placeholder="Votre message..." required className="form-control form-custom"></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary px-5 py-2 mt-2">
                    Envoyer le message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

      </main>

      <style>{`
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

        .card-ghost {
          background: #fff;
          border-radius: 12px;
        }

        .img-wrap {
          border-radius: 12px;
          overflow: hidden;
        }
        .whatsapp-labo {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 58px;
          height: 58px;
          background: #25d366;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          z-index: 9999;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .whatsapp-labo:hover {
          transform: scale(1.1);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
          color: #fff;
        }
        
      `}</style>
    </Fragment>
  );
};

export default LaboratoirePage;