"use client";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/Shared/Logo";
import { itemsNavbar } from "@/data/itemsNavbar";
import { useScrollPosition } from "@/hooks/UseScrollPosition";
import Link from "next/link";
import { ToggleTheme } from "@/components/ui/toggle-theme";

export function NavbarDesktop() {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  // Fondo de la barra
  const navbarBg = isScrolled
    ? "bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70 shadow-lg shadow-black/20"
    : "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70";

  // Colores de texto por estado
  const linkBase = "transition-colors duration-200 font-semibold tracking-wide";
  const linkColor = isScrolled ? "text-white" : "text-neutral-900";
  const linkHover = isScrolled ? "hover:text-[#00ffff]" : "hover:text-red-800";

  return (
    <div
      className={cn(
        "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
        navbarBg
      )}
    >
      <div className="px-[4%] mx-auto h-full">
        <div className="flex gap-4 justify-between h-full items-center">
          <div className="flex gap-2 items-center">
            <span className={cn(isScrolled ? "text-white" : "text-neutral-900")}>
              <Logo />
            </span>

            <nav className="ml-10 flex gap-6">
              {itemsNavbar.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(linkBase, linkColor, linkHover)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <ToggleTheme className={isScrolled ? "text-white" : "text-black"}/>

          </div>
        </div>
      </div>
    </div>
  );
}
