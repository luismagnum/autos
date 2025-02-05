import Link from "next/link";


const ButtonMas = () => {
  return (
    <Link href= "/autocard"
      className="bg-red-600 text-white text-xs py-1 px-6 rounded-lg hover:bg-red-700 transition duration-300 inline-block">
        Mas
    </Link>
  );
};

export default ButtonMas;
