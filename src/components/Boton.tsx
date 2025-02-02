import { FaWhatsapp } from "react-icons/fa";

const Boton = () => {
    return (
      <a
        href="https://wa.me/542984792639?text=Hola quiero hacer un pedido" 
        className="fixed bottom-4 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp  className= 'size-6' />
      </a>
    );
  };

export default Boton;
  