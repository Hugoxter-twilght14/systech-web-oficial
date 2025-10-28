import { Navbar } from "@/components/Shared/Navbar"
import SliderHome from "./components/SliderHome/SliderHome"
import Footer from "./components/Footer/Footer"
import Contacto from "./components/Contacto/Contacto"


export default function page() {
  return (
    <div className="w-full min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />

      {/* Secciones espaciadas y adaptativas */}
      <section className="w-full">
        <SliderHome/>
      </section>

      <main className="flex-grow">
        <Contacto />
      </main>

      <section className="w-full mt-[-80px]">
        <Footer/>
      </section>  
    </div>
  )
}