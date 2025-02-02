import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">Auto.com</h2>
          <p className="text-sm text-gray-400 mt-2">
            Tu mejor opción para comprar y vender autos nuevos y usados.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Enlaces</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-100 transition">Compra un Auto</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition">Vende tu Auto</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition">Autos Usados</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition">Contacto</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Síguenos</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-400 transition">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Auto.com - Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
