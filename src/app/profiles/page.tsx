"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mi perfil</h1>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
          C
        </div>
        <div>
          <p className="text-lg font-semibold">Carolina Kaechele</p>
          <p className="text-gray-500">Viajera exploradora</p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl p-4">
        <p className="text-gray-500">Experiencias guardadas como favoritas</p>
        <p className="text-3xl font-bold">{favorites.length}</p>
        {}
      </div>
    </main>
  );
}