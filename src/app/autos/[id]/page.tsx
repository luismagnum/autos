"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaCalendarAlt, FaTachometerAlt, FaGasPump } from "react-icons/fa";
import Redes from "@/components/redes/Redes";

const cars = [
  { id: 1, image: "/assets/car1.jpg", name: "Toyota Corolla", year: 2020, mileage: "45,000 km", fuelType: "Nafta" },
  { id: 2, image: "/assets/car1.jpg", name: "Ford Mustang", year: 2018, mileage: "30,000 km", fuelType: "Nafta" },
  { id: 3, image: "/assets/car1.jpg", name: "Ford Ranger", year: 2019, mileage: "50,000 km", fuelType: "Diesel" },
  { id: 4, image: "/assets/car1.jpg", name: "Ford Focus", year: 2021, mileage: "20,000 km", fuelType: "Nafta" },
  { id: 5, image: "/assets/car1.jpg", name: "Fiat Cronos", year: 2021, mileage: "20,000 km", fuelType: "Nafta" },
  { id: 6, image: "/assets/car1.jpg", name: "Fiat Toro", year: 2021, mileage: "20,000 km", fuelType: "Nafta" },
  { id: 7, image: "/assets/car1.jpg", name: "Fiat Argo", year: 2021, mileage: "20,000 km", fuelType: "Nafta" },
  { id: 8, image: "/assets/car1.jpg", name: "Fiat Mobi", year: 2021, mileage: "20,000 km", fuelType: "Nafta" },
];

export default function AutoPage() {
  const params = useParams();
  const id = params.id as string;

  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return <div className="text-center text-red-500 text-2xl font-semibold mt-10">🚗 Auto no encontrado</div>;
  }

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-0">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={car.image}
              width={500}
              height={350}
              alt={car.name}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">{car.name}</h2>
            <div className="space-y-3 text-gray-600 text-lg">
              <p className="flex items-center"><FaCalendarAlt className="mr-2 text-blue-500" /> Año: {car.year}</p>
              <p className="flex items-center"><FaTachometerAlt className="mr-2 text-green-500" /> Kilometraje: {car.mileage}</p>
              <p className="flex items-center"><FaGasPump className="mr-2 text-red-500" /> Combustible: {car.fuelType}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a href="/" className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition text-base">
            Volver
          </a>
        </div>
        <Redes />
      </div>
    </div>
  );
}

