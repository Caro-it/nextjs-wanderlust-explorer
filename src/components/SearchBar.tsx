// Este componente NO necesita "use client" propio: no usa hooks,
// solo recibe datos y avisa hacia arriba cuando el usuario escribe.

// Props: el valor actual del input + una función para avisar de cambios.
interface SearchBarProps {
  value: string;                       // texto actual de la búsqueda
  onChange: (value: string) => void;   // función que se llama al escribir
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      // El input MUESTRA el valor que le llega por props (input "controlado").

      onChange={(e) => onChange(e.target.value)}
      // Cuando escribes, avisamos hacia arriba con el nuevo texto.
      // e.target.value = lo que hay escrito en el input en ese momento.

      placeholder="Buscar experiencias por título..."
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
    />
  );
}