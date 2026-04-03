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
      <div className="container-frame panel rounded-[24px] px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="heading-tech text-sm uppercase tracking-[0.18em] text-[var(--foreground)]"
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
                    "rounded-full px-3 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-200",
                    active
                      ? "bg-[rgba(3,105,161,0.1)] text-[var(--accent)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="heading-tech rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[var(--accent-strong)]"
          >
            Start Project
          </Link>
        </div>
      </div>
    </header>
  );
}
