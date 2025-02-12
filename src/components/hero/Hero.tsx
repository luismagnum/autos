import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-80 md:h-screen flex flex-col justify-center items-center lg:px-32 px-2">
      <Image 
        src="/assets/hero.jpg"
        alt="Fondo del Hero"
        width={1920} 
        height={1080} 
        priority={true} 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 w-full ml-0 space-y-4 px-2 lg:px-0 mb-40 md:mb-72 text-left">
        <h1 className="text-red-600 font-bold text-2xl md:text-left md:text-6xl">Auto.com</h1>
        <p className="text-white w-1/3 text-base md:text-4xl font-bold">
          Tu auto nuevo te espera...
        </p>
      </div>
    </div>
  );
};

export default Hero;







