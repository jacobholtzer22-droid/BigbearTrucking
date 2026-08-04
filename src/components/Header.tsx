"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/site.config";
import { PhoneLink } from "./PhoneLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-concrete bg-asphalt">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-bone sm:text-2xl"
        >
          {siteConfig.businessName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-smoke transition-colors duration-200 hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
          <PhoneLink size="sm" className="text-safety-amber" />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <PhoneLink size="sm" showIcon={true} className="text-safety-amber" />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded p-2 text-bone transition-colors duration-200 hover:bg-concrete"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-concrete bg-asphalt px-4 pb-4 md:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-base font-medium text-bone transition-colors duration-200 hover:text-safety-amber"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
