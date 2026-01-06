'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import NextLink from '../components/NextLink';
import { specialitesList } from '@/data/data';
import type { specialite } from '@/data/data';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  return (
    <Fragment>
      {/* HERO */}
      <section
        className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center"
        style={{
          height: '50vh',
          minHeight: '150px',
          backgroundImage: 'url(/img/aboutbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '120px',
        }}
      >
        <div
          className="overlay position-absolute w-100 h-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))',
            top: 0,
            left: 0,
          }}
        />
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="fs-48 text-white mb-3">Nos Spécialités</h1>
          <p className="text-white fs-18">
            Découvrez nos spécialités médicales complètes.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="content-wrapper">
        <section className="wrapper bg-light py-10">
          <div className="container">
            <div className="row g-5">
              {specialitesList.map(({ id, title, src }: specialite) => (
                <div className="col-lg-4 col-md-6" key={id}>
                  <div className="specialite-card">
                    {src && (
                      <Image
                        src={src}
                        alt={title}
                        fill
                        className="specialite-img"
                        priority
                      />
                    )}

                    <div className="specialite-overlay">
                      {/* <h3 className="specialite-title">{title}</h3> */}

                      <Link href="/rendez-vous" className="btn-rdv">
                        rendez-vous
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <NextLink
                href="/"
                title="Retour à l'accueil"
                className="btn btn-outline-secondary"
              />
            </div>
          </div>
        </section>
      </main>

      {/* CSS INLINE JSX */}
      <style >{`
        .specialite-card {
          position: relative;
          height: 250px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: all 0.35s ease;
        }

        .specialite-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
        }

        .specialite-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .specialite-card:hover .specialite-img {
          transform: scale(1.08);
        }

        .specialite-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.20),
            rgba(0, 0, 0, 0.25)
          );
          padding: 22px;
        }

        .specialite-title {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 95px;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        }

        .btn-rdv {
          display: inline-block;
          padding: 0.3rem 1rem;
          border: 2px solid #fff;
          border-radius: 999px;
          background: transparent;
          color: #fff;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
          width: fit-content;
          align-self: center;
        }

        // .btn-rdv:hover {
        //   border: 2px solid #fff;
        //   background-color: #8bbb44;
        //   border-color: #8bbb44;
        //   color: #fff;
        // }
      `}</style>
    </Fragment>
  );
};

export default ServicesPage;
