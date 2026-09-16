import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
// useSearchParams = LEE los query params de la URL (?search=...&category=...)
// useRouter = permite CAMBIAR la URL desde código
// usePathname = te da la ruta actual sin los params (ej. "/experiences")

import { experiences } from "@/data/experiences";

export function useExperienceFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // ESTADO inicial: lo LEEMOS de la URL. Esto es el "prerrellenado":
  // si abres /experiences?search=yoga, el input arranca con "yoga" dentro.
  // El "?? ''" significa: si no viene en la URL, empieza vacío.
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [category, setCategory] = useState(searchParams.get("category") ?? "");
  const [destination, setDestination] = useState(searchParams.get("destination") ?? "");

  // useEffect: SINCRONIZA el estado hacia la URL. Cada vez que cambia un
  // filtro, reconstruimos la URL con los valores actuales.
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);
    if (destination) params.set("destination", destination);

    const queryString = params.toString();
    // router.replace = cambia la URL SIN añadir entrada al historial
    // (así el botón "atrás" no se llena de pasos por cada letra que escribes).
    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  }, [search, category, destination, pathname, router]);
  // ↑ array de dependencias: el efecto se re-ejecuta SOLO cuando cambian estos.

  // FILTRADO: aplicamos los 3 filtros. Se combinan con AND (deben cumplirse todos).
  const filtered = experiences.filter((exp) => {
    // Búsqueda por título con regex case-insensitive (lo pide la spec).
    let matchesSearch = true;
    if (search) {
      try {
        matchesSearch = new RegExp(search, "i").test(exp.title);
      } catch {
        matchesSearch = true; // si escribes un carácter raro, no rompe
      }
    }

    // Categoría: coincidencia exacta (o todas, si está vacío).
    const matchesCategory = category ? exp.category === category : true;

    // Destino: coincidencia parcial por ciudad o país (o todos, si vacío).
    const matchesDestination = destination
      ? exp.destination.toLowerCase().includes(destination.toLowerCase())
      : true;

    return matchesSearch && matchesCategory && matchesDestination;
  });

  // El hook DEVUELVE todo lo que la página necesita.
  return {
    search, setSearch,
    category, setCategory,
    destination, setDestination,
    filtered,
  };
}