import Link from "next/link";



export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto p-6 text-center py-24">
      {}

      <h1 className="text-5xl font-bold mb-4">
        Descubre experiencias únicas por el mundo
      </h1>

      <p className="text-lg text-gray-500 mb-8">
        Desde tours gastronómicos hasta rutas de vela. Explora, busca y guarda
        tus favoritas.
      </p>

      <Link
        href="/experiences"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Explorar experiencias
      </Link>
      {}
    </main>
  );
}