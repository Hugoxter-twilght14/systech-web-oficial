import { Navbar } from "@/components/Shared/Navbar"
import SliderHome from "./Home/components/SliderHome/SliderHome"
import CarruselNovedades from "./Home/components/CarruselNovedades/CarruselNovedades"
import Footer from "./Home/components/Footer/Footer"


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />

      {/* Secciones espaciadas y adaptativas */}
      <section className="w-full">
        <SliderHome/>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 py-8 mt-[-100px]">
        <CarruselNovedades/>
      </section>

      <section className="w-full mt-[-80px]">
        <Footer/>
      </section>  
    </div>
  )
}