"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";
// import { Separator } from "@/components/ui/separator";

export function Footer3() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto flex flex-col gap-12 px-6 lg:gap-16">
        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-12 text-center md:gap-6 lg:flex-row lg:text-left">
          {/* Copyright Text */}
          {/* Logo */}
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Legal Navigation */}
          <nav
            className="order-1 flex flex-col items-center gap-6 text-center md:order-2 md:flex-row md:gap-7"
            aria-label="Legal links"
          >
            <div>
            <p className="text-muted-foreground order-2 md:order-1">
            Neighbors Wealth Management © {new Date().getFullYear()}
            </p>
            </div>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
