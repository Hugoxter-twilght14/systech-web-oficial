import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string; // permite controlar el color desde fuera
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      title="Systech"
      className={cn(
        // alineado limpio, sin márgenes negativos
        "inline-flex items-center gap-3 select-none",
        // el color del texto lo hereda (text-current)
        className
      )}
    >
      <Image
        src="/logos/logo.png"
        alt="Systech"
        width={35}
        height={35}
        className="rounded-full"
        priority
      />
      {/* Hereda el color del padre */}
      <span className="font-extrabold text-2xl leading-none tracking-wide text-current">
        SYSTECH
      </span>
    </Link>
  );
}
