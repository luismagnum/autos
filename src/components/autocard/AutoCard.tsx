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
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-10">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/assets/car1.jpg"
          alt="Auto"
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>

      <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4 gap-6">
        <h2 className="text-2xl font-bold text-gray-800">Características</h2>

        <ul className="space-y-3 text-gray-600">
          <li className="flex items-center">
            <FaTachometerAlt className="text-blue-500 mr-2" />
            <span>{kilometros} km</span>
          </li>
          <li className="flex items-center">
            <FaCar className="text-blue-500 mr-2" />
            <span>Año: {año}</span>
          </li>
          <li className="flex items-center">
            <FaCogs className="text-blue-500 mr-2" />
            <span>Motor: {motor}</span>
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
            <span>Color: {color}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AutoCard;

