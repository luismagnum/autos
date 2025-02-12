"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Redes from "@/components/redes/Redes";
import Link from "next/link";

interface Car {
  id: number;
  image: string;
  name: string;
  year: number;
  mileage: string;
  fuelType: string;
}

export default function AdminPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    year: "",
    mileage: "",
    fuelType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCar: Car = {
      id: cars.length + 1,
      image: formData.image,
      name: formData.name,
      year: Number(formData.year),
      mileage: formData.mileage,
      fuelType: formData.fuelType,
    };
    setCars([...cars, newCar]);
    setFormData({ image: "", name: "", year: "", mileage: "", fuelType: "" });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Panel de Administración</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-4">
        <Input name="image" placeholder="URL de la imagen" value={formData.image} onChange={handleChange} required />
        <Input name="name" placeholder="Nombre del auto" value={formData.name} onChange={handleChange} required />
        <Input name="year" placeholder="Año" type="number" value={formData.year} onChange={handleChange} required />
        <Input name="mileage" placeholder="Kilometraje" value={formData.mileage} onChange={handleChange} required />
        <Input name="fuelType" placeholder="Tipo de combustible" value={formData.fuelType} onChange={handleChange} required />
        <Button type="submit" className="w-full">Agregar Auto</Button>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <Image src={car.image} alt={car.name} width={300} height={200} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{car.name}</h2>
            <p>Año: {car.year}</p>
            <p>Kilometraje: {car.mileage}</p>
            <p>Combustible: {car.fuelType}</p>
          </div>
        ))}
      </div>
      <div className="mt-0 flex justify-center">
          <Link href="/" className="bg-sky-900 text-white px-3 py-3 rounded-md hover:bg-blue-600 transition text-base">
            Volver
          </Link>
        </div>
      <Redes />
    </div>
  );
}
