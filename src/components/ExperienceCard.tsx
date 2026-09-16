"use client";

import type { Experience } from "@/types/experience";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);

  return (
    <Link
      href={`/experiences/${experience.id}`}
      className="block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow relative"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(experience.id);
        }}
        className="absolute top-2 right-2 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
        aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      <img
        src={experience.imageUrl}
        alt={experience.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-xs font-semibold text-blue-600 uppercase">
          {experience.category}
        </span>
        <h3 className="font-bold text-lg mt-1">{experience.title}</h3>
        <p className="text-sm text-gray-500">{experience.destination}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold">€{experience.price}</span>
          <span className="text-sm">⭐ {experience.rating}</span>
        </div>
      </div>
    </Link>
  );
}