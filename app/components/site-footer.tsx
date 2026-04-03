import Link from "next/link";
import { brand } from "../business";

export function SiteFooter() {
  return (
    <footer className="mt-14 px-4 pb-8 sm:px-6">
      <div className="container-frame panel rounded-2xl p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="heading-tech text-xs uppercase tracking-[0.16em] text-[var(--accent-soft)]">
              {brand.name}
            </p>
            <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">
              Premium technology execution with clarity, discipline, and long-term reliability.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            <Link href="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link href="/process" className="transition-colors hover:text-white">
              Process
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
