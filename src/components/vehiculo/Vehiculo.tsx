import Image from "next/image";

const Vehiculo = () => {
  return (
    <section className="bg-gray-500 py-12 mt-8 px-6 md:px-12 md:mx-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-6xl font-bold text-sky-900">
            Cambia o vende tu auto
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start text-gray-700 text-lg">
              <span className="text-red-500 text-2xl mr-3">✔</span>
              <span className="text-white text-lg">Cotizá tu auto y agendá una inspección en nuestra sede.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg">
              <span className="text-red-500 text-2xl mr-3">✔</span>
              <span className="text-white text-lg">Vendé tu auto a un excelente precio de forma segura.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg">
              <span className="text-red-500 text-2xl mr-3">✔</span>
              <span className="text-white text-lg">Dejalo en parte de pago y llevate un auto certificado y con garantía.</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/assets/car.png" 
            alt="Vende tu auto"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Vehiculo;