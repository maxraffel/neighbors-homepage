"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

// const MENU_ITEMS = [
//   { label: "Products", href: "#" },
//   { label: "Use cases", href: "#" },
//   { label: "Docs", href: "#" },
//   { label: "Pricing", href: "#" },
//   { label: "FAQ", href: "#" },
// ] as const;

// interface NavMenuItemsProps {
//   className?: string;
// }

// const NavMenuItems = ({ className }: NavMenuItemsProps) => (
//   <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
//     {MENU_ITEMS.map(({ label, href }) => (
//       <Link key={label} href={href}>
//         <Button variant="ghost" className="w-full md:w-auto">
//           {label}
//         </Button>
//       </Link>
//     ))}
//   </div>
// );

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if we're on the homepage
    if (pathname === '/') {
      // Same page - smooth scroll to contact
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Different page - navigate to homepage with contact hash
      router.push('/#contact');
    }
  };

  return (
    <nav className="dark bg-background sticky top-0 isolate z-50 py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo className="dark" />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          {/* <NavMenuItems /> */}
          <Button onClick={handleGetStarted}>Get started</Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            {/* <NavMenuItems /> */}
            <Button className="w-full" onClick={handleGetStarted}>Get started</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
