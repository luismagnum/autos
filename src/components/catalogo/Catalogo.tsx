"use client";

import Image from 'next/image';
import { FaCalendarAlt, FaTachometerAlt, FaGasPump } from 'react-icons/fa';
import ButtonMas from '../buttonmas/ButtonMas';



const cars = [
  {
    id: 1,
    image: '/assets/car1.jpg',
    name: 'Toyota Corolla',
    year: 2020,
    mileage: '45,000 km',
    fuelType: 'Nafta',
  },
  {
    id: 2,
    image: '/assets/car1.jpg',
    name: 'Ford Mustang',
    year: 2018,
    mileage: '30,000 km',
    fuelType: 'Nafta',
  },
  {
    id: 3,
    image: '/assets/car1.jpg',
    name: 'Ford Ranger',
    year: 2019,
    mileage: '50,000 km',
    fuelType: 'Diesel',
  },
  {
    id: 4,
    image: '/assets/car1.jpg',
    name: 'Ford Runner',
    year: 2021,
    mileage: '20,000 km',
    fuelType: 'Nafta',
  },
  {
    id: 5,
    image: '/assets/car1.jpg',
    name: 'Fiat Cronos',
    year: 2021,
    mileage: '20,000 km',
    fuelType: 'Nafta',
  },
  {
    id: 6,
    image: '/assets/car1.jpg',
    name: 'Fiat Toro',
    year: 2021,
    mileage: '20,000 km',
    fuelType: 'Nafta',
  },
  {
    id: 7,
    image: '/assets/car1.jpg',
    name: 'Fiat Argo',
    year: 2021,
    mileage: '20,000 km',
    fuelType: 'Nafta',
  },
  {
    id: 8,
    image: '/assets/car1.jpg',
    name: 'Fiat Mobi',
    year: 2021,
    mileage: '20,000 km',
    fuelType: 'Nafta',
  },
];

interface Car {
  id: number;
  image: string;
  name: string;
  year: number;
  mileage: string;
  fuelType: string;
}

const CarCard = ({ car }: { car: Car }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <Image
        src={car.image}
        width={200}
        height={150}
        alt={car.name}
        className="w-full h-40 object-contain mx-auto rounded-t-2xl" 
        style={{ maxWidth: '90%', marginTop: '0.5rem' }} 
      />
      <div className="p-4">
        <h3 className="text-red-600 text-xl font-semibold ml-0 md:ml-4 mb-2 mt-0">{car.name}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600 ml-2 md:ml-4">
            <FaCalendarAlt className="mr-2" />
            <span>Año: {car.year}</span>
          </div>
          <div className="flex items-center text-gray-600 ml-2 md:ml-4">
            <FaTachometerAlt className="mr-2" /> 
            <span>Kilometraje: {car.mileage}</span>
          </div>
          <div className="flex items-center text-gray-600 ml-2 md:ml-4">
            <FaGasPump className="mr-2" /> 
            <span>Combustible: {car.fuelType}</span>
          </div>
          <div className="text-center">
          <ButtonMas id={car.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Catalogo = () => {
  return (
    <div className="container mx-auto mt-0 px-4 lg:px-0">
      <div className="text-center py-0 lg:p-6 lg:mb-4">
        <h2 className="text-sky-900 text-3xl font-bold mt-2 md:mt-10">Catálogo de autos</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
