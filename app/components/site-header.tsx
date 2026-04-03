"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "../business";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-30 px-4 sm:px-6">
      <div className="container-frame panel rounded-2xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="heading-tech text-sm uppercase tracking-[0.18em] text-white"
          >
            {brand.name}
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-lg px-3 py-2 text-xs uppercase tracking-[0.16em] transition-colors duration-200",
                    active
                      ? "bg-[rgba(67,217,189,0.12)] text-[var(--accent-soft)]"
                      : "text-[var(--muted)] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="heading-tech rounded-lg border border-[var(--line)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--gold)] transition-colors duration-200 hover:bg-[rgba(202,138,4,0.08)]"
          >
            Start Project
          </Link>
        </div>
      </div>
    </header>
  );
}
