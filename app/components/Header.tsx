"use client";

import { FC, Fragment, useRef } from "react";
import Image from "next/image";
import NextLink from "./NextLink";
import SocialLinks from "./SocialLinks";
import useSticky from "@/public/hooks/useSticky";
import Link from "next/link";

// Topbar Component 

const Topbar: FC = () => {
  return (
    <section className="primary-bg fixed-top shadow-sm" style={{ height: 51.5, zIndex: 1000  }}>
      <div className="container h-100">
        <div className="d-flex align-items-center justify-content-between h-100">
           <div className="d-none d-lg-flex text-white fw-semibold fs-16" >
            <NextLink href="tel:+212523425820" title="Nous sommes là pour vous 24/24h." />
          </div>
           <div className="d-flex align-items-center ">
            <NextLink href="mailto:contact@hopitallesjasmins.com" title="" className="uil uil-envelope fs-22 me-2 text-white"/>
            <a
              href="mailto:contact@hopitallesjasmins.com"
              className="d-flex align-items-center link-white fw-semibold text-white d-none d-lg-inline"
            >
              contact@hopitallesjasmins.com
            </a>
          </div>

           <div className="d-flex align-items-center bg-light-danger px-3 py-2 rounded shadow-sm ">
            <Link href="tel:+212523425820" className="uil uil-phone-volume me-2 " style={{color: '#ff4d4f',  fontSize: '23px',animation: 'pulse 0.5s infinite', }} />
            <a
              href="tel:+212523425820"
              className="fw-bold text-decoration-none"
              style={{ color: '#ff4d4f', fontSize: '16px' , animation: 'pulse 3s infinite',}}
            >
              +212 523425820
            </a>
          </div>
           <div className="d-flex align-items-center gap-2 mt-1.5 mt-md-0">
            {[
              { href: "https://www.facebook.com/", icon: "facebook", label: "Facebook" },
              { href: "https://www.instagram.com/", icon: "instagram", label: "Instagram" },
              { href: "https://api.whatsapp.com/send?phone=212523425820", icon: "whatsapp", label: "WhatsApp" },
            ].map(({ href, icon, label }) => (
            <Link
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-22"
                aria-label={label}
                style={{ transition: "color 0.3s" }}
              >
                <i className={`uil uil-${icon} text-white fs-22`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

 // Navbar Component

 const Logo: FC<{ className?: string }> = ({ className }) => (
  <NextLink
    href="/"
    title={
      <Image
        src="/img/logo1.png"
        alt="Logo | LesJasmins"
        fill
        style={{ objectFit: "contain" }}
        className={className}
      />
    }
  />
);

const Navbar: FC = () => {
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement>(null);

  const headerContent = (
    <Fragment>
       <div className="navbar-brand" style={{ width: 100, height: 65, position: "relative"  ,marginLeft: "-70px"  }}>
        <Logo />
      </div>

       <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start ">
        <div className="offcanvas-header d-lg-none offcanvas-bg nav-logo ">
          <Logo className="p-2 position-static bg-white rounded"  />
          <button type="button" aria-label="Fermer" data-bs-dismiss="offcanvas" className="btn-close btn-close-blue ms-auto" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcanvas-bg  ">
          <ul className="navbar-nav d-flex">
            {[
              { href: "/", title: "Accueil" },
              { href: "/a-propos", title: "À propos" },
              { href: "/services", title: "Services" },
              { href: "/actualites", title: "Événements" },
              { href: "/laboratoire", title: "Laboratoire" },
              { href: "/recrutement", title: "Recrutement" },
              { href: "/contact", title: "Contact" },
            ].map(({ href, title }) => (
              <li className="nav-item" key={href} data-bs-dismiss="offcanvas">
                <NextLink href={href} title={title} className="nav-link "  />
              </li>
            ))}
 
            <li className="nav-item d-flex align-items-center mt-3 mt-lg-0 ms-lg-3" data-bs-dismiss="offcanvas">
              <NextLink
                href="/rendez-vous"
                title="Rendez-vous"
                className="btn btn-sm secondary-bg text-white mb-lg-1 rounded me-2 border border-md-none btn-hover"
              />
            </li>
            {/* <li className="nav-item d-flex align-items-center mt-3 mt-lg-0 ms-lg-3" data-bs-dismiss="offcanvas">
              <NextLink
                href="/login"
                title="Login"
                className="btn btn-sm primary-bg text-white mb-lg-1 rounded border border-md-none btn-hover"
              />
            </li> */}
          </ul>

          <div className="offcanvas-footer d-lg-none mt-auto text-center">
            <SocialLinks />
          </div>
        </div>
      </div>
 
      <div className="navbar-other d-flex d-lg-none">
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          aria-controls="offcanvas-nav"
          aria-label="Menu"
          className="hamburger offcanvas-nav-btn"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <nav
      ref={navbarRef}
      className={sticky 
        ? "navbar navbar-expand-lg center-nav navbar-light  bg-white shadow-sm mobile-sticky navbar-sticky"   
        : "navbar navbar-expand-lg center-nav navbar-light bg-light shadow-sm"
      }
      style={{ 
        position: 'fixed',   
        top: 51.5,   
        left: 0,
        width: "100%",
        zIndex: 1001,   
      }}
    >
      <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
    </nav>  
  );
};
 
//  Header Component

const Header: FC = () => {
  return (
    <>
      <Topbar />
      <Navbar />
    </>
  );
};

export default Header;