import Link from 'next/link';

const ButtonMas = () => {
    return (
        <Link href="/Autocard" legacyBehavior>
          <a className="bg-red-600 text-white text-xs py-1 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-block">
            Mas
          </a>
        </Link>
    );
  };
  
  export default ButtonMas;