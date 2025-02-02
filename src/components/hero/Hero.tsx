import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="w-full h-80 md:min-h-screen flex flex-col justify-center items-center lg:px-32 px-2 bg-contain md:bg-cover bg-no-repeat lg:bg-center"
      style={{ backgroundImage: "url('/assets/hero.jpg')" }}
    >
      <div className="w-full ml-0 space-y-4 px-2 lg:px-0 mb-40 md:mb-72 text-left">
        <h1 className="text-red-600 font-bold text-2xl md:text-left md:text-6xl">Auto.com</h1>
        <p className="text-white w-1/3 text-base md:text-4xl font-bold">
          Tu auto nuevo te espera...
        </p>
        
      </div>
    </div>
  );
};

export default Hero;

