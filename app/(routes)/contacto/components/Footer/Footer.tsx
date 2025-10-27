"use client";

import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 text-black dark:bg-black dark:text-white mt-16 transition-colors">
      {/* Separador superior sutil */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-800" />

      {/* Contenedor general */}
      <div className="py-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:items-center">
        
        {/* Redes sociales */}
        <div className="flex justify-center space-x-6 text-2xl">
          <Link
            href="https://www.facebook.com/profile.php?id=61557207407406"
            target="_blank"
            aria-label="Facebook"
            className="text-blue-700 hover:text-red-800 dark:text-blue-400 dark:hover:text-[#00ffff] transition"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/systech_04?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            aria-label="Instagram"
            className="text-pink-600 hover:text-red-800 dark:text-pink-400 dark:hover:text-[#00ffff] transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://youtube.com/@systech_oficial?si=ZBDj18eOpmyYTZBE"
            target="_blank"
            aria-label="Youtube"
            className="text-red-600 hover:text-red-800 dark:text-red-600 dark:hover:text-[#00ffff] transition"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.tiktok.com/@systech_oficial?is_from_webapp=1&sender"
            target="_blank"
            aria-label="TikTok"
            className="text-black hover:text-red-800 dark:text-white dark:hover:text-[#00ffff] transition"
          >
            <FaTiktok />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          &copy; 2024–{new Date().getFullYear()}{" "}
          <span className="font-semibold">SYSTECH</span> | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
