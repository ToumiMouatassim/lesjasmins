import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import NextLink from "./NextLink";
import {aboutUsFooter } from "@/data/data";

interface FooterItem {
  id: number | string;
  url?: string;
  title: string;
}

interface FooterWidgetProps {
  title: string;
  items: FooterItem[];
} 
const FooterWidget: FC<FooterWidgetProps> = ({ title, items }) => (
  <div className="widget">
    <h3 className="widget-title fs-20 mb-3">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {items.map(({ id, url, title }) => (
        <li key={id}>
          <i className="uil uil-arrow-right me-3" />
          <NextLink href={url || "#"} title={title} className="footer-links" />
        </li>
      ))}
    </ul>
  </div>
);

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden" style={{ backgroundColor: "#f0f8ff" }}>
      <div className="container pb-3 mt-10">
        <div className="row justify-content-around">
           <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="d-flex w-100">
                <Image
                  src="/img/logo1.png"
                  alt="Logo | LesJasmins"
                  width={150}
                  height={100}
                  className="text-center"
                  style={{
                    width: "200px",
                    height: "120px",
                    marginLeft: "-10px",
                    position: "relative",
                  }}
                />
              </div>

              <div className="widget mt-3">
                <div className="d-flex mb-1 align-items-start">
                  <i className="uil uil-location-pin-alt fs-26" />
                  <address className="ms-2 m-0 mt-1">
                    Lotissement Mawra Oulad ayad, Béni Mellal, Morocco
                  </address>
                </div>
                <div className="d-flex mb-1 align-items-center">
                  <i className="uil uil-envelope fs-26" />
                  <Link href="mailto:hopitalprivelesjasmins@gmail.com" className="link-body ms-2">
                    hopitalprivelesjasmins@gmail.com
                  </Link>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <i className="uil uil-phone-volume fs-26" />
                  <p className="m-0 ms-2 fs-16">
                    <Link href="tel:+212523425820">+212 523425820</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column mt-3">
              <h3 className="fs-20">Connectez-vous</h3>
              <SocialLinks className="nav social" />
            </div>
          </div>

           <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 ms-0 ms-md-5">
            <FooterWidget title="Liens rapides" items={aboutUsFooter} />
          </div>

           <div className="col-lg-3 mt-md-5 mt-lg-0 mt-10">
            <div className="widget">
              <h3 className="widget-title fs-20 mb-3">Localisation</h3>
              <div className="d-flex justify-content-center border rounded">
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11255.591011014323!2d-6.377171630135382!3d32.32771514729731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3870075087b93%3A0x41a4e5c5647399e0!2sH%C3%B4pital%20Priv%C3%A9%20Les%20Jasmins!5e1!3m2!1sfr!2sma!4v1772189666266!5m2!1sfr!2sma"
                  height={250}
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mt-md-4 mb-3" />

        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0">© {currentYear} DELTACO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
