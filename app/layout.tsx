"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/style.css";
import "@/styles/responsive.css";
import "animate.css";
import 'aos/dist/aos.css';
import "plyr-react/plyr.css";
import "@/public/plugins/scrollcue/scrollCue.css";
import ScrollCue from "@/public/plugins/scrollcue";
import "@/public/assets/scss/style.scss";

import { ReactNode, useEffect, useState, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ThemeProvider from "../public/theme/ThemeProvider";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("bootstrap");

    if (ScrollCue) {
      ScrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      ScrollCue.update();
    }

    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          <ToastContainer position="bottom-right" autoClose={5000} />
          {loading ? (
            <div className="page-loader" />
          ) : (
            <Fragment>
              <Header />
              <main>{children}</main>
              <Footer />
            </Fragment>
          )}
        </ThemeProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <script
          src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
          defer
        ></script>
      </body>
    </html>
  );
}
