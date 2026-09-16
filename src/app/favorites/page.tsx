"use client";

import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";
import ExperienceCard from "@/components/ExperienceCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  // Solo las experiencias cuyo id esté en la lista de favoritos.
  const favoriteExperiences = experiences.filter((exp) =>
    favorites.includes(exp.id)
  );

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mis favoritos</h1>

      {favoriteExperiences.length === 0 ? (
        <p className="text-gray-500">
          Todavía no has guardado favoritos. Marca el corazón en una experiencia.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </main>
  );
}