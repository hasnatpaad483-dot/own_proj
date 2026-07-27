"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  primaryNavItems,
  sectionNavItems,
  utilityNavItems,
} from "@/lib/term-deposit-data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function handleHomeClick(href: string, e: React.MouseEvent<HTMLAnchorElement>) {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleSectionClick(href: string, e: React.MouseEvent<HTMLAnchorElement>) {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    // If element not on this page, go to home and signal a scroll target via sessionStorage
    if (!element) {
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", targetId);
      window.location.href = "/";
      return;
    }
    e.preventDefault();
    let offset = window.innerWidth < 640 ? 150 : window.innerWidth < 1024 ? 135 : 100;
    if (targetId === "open-an-account") {
      offset = window.innerWidth < 640 ? 0 : window.innerWidth < 1024 ? 0 : -60;
    }
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, "", href);
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black bg-[var(--nav-dark)] text-white">
      <div className="border-b border-white/10 bg-[#4d4d4d]">
        <div className="mx-auto hidden h-9 max-w-[1440px] items-center justify-center gap-9 px-8 text-[13px] font-semibold text-white lg:flex">
          {utilityNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleHomeClick(item.href, e)}
              className="leading-none tracking-[-0.01em] text-white transition hover:text-white/90"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[96px] lg:px-8">
        {/* Mobile: logo on the left */}
        <Link href="/" className="inline-flex items-center gap-2 text-white lg:hidden">
          <Image
            src="/mlogo-white.svg"
            alt="Macquarie logo"
            width={39}
            height={39}
            className="h-[39px] w-[39px] shrink-0"
          />
          <span
            className="translate-y-[1px] text-base leading-none font-normal tracking-[-0.015em] text-white"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            MACQUARIE
          </span>
        </Link>

        {/* Desktop: logo on the left */}
        <Link
          href="/"
          className="hidden shrink-0 items-center gap-[11px] pr-[22px] text-white lg:ml-[24px] lg:inline-flex"
        >
          <Image
            src="/mlogo-white.svg"
            alt="Macquarie logo"
            width={47}
            height={47}
            className="h-[47px] w-[47px] shrink-0 lg:translate-x-[8px]"
          />
          <span
            className="translate-y-[1px] text-[18px] leading-none font-normal tracking-[-0.015em] text-white"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            MACQUARIE
          </span>
        </Link>

        <nav className="hidden flex-1 items-center self-stretch lg:flex">
          {primaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleSectionClick(item.href, e)}
              className="relative flex items-center px-5 text-[15px] font-semibold tracking-[-0.015em] text-white transition hover:text-white"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile: hamburger on the right */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile: nav items in a scrollable row below the header bar */}
      <div className="border-t border-white/10 lg:hidden">
        <div className="flex items-center gap-1 overflow-x-auto px-4 py-2 sm:px-6 scrollbar-none">
          {primaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleSectionClick(item.href, e)}
              className="shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 whitespace-nowrap"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-[var(--nav-dark)] p-6 text-white shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2.5">
                <Image
                  src="/mlogo-white.svg"
                  alt="Macquarie logo"
                  width={39}
                  height={39}
                  className="h-[39px] w-[39px] shrink-0"
                />
                <span
                  className="translate-y-[1px] text-base leading-none font-normal tracking-[-0.015em] text-white"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  MACQUARIE
                </span>
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 transition hover:bg-white/10"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 border-b border-white/12 pb-5">
              {utilityNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-sm text-white/86 transition hover:bg-white/10"
                  onClick={(e) => { handleHomeClick(item.href, e); setMobileOpen(false); }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 py-5">
              {primaryNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold transition hover:bg-white/10"
                  onClick={(e) => { handleSectionClick(item.href, e); setMobileOpen(false); }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-auto rounded-[28px] border border-white/12 bg-white/5 p-4">
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/55">
                Jump to section
              </p>
              <div className="flex flex-wrap gap-2">
                {sectionNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/84 transition hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
