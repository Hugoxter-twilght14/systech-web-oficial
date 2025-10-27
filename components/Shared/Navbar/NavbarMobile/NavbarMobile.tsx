"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/Shared/Logo";
import { Menu } from "lucide-react";
import { itemsNavbar } from "@/data/itemsNavbar";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/UseScrollPosition";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ToggleTheme } from "@/components/ui/toggle-theme";

export default function NavbarMobile() {
  const scrollPosition = useScrollPosition();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme = mounted ? resolvedTheme ?? "light" : "light";
  const isDark = theme === "dark";
  const isScrolled = scrollPosition > 20;

  const bgClass = cn(
    "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
    isScrolled
      ? "bg-black/90 backdrop-blur shadow-lg shadow-black/20"
      : isDark
      ? "bg-black"
      : "bg-white"
  );

  const textColor = isScrolled || isDark ? "text-white" : "text-black";

  return (
    <div className={bgClass}>
      <div className="p-4 flex justify-between items-center">
        <Logo className={textColor} />

        <Sheet>
          <SheetTrigger>
            <Menu
              className={cn(
                "h-6 w-6 transition-colors duration-200",
                textColor,
                "hover:text-[#00ffff]"
              )}
            />
          </SheetTrigger>

          {/* Contenido lateral */}
          <SheetContent side="left" className={isDark ? "bg-black text-white" : "bg-white text-black"}>
            <div className="flex flex-col gap-4 mt-6">
              {itemsNavbar.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "font-medium transition-all duration-300",
                    "hover:text-[#00ffff]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className={cn("border my-5", isDark ? "border-white/40" : "border-black/30")} />

            <ToggleTheme className="mx-3 my-[-10px]"/>

            <div className="flex justify-center mt-35">
            <Logo/>
          </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
