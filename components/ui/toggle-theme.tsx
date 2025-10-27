"use client";

import * as React from "react";
import { Moon, Sun, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = { className?: string };

export function ToggleTheme({ className }: Props) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          // ghost para que no “ensucie” el navbar; hereda color
          variant="ghost"
          size="icon"
          className={cn(
            "relative text-current border border-current/25 hover:bg-foreground/5",
            "focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#00ffff]/60",
            className
          )}
          aria-label="Cambiar tema"
        >
          {/* Mientras no monta, muestra solo Sun para evitar parpadeo */}
          {mounted ? (
            <>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </>
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[9rem]">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center justify-between">
          Light {mounted && resolvedTheme === "light" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center justify-between">
          Dark {mounted && resolvedTheme === "dark" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center justify-between">
          System {mounted && resolvedTheme !== "light" && resolvedTheme !== "dark" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
