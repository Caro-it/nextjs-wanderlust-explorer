"use client";
// Interactivo (usa hooks) → componente de cliente.

import { useExperienceFilters } from "@/hooks/useExperienceFilters";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";

export default function ExperiencesClient() {
  // Toda la lógica sale del hook. La página solo "pinta".
  const {
    search, setSearch,
    category, setCategory,
    destination, setDestination,
    filtered,
  } = useExperienceFilters();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explora experiencias</h1>

      <SearchBar value={search} onChange={setSearch} />

      <FilterBar
        category={category}
        destination={destination}
        onCategoryChange={setCategory}
        onDestinationChange={setDestination}
      />

      {filtered.length === 0 ? (
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