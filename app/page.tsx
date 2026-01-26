"use client";

import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import PageProgress from "./components/PageProgress"
import Hero from "./components/Hero";
import About from "./components/About";
import Specialites from "./components/Specialites";
import EventsSection from "./components/Events";
import { SupportSection as Support } from "./components/Support";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import LaboratoireSection from "./components/Laboratory";

export default function HomePage() {
  return (
    <Fragment>
      <PageProgress />
      
      <Head>
        <title>LesJasmins Hospital | Votre Santé, Notre Priorité</title>
        <meta
          name="description"
          content="Bienvenue à l’Hôpital LesJasmins, un centre médical moderne offrant des soins spécialisés, une équipe expérimentée et des équipements à la pointe de la technologie."
        />
        <link rel="canonical" href="https://hopitallesjasmins.ma/com" />
      </Head>

      <main className="content-wrapper overflow-hidden ">
        <section>
          <Hero />
        </section>

        {/* About Section */}
        <section className="wrapper bg-light mb-10 ">
          <div className="container pt-8 pt-md-15 text-center">
            <h2
              className="fw-bold position-relative d-inline-block pb-2"
              style={{
                fontSize: "8rem",
                color: "#1372B2",
                marginBottom: "1.5rem",
              }}
            >
              À propos
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  backgroundColor: "#8BBB44",
                  borderRadius: "2px",
                }}
              ></span>
            </h2>

            <div className="text-start mt-4">
              <About
                imgPosition="right"
                imgSrc="/img/apropos.jfif"
                heading="Hopital Privé Les Jasmins — Une équipe dédiée à votre santé et votre bien-être"
                para="Situé stratégiquement au cœur de Beni Mellal, l'Hôpital Privé Les Jasmins est votre partenaire de confiance pour des soins de santé de qualité. Nous mettons à votre disposition une équipe de médecins hautement qualifiés et des technologies de pointe pour garantir des diagnostics précis et des traitements efficaces. Notre philosophie repose sur la conviction qu'un soin réussi nécessite l'écoute, la confiance et l'innovation, assurant un accompagnement personnalisé pour chaque patient. De la simple consultation ou contrôle spécialisé à l'intervention chirurgicale complexe, notre engagement constant est de garantir votre bien-être et votre sécurité."
                isH1
              />
              <div className="animate__animated animate__slideInUp animate__delay-3s mt-4">
                <Link
                  href="/a-propos"
                  className="btn btn-lg text-white bg rounded"
                  style={{
                    backgroundColor: "#8BBB44",
                    borderRadius: "2px",
                    marginBottom: "3rem",
                  }}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </section>
 
        {/* Hero Section */}
        <section
          className="wrapper text-white d-flex align-items-center"
          style={{
            height: "55vh",
            backgroundImage: "url('/img/aboutbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            overflow: "hidden",
          }}
        > 
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          ></div>

          <div
            className="container text-center"
            style={{
              position: "relative",
              zIndex: 2,
              padding: "2rem",
            }}
          >
            <h3
              className="fw-bold mb-3 text-white "
              style={{ fontSize: "2.5rem"}}
            >
              Votre santé, notre priorité
            </h3>
            <p className="mb-4 fs-18">
              Nous combinons expertise médicale et technologies de pointe pour assurer des soins personnalisés et de qualité.
            </p>
            <Link
              href="/rendez-vous"
              className="btn btn-lg text-white hero-btn"
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
                padding: "0.75rem 2rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8BBB44")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Prenez rendez-vous
            </Link>
          </div>

          <style >{`
            .hero-btn:hover {
              color: #fff !important;
              border-color: #8BBB44 !important;
            }
          `}</style>
        </section>

        {/* Specialites */}
        <section className="wrapper bg-light py-0 py-md-10">
          <div className="container text-center">
            <div className="col-md-10 col-lg-8 mx-auto">
              <h2
                className="fw-bold position-relative d-inline-block pb-2"
                style={{
                  fontSize: "8rem",
                  color: "#1372B2",
                  marginBottom: "4rem",
                }}
              >
                Nos specialités 
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "3px",
                    backgroundColor: "#8BBB44",
                    borderRadius: "2px",
                  }}
                ></span>
              </h2>
            </div>
            <Specialites />
          </div>
        </section>

        {/* //Events */}
        <section id="evenements">
          <EventsSection />
        </section>

        <section>
          <Services />
        </section>

        <section>
          <LaboratoireSection />
        </section>

        <section>
          <Support/>
        </section>


        <section>
          <ContactSection />
        </section>


      </main>
    </Fragment>
  );
}
