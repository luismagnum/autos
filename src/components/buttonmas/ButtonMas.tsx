import Link from "next/link";

const ButtonMas = ({ id }: { id: number }) => {
  return (
    <Link href={`/autos/${id}`} legacyBehavior>
      <a className="bg-red-600 text-white text-xs py-1 px-6 rounded-lg hover:bg-red-700 transition duration-300 inline-block">
        Más
      </a>
    </Link>
  );
};

export default ButtonMas;

