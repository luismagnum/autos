"use client";
import { useState, useEffect } from "react";
import Redes from "@/components/redes/Redes";
import Hero from "../components/hero/Hero";
import Catalogo from "@/components/catalogo/Catalogo";
import Vehiculo from "@/components/vehiculo/Vehiculo";
import Testimonials from "@/components/testimonials/Testimonials";
import Boton from "../components/Boton";
import ButtonAdmi from "../components/buttonadmi/ButtonAdmi";
import Footer from "@/components/footer/Footer";

interface Car {
  id: number;
  image: string;
  name: string;
  year: number;
  mileage: string;
  fuelType: string;
}

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const storedCars = localStorage.getItem("cars");
    if (storedCars) {
      setCars(JSON.parse(storedCars));
    }
  }, []);

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

