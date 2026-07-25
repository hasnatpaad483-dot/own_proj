"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function NavigationScrollReset() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  useEffect(() => {
    // Let us control scroll restoration entirely
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Before the user navigates away from "/", overwrite the current history
    // entry's scroll position to 0 so the browser restores to the top on back.
    const handleBeforeUnload = () => {
      if (window.location.pathname === "/") {
        history.replaceState({ ...history.state, __scrollY: 0 }, "");
      }
    };

    // pagehide fires reliably right before the page is hidden (navigation away)
    window.addEventListener("pagehide", handleBeforeUnload);

    // Also handle link clicks that trigger client-side navigation (Next.js router)
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href !== "/" && !href.startsWith("#") && href.startsWith("/")) {
        // Navigating away from the main page — pin scroll position to 0
        if (window.location.pathname === "/") {
          history.replaceState({ ...history.state, __scrollY: 0 }, "");
        }
      }
    };
    document.addEventListener("click", handleClick, true);

    // Listen for popstate events (back/forward button)
    const handlePopState = () => {
      if (window.location.pathname === "/") {
        scrollToTop();
        setTimeout(scrollToTop, 50);
        setTimeout(scrollToTop, 150);
        setTimeout(scrollToTop, 300);
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("pagehide", handleBeforeUnload);
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    // Scroll to top when Next.js router lands on "/" coming from another page
    if (pathname === "/" && prevPathname.current !== null && prevPathname.current !== "/") {
      scrollToTop();
      setTimeout(scrollToTop, 50);
      setTimeout(scrollToTop, 150);
      setTimeout(scrollToTop, 300);
    }
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
