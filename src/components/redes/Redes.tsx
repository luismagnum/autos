import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-sky-900 mb-4">
          Síguenos en nuestras redes sociales
        </h2>

        <div className="flex justify-center space-x-6">
          <a
            href="https://wa.me/123456789" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl hover:text-green-700 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl hover:text-blue-800 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl hover:text-pink-700 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
