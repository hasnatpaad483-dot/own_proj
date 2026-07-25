"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnMount() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    // Only handle the sessionStorage scroll-to-section case here.
    // Back-navigation scroll reset is handled by NavigationScrollReset.
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (!scrollTarget) return;

    sessionStorage.removeItem("scrollTarget");

    const tryScroll = (attemptsLeft: number) => {
      const element = document.getElementById(scrollTarget);
      if (element) {
        const offset =
          window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 135 : 100;
        const top =
          element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (attemptsLeft > 0) {
        setTimeout(() => tryScroll(attemptsLeft - 1), 100);
      }
    };

    setTimeout(() => tryScroll(5), 100);
  }, [pathname]);

  return null;
}
