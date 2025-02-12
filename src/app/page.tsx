"use client";
import Redes from "@/components/redes/Redes";
import Hero from "../components/hero/Hero";
import Catalogo from "@/components/catalogo/Catalogo";
import Vehiculo from "@/components/vehiculo/Vehiculo";
import Testimonials from "@/components/testimonials/Testimonials";
import Boton from "../components/Boton";
import ButtonAdmi from "../components/buttonadmi/ButtonAdmi";
import Footer from "@/components/footer/Footer";



export default function Home() {
  

  return (
    <div className="overflow-x-hidden">
      <div id="home">
      <Hero />
      </div>
      <div id="catalogo">
      <Catalogo/>
      </div>
      <ButtonAdmi />
      <div id="vehiculo">
      <Vehiculo />
      </div>
      <div id="redes">
        <Redes />
      </div>
      <div id="testimonials">
      <Testimonials />
      </div>
      <Footer />
      <Boton />
    </div>
  );
}

