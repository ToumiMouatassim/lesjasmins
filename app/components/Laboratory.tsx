"use client";

import { FC } from "react";
import { Stethoscope, HeartPulse, Syringe, Hospital } from "lucide-react";

const services = [
  {
    title: "Consultations Générales",
    description:
      "Des consultations avec nos médecins pour un diagnostic rapide et précis.",
    icon: <Stethoscope size={65} color="#3B82F6" />, 
  },
  {
    title: "Urgences 24/7",
    description:
      "Une équipe médicale prête à intervenir immédiatement pour toute urgence.",
    icon: <Hospital size={65} color="#EF4444" />,
  },
  {
    title: "Cardiologie",
    description:
      "Suivi complet du cœur, ECG, échographie cardiaque et traitements spécialisés.",
    icon: <HeartPulse size={65} color="#EC4899" />,
  },
  {
    title: "Vaccination",
    description:
      "Service de vaccination pour enfants et adultes par des professionnels qualifiés.",
    icon: <Syringe size={65} color="#10B981" />,
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        <h2 className="services-title text-center position-relative pb-3 fw-bold">
          Nos Services
          <span className="underline"></span>
        </h2>

        <div className="row mt-5 g-4">
          {services.map((service, index) => (
            <div className="col-md-6" key={index}>
              <div
                className="service-card p-4 rounded shadow-sm h-100 text-center"
                role="button"
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "/services")}   
              >
                <div className="icon mb-4">{service.icon}</div>

                <h3 className="service-card-title fw-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>    

        <div className="text-center mt-5">
          <a href="/services" className="btn btn-primary px-4 py-2 rounded-pill">
            Voir plus
          </a>
        </div>
      </div>

      <style >{`
        .services-section {
          background: #f8f9fa;
        }

        .services-title {
          font-size: 42px;
          letter-spacing: 0.5px;
        }

        .underline {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 85px;
          height: 5px;
          background-color: #8bbb44;
          transform: translateX(-50%);
          border-radius: 3px;
        }

        .service-card {
          background: #fff;
          transition: 0.3s ease;
          border: 1px solid #eee;
        }

        .service-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .service-card-title {
          font-size: 28px;
          color: #222;
        }

        @media (max-width: 767px) {
          .services-title {
            font-size: 32px;
          }
          .service-card-title {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
