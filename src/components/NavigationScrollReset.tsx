"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function NavigationScrollReset() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);
  // Track whether we need to lock scroll to top after a back-navigation
  const lockScrollRef = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const isReturningToHome =
      pathname === "/" &&
      prevPathname.current !== null &&
      prevPathname.current !== "/";

    prevPathname.current = pathname;

    if (!isReturningToHome) return;

    // Immediately scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Engage the scroll lock so any framework/browser scroll restoration
    // attempt that fires in the next ~400ms gets overridden
    lockScrollRef.current = true;

    const forceTop = () => {
      if (lockScrollRef.current) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    // Override scrollTo temporarily so nothing can scroll away from top
    const originalScrollTo = window.scrollTo.bind(window);
    const guardedScrollTo = (...args: Parameters<typeof window.scrollTo>) => {
      // If we're locking, ignore any scroll-to call that isn't top:0
      if (lockScrollRef.current) {
        const options = args[0];
        if (typeof options === "object" && options !== null) {
          if ((options as ScrollToOptions).top !== 0) return;
        } else if (typeof args[0] === "number" && args[0] !== 0) {
          return;
        }
      }
      originalScrollTo(...args);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).scrollTo = guardedScrollTo;

    // Poll to keep top while locked
    const intervals = [10, 30, 60, 100, 150, 200, 300, 400].map((ms) =>
      setTimeout(forceTop, ms)
    );

    // Release the lock after 450ms
    const releaseLock = setTimeout(() => {
      lockScrollRef.current = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).scrollTo = originalScrollTo;
    }, 450);

    return () => {
      lockScrollRef.current = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).scrollTo = originalScrollTo;
      intervals.forEach(clearTimeout);
      clearTimeout(releaseLock);
    };
  }, [pathname]);

  return null;
}
