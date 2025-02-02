"use client";
import Redes from "@/components/redes/Redes";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import Catalogo from "@/components/catalogo/Catalogo";
import Vehiculo from "@/components/vehiculo/Vehiculo";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import Boton from "../components/Boton";

export default function Home() {
  return (
  <div className="overflow-x-hidden">
   <Navbar />
    <div id='home'>
      <Hero />
    </div>
    <div id='catalogo'>
      <Catalogo />
    </div>
    <Vehiculo />
    <Redes />
    <Testimonials />
    <Footer />
    <Boton />
   </div>
  );
}
