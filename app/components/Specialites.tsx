'use client';

import Image from 'next/image';
import NextLink from './NextLink';
import { specialitesList } from '@/data/data';
import { Fragment } from 'react';
import Link from 'next/link';

interface ServiceItem {
  id: number | string;
  title?: string;
  src?: string;
}

const Services = () => {
  if (!specialitesList || specialitesList.length === 0) return null;

  return (
    <Fragment>
      <div className="position-relative">
        <div className="row gx-md-5 gy-5 justify-content-center">
          {specialitesList.slice(0, 6).map((item: ServiceItem) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="specialite-card">
                {item.src && (
                  <Image
                    src={item.src.startsWith('/') ? item.src : `/${item.src}`}
                    alt={item.title || 'Spécialité'}
                    fill
                    className="specialite-img"
                  />
                )}

                <div className="specialite-overlay">
                  <h3 className="specialite-title text-white">{item.title}</h3>

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
            title="Voir plus"
            href="/specialites"
            className="btn btn-md text-white secondary-bg rounded"
          />
        </div>
      </div>

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

      `}</style>
    </Fragment>
  );
};

export default Services;
