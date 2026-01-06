'use client';

import { Fragment, JSX } from "react";
import { servicesdetails as servicesData, service } from "@/data/data";
import NextLink from "@/app/components/NextLink";

import {
  Stethoscope, HeartPulse, Syringe, Hospital, UserCheck, Activity, FileText, User,
  Thermometer, BarChart, Heart, Crosshair, Clipboard,
  Pill, Bone, Eye, Ear, Brain, FlaskRound, Monitor, Dumbbell, Apple
} from 'lucide-react';

import { motion } from "framer-motion";

export default function ServicesDetailsPage() {

  const iconsMap: Record<number, JSX.Element> = {
    1: <Hospital size={50} color="#EF4444" />,
    2: <Stethoscope size={50} color="#3B82F6" />,
    3: <UserCheck size={50} color="#10B981" />,
    4: <Activity size={50} color="#F59E0B" />,
    5: <HeartPulse size={50} color="#EC4899" />,
    6: <Heart size={50} color="#DC2626" />,
    7: <Thermometer size={50} color="#F97316" />,
    8: <Brain size={50} color="#8B5CF6" />,
    9: <FileText size={50} color="#22D3EE" />,
    10: <Pill size={50} color="#F43F5E" />,
    11: <FlaskRound size={50} color="#4ADE80" />,
    12: <BarChart size={50} color="#2563EB" />,
    13: <Bone size={50} color="#F59E0B" />,
    14: <Crosshair size={50} color="#EF4444" />,
    15: <Clipboard size={50} color="#10B981" />,
    16: <Syringe size={50} color="#3B82F6" />,
    17: <Bone size={50} color="#EF4444" />,
    18: <Eye size={50} color="#EC4899" />,
    19: <Ear size={50} color="#F59E0B" />,
    20: <Brain size={50} color="#6366F1" />,
    21: <FlaskRound size={50} color="#22D3EE" />,
    22: <Monitor size={50} color="#DC2626" />,
    23: <Pill size={50} color="#10B981" />,
    24: <Dumbbell size={50} color="#F97316" />,
    25: <Apple size={50} color="#3B82F6" />,
    26: <User size={50} color="#EC4899" />,
  };

  return (
    <Fragment>
      {/* HERO */}
      <section className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center"
        style={{
          height: '50vh',
          backgroundImage: 'url(/img/aboutbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '120px',
        }}
      >
        <div className="overlay position-absolute w-100"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))',
            top: 0,
            bottom: 0,
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container text-center position-relative pt-10"
        >
          <h1 className="fs-48 text-white mb-3">Nos services</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-2 text-white fs-18"
          >
            Cliquez sur un service pour accéder directement à sa section.
          </motion.p>
        </motion.div>
      </section>

      {/* LIST + DETAILS */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">

            {/* LEFT SIDE — SERVICES DETAILS */}
            <div className="col-lg-8">
              {servicesData.map((serviceItem, i) => (
                <motion.div
                  id={`service-${serviceItem.id}`}
                  key={serviceItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="service-card p-4 rounded shadow-sm mb-4"
                  style={{ scrollMarginTop: '120px' }}  
                >
                  <div className="text-center">
                    <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
                      {iconsMap[serviceItem.id]}
                    </motion.div>
                    <h3 className="fw-bold mb-3">{serviceItem.title}</h3>
                    <p className="text-muted">{serviceItem.description}</p>
                    <div className="mt-4 d-flex justify-content-center gap-3">
                      <NextLink
                        href="/rendez-vous"
                        title="Rendez-vous"
                        className="btn secondary-bg text-white p-2 rounded-pill"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE  */}
            <div className="col-lg-4">
              <div className="p-4 rounded shadow-sm bg-white">
                <h5 className="fw-bold mb-3">Autres Services</h5>
                {servicesData.map((s: service) => (
                  <a
                    key={s.id}
                    href={`#service-${s.id}`}
                    className="d-block p-2 mb-2 bg-light rounded border-start border-3 text-decoration-none"
                    style={{ borderColor: "#0dcaf0", color: "#000" }}
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        <style>{`
          html {
            scroll-behavior: smooth;
          }
          .service-card {
            background: #fff;
            border-radius: 0.8rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 22px rgba(0,0,0,0.15);
          }
          h3 {
            font-size: 1.3rem;
          }
        `}</style>
      </section>
    </Fragment>
  );
}
