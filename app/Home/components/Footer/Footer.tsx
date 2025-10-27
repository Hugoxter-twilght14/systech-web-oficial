"use client";

import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 text-black dark:bg-black dark:text-white mt-16 transition-colors">
      {/* Separador superior sutil */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-800" />

      <div className="py-8 max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Redes sociales */}
        <div className="flex space-x-6 text-2xl">
          <Link href="https://www.facebook.com/share/16B9hLxNeS/" target="_blank" aria-label="Facebook"
            className="text-blue-700 hover:text-red-800 dark:text-blue-400 dark:hover:text-[#00ffff] transition">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/hb_studios14/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" aria-label="Instagram"
            className="text-pink-600 hover:text-red-800 dark:text-pink-400 dark:hover:text-[#00ffff] transition">
            <FaInstagram />
          </Link>
          <Link href="https://www.whatsapp.com/channel/0029VaeFE7vJ3jv0723pXa1P" target="_blank" aria-label="WhatsApp"
            className="text-green-600 hover:text-red-800 dark:text-green-400 dark:hover:text-[#00ffff] transition">
            <FaWhatsapp />
          </Link>
          <Link href="https://www.tiktok.com/@tu_usuario" target="_blank" aria-label="TikTok"
            className="text-black hover:text-red-800 dark:text-white dark:hover:text-[#00ffff] transition">
            <FaTiktok />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; 2024–{new Date().getFullYear()} <span className="font-semibold">SYSTECH</span> | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
