"use client";

import { useEffect } from 'react';
import { usePathname } from "next/navigation";

const ThemeProvider = ({
  children
}) => {
  const {
    router
  } = usePathname();

  const removePageLoader = () => {
    const pageLoader = document.querySelector('.page-loader');

    if (pageLoader) {
      pageLoader.remove();
    }
  };

  useEffect(() => {
    if (typeof window === undefined) return; 
    let timer;
    timer = setTimeout(() => removePageLoader(), 1000);
    return () => clearTimeout(timer);
  }, [router]);
  return <>{children}</>;
};

export default ThemeProvider;