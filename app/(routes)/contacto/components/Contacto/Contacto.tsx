"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from "react-icons/fa"
import axios from "axios"
import Link from "next/link"

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    servicio: "Mantenimiento general",
    mensaje: ""
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("/api/enviar-correo", form) 
      alert("Mensaje enviado correctamente.")
      setForm({ nombre: "", correo: "", servicio: "Mantenimiento general", mensaje: "" })
    } catch {
      alert("Error al enviar el mensaje.")
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-neutral-900 dark:text-white grid md:grid-cols-2 gap-10 mt-10">
      {/* Información de contacto */}
      <div className="space-y-6">
        <h2 className="text-3xl font-extrabold uppercase">Contáctanos</h2>

        <p className="text-neutral-700 dark:text-gray-400">
          Te proporcionamos toda la información, redes y números de telefono para contactarnos.
          si necesitas cotizar algo no dudes en acudir a algua de estas opciones o rellena el siguiente formulario.
        </p>

        <div className="space-y-4 text-sm text-neutral-900 dark:text-gray-300">
          {/* Dirección */}
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="shrink-0 text-cyan-600 dark:text-cyan-400" />
            <span>
              Dirección: <span className="font-medium">CP. 30700 – Tapachula, Chis.</span>
            </span>
          </p>

          {/* Email */}
        <p className="flex items-center gap-3">
          <FaEnvelope className="shrink-0 text-cyan-600 dark:text-cyan-400" />
          <span>
            Email:{" "}
            <a
              href="mailto:hbstudiosoficial14@gmail.com"
              className="underline decoration-transparent hover:decoration-current"
            >
              hbstudiosoficial14@gmail.com
            </a>
          </span>
        </p>

          {/* Teléfonos */}
          <div className="flex items-start gap-3">
            <FaPhone className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-400" />
          <div>
            <span className="block font-medium text-neutral-900 dark:text-white">Teléfonos:</span>
              <ul className="mt-1 flex flex-wrap gap-2">
                {["962 214 4484", "918 694 9662", "962 170 5420", "962 149 8656"].map((n) => (
                  <li key={n}>
                    <a
                      href={`tel:${n.replace(/\s/g, "")}`}
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm
                           bg-neutral-200 text-neutral-900 border border-neutral-300
                           hover:bg-cyan-100 hover:border-cyan-300
                           dark:bg-neutral-800 dark:text-white dark:border-neutral-700
                           dark:hover:bg-cyan-900/40 dark:hover:border-cyan-700
                           transition-colors"
                    >
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>

      {/* Redes sociales */}
      <p className="text-sm text-neutral-600 dark:text-gray-400">o visítanos en:</p>
      <div className="flex items-center gap-5 text-2xl">
        <Link
          href="https://www.facebook.com/profile.php?id=61557207407406"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="leading-none"
        >
          <FaFacebook className="text-blue-700 hover:text-red-800 dark:text-blue-500 dark:hover:text-[#00ffff] transition-colors" />
        </Link>

        <Link
          href="https://www.instagram.com/systech_04?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="leading-none"
        >
          <FaInstagram className="text-pink-700 hover:text-red-400 dark:text-pink-500 dark:hover:text-[#00ffff] transition-colors" />
        </Link>

        <Link
          href="https://youtube.com/@systech_oficial?si=ZBDj18eOpmyYTZBE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="leading-none"
        >
          <FaYoutube className="text-red-700 hover:text-red-400 dark:text-red-500 dark:hover:text-[#00ffff] transition-colors" />
        </Link>

        <Link
          href="https://www.tiktok.com/@systech_oficial?is_from_webapp=1&sender"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="leading-none"
        >
          <FaTiktok className="text-neutral-900 hover:text-red-800 dark:text-white dark:hover:text-[#00ffff] transition-colors" />
        </Link>
      </div>
    </div>


      {/* Formulario con borde animado */}
      <div className="relative">
        {/* Capa animada giratoria */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 animate-spin-slower blur-sm z-0" />

          {/* Contenido del form */}
          <div className="relative z-10 rounded-xl p-6 shadow-lg bg-white dark:bg-[#1f1f1f] border border-neutral-200 dark:border-transparent">
            <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold mb-2">Enviar Mensaje</h3>

            {/* Nombre */}
            <div className="space-y-1">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-neutral-700 dark:text-gray-300"
              >
                Nombre completo*
              </label>
              <Input
                id="nombre"
                placeholder="Escribe tu nombre completo"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="bg-white dark:bg-[#111] text-neutral-900 dark:text-white"
              />
            </div>

            {/* Correo */}
            <div className="space-y-1">
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-neutral-700 dark:text-gray-300"
              >
                Correo electrónico*
              </label>
              <Input
                id="correo"
                type="email"
                placeholder="Ej. tucorreoexample@gmail.com"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
                className="bg-white dark:bg-[#111] text-neutral-900 dark:text-white"
              />
            </div>

            {/* Servicio */}
            <div className="space-y-1">
              <label
                htmlFor="servicio"
                className="block text-sm font-medium text-neutral-700 dark:text-gray-300"
              >
                Servicio*
              </label>
              <select
                id="servicio"
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                required
                className="w-full h-10 rounded-md border border-input bg-white dark:bg-[#111] px-3 py-2 text-sm
                   text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500 transition"
              >
                <option>1.-Mantenimiento general</option>
                <option>2.-Instalación de software o programas</option>
                <option>3.-Desarrollo de software web o app</option>
              </select>
            </div>

            {/* Mensaje */}
            <div className="space-y-1">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-neutral-700 dark:text-gray-300"
              >
                Mensaje*
              </label>
              <Textarea
                id="mensaje"
                placeholder="Cuéntanos brevemente tu solicitud…"
                name="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                required
                className="bg-white dark:bg-[#111] text-neutral-900 dark:text-white"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-black"
            >
              Enviar
            </Button>
          </form>
        </div>

      </div>
    </section>
  )
}
