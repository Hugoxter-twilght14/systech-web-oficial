import { Navbar } from "@/components/Shared/Navbar"
import SliderHome from "./components/SliderHome/SliderHome"
import Footer from "./components/Footer/Footer"
import Historia from "./components/Historia/Historia"
import Equipo from "./components/Equipo/Equipo"
import MisionVisionValores from "./components/MisionVisionValores/MisionVisionValores"


export default function page() {
  return (
    <div className="w-full min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />

      {/* Secciones espaciadas y adaptativas */}
      <section className="w-full">
        <SliderHome/>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 py-8 mt-[-35px]">
      <Historia/>
      <Equipo/>
      <MisionVisionValores/>
       </section>

      <section className="w-full mt-[-80px]">
        <Footer/>
      </section>  
    </div>
  )
}