"use client";

import React, { Fragment, useMemo } from "react";
import { Carousel } from "react-bootstrap";
import NextLink from "../components/NextLink";
import Image from "next/image";

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

  const values = [
    { title: "ADN", desc: "Au service exclusif des laboratoires partenaires." },
    { title: "Innovation", desc: "Toujours à la pointe de la technologie." },
    { title: "Excellence", desc: "Mutualisation de nos expertises." },
    { title: "Respect", desc: "Respect total envers tous nos partenaires." },
    { title: "Éthique", desc: "Protection des données et qualité médicale." },
  ];

  return (
    <Fragment>
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
        {/* Mission */}
        <section className="py-5 section-fade">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center mb-4 mb-lg-0">
                <div className="img-wrap shadow rounded overflow-hidden d-inline-block">
                  <Image
                    src="/img/labo1.jpg"
                    alt="Notre Mission"
                    width={700}
                    height={480}
                    style={{ width: "100%", height: "220px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-ghost shadow-sm border-0 p-4">
                  <h2 className="text-primary mb-3 text-center">Notre Laboratoire</h2>
                  <p className="lead mb-3">
                    Le Laboratoire Les Jasmins d’Analyses Médicales est d’une nouvelle génération de plateaux techniques fermés, 
                    spécialisés et pluridisciplinaires. Notre mission est de fournir des services d&apos;analyses médicales de haute qualité 
                    à nos laboratoires partenaires, en mettant l&apos;accent sur la précision, la rapidité et la fiabilité des résultats.
                  </p>
                  
                  <div className="mt-4 text-center">
                    <NextLink href="" title="Découvrir nos services" className="btn btn-outline-primary" />
                  </div>
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
                  <p className="lead mb-3">
                    Le Laboratoire National Mohammed VI d&apos;Analyses Médicales renforce son développement par une mutualisation accrue des compétences.
                    En chiffres, le LNM6 est fort de l&apos;expertise de 8 biologistes, du savoir-faire de plus 20 techniciens spécialisés, de l&apos;objectivité 
                    de 7 scientifiques et du professionnalisme de plus de 60 collaborateurs.
                  </p>
                  
                  <div className="mt-4 text-center">
                    <NextLink href="/services" title="Découvrir nos services" className="btn btn-outline-secondary" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="img-wrap shadow rounded overflow-hidden d-inline-block">
                  <Image
                    src="/img/labo2.jpg"
                    alt="Notre Histoire"
                    width={800}
                    height={480}
                    style={{ width: "100%", height: "250px" }}
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
        <section className="py-5 section-fade text-center">
          <div className="container">
            <h2 className="mb-4">Nous contacter</h2>
            <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4 text-left">
              <input type="text" placeholder="Nom" className="p-3 border rounded w-full" />
              <input type="text" placeholder="Prénom" className="p-3 border rounded w-full" />
              <input type="email" placeholder="Email" className="p-3 border rounded w-full" />
              <input type="tel" placeholder="Téléphone" className="p-3 border rounded w-full" />
              <textarea placeholder="Message" className="p-3 border rounded w-full h-32"></textarea>
              <button className="btn btn-primary w-full">Soumettre</button>
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
      `}</style>
    </Fragment>
  );
};

export default LaboratoirePage;
