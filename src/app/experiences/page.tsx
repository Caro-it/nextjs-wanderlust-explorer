"use client";


import { useState } from "react";
// Hook que da "memoria" al componente: guarda lo que el usuario escribe.

import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";

export default function ExperiencesPage() {
  const [search, setSearch] = useState("");
  // search = el texto actual | setSearch = la función para cambiarlo.
  // Empieza vacío ("").

  // Filtramos las 100 experiencias según el texto buscado.
  const filtered = experiences.filter((experience) => {
    if (search === "") return true; // sin texto → mostramos todas

    try {
      const regex = new RegExp(search, "i");
      // Crea un patrón de búsqueda. La "i" = ignora mayúsculas/minúsculas
      // (así "VELA", "vela" y "Vela" encuentran lo mismo). Lo pide la spec.

      return regex.test(experience.title);
      // ¿El título contiene el texto buscado? true = se muestra.
    } catch {
      return true; // si escribes un carácter raro, no rompe: muestra todo
    }
  });

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explora experiencias</h1>

      <SearchBar value={search} onChange={setSearch} />
      {/* Le pasamos el estado y la función. La barra muestra "search" y,
          al escribir, llama a setSearch → se actualiza y se re-filtra solo. */}

      {filtered.length === 0 ? (
        // Si no hay resultados, mensaje. (Esto también lo pide la spec.)
        <p className="text-gray-500">No se encontraron resultados.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </main>
  );
}