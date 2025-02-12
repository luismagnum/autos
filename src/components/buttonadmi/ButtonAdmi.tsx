import Link from 'next/link';

const ButtonAdmi = () => {
    return (
        <div className="text-center p-6 mt-10">
        <Link href="/admin" legacyBehavior>
        <a className="bg-sky-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 inline-block">
          Agregar autos
        </a>
      </Link>
      </div>
    )
}

export default ButtonAdmi;