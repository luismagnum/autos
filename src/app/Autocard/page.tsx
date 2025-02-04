"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import {
  FaTachometerAlt,
  FaCar,
  FaCogs,
  FaGasPump,
  FaDoorOpen,
  FaSnowflake,
  FaPalette,
} from "react-icons/fa";

interface AutoCardProps {
  imagen: string;
  kilometros: number;
  año: number;
  motor: string;
  color: string;
}

const AutoCard: React.FC<AutoCardProps> = ({ imagen, kilometros, año, motor, color }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mt-20 mb-10 md:gap-16">
        <div className="w-[90%] mx-auto md:w-1/2 h-64 md:h-auto">
          <Image
            src="/assets/car1.jpg"
            alt="Auto"
            width={500}  
            height={300} 
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Características</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <FaTachometerAlt className="text-blue-500 mr-2" />
              <span>50.000 km</span>
            </li>
            <li className="flex items-center">
              <FaCar className="text-blue-500 mr-2" />
              <span>Año: 1992</span>
            </li>
            <li className="flex items-center">
              <FaCogs className="text-blue-500 mr-2" />
              <span>Motor: V-6</span>
            </li>
            <li className="flex items-center">
              <FaGasPump className="text-blue-500 mr-2" />
              <span>Combustible: Nafta</span>
            </li>
            <li className="flex items-center">
              <FaDoorOpen className="text-blue-500 mr-2" />
              <span>Puertas: 4</span>
            </li>
            <li className="flex items-center">
              <FaSnowflake className="text-blue-500 mr-2" />
              <span>Aire Acondicionado: Sí</span>
            </li>
            <li className="flex items-center">
              <FaPalette className="text-blue-500 mr-2" />
              <span>Color: Plata</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AutoCard;
