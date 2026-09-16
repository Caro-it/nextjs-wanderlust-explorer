interface FilterBarProps {
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

// Las 5 categorías exactas que existen en tu dataset.
const categories = ["Adventure", "Culture", "Food", "Wellness", "Nature"];

export default function FilterBar({
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* Filtro de categoría: un desplegable (dropdown). */}
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2"
      >
        <option value="">Todas las categorías</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Filtro de destino: un input de texto (busca por ciudad o país). */}
      <input
        type="text"
        value={destination}
        onChange={(e) => onDestinationChange(e.target.value)}
        placeholder="Filtrar por destino (ciudad o país)..."
        className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
      />
    </div>
  );
}