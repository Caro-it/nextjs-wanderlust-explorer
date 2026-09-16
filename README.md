# Wanderlust Explorer

Aplicación multipágina construida con **React** y **Next.js** (App Router) para
explorar, buscar y filtrar experiencias de viaje únicas alrededor del mundo —
desde tours gastronómicos hasta rutas de vela — **sin recargar la página**.

Proyecto desarrollado como parte del bootcamp de **4Geeks Academy**.

---

## ✨ Funcionalidades

- **Explorador** de 100 experiencias mostradas en una cuadrícula de tarjetas.
- **Búsqueda por título** en tiempo real (coincidencia case-insensitive).
- **Filtros** por categoría (Adventure, Culture, Food, Wellness, Nature) y por destino,
  combinables con la búsqueda.
- **Estado en la URL:** la búsqueda y los filtros activos se reflejan como query
  parameters, así que los enlaces se pueden compartir y aterrizan ya filtrados
  (ej. `/experiences?search=vela&category=Adventure&destination=Croatia`).
- **Detalle** de cada experiencia en su propia ruta.
- **Favoritos:** marca experiencias con un corazón y consúltalas en su página.
- **Navegación del lado del cliente** entre 5 páginas, sin recargas completas.
- **Diseño responsive** (móvil + escritorio).

---

## 🧭 Páginas

| Ruta                 | Descripción                                             |
| -------------------- | ------------------------------------------------------- |
| `/`                  | Home con sección hero y acceso al explorador            |
| `/experiences`       | Explorador con búsqueda y filtros                       |
| `/experiences/[id]`  | Detalle completo de una experiencia                     |
| `/favorites`         | Experiencias marcadas como favoritas                    |
| `/profile`           | Perfil de usuario simulado + contador de favoritos      |

---

## 🛠️ Stack

- [Next.js](https://nextjs.org/) — App Router
- [React](https://react.dev/) — hooks nativos (`useState`, `useEffect`) + custom hooks
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

Sin librerías externas de gestión de estado: todo el estado vive en React nativo.

---

## 🎨 Design References

Antes de construir la UI revisé estas interfaces reales de descubrimiento
(tarjetas + búsqueda + filtros) como inspiración de diseño. La estética
principal está inspirada en **GetYourGuide** por su enfoque limpio y visual
para presentar experiencias de viaje.

1. **GetYourGuide** — https://www.getyourguide.com
   Referencia estética principal. Tomé de aquí: la tarjeta de experiencia
   (imagen grande, título, destino y rating), los filtros por categoría y el
   layout de descubrimiento limpio y aireado.

2. **Airbnb** — https://www.airbnb.com
   Tomé de aquí: la cuadrícula de tarjetas, el icono de favorito (corazón) en
   la esquina de la tarjeta y los filtros que actualizan resultados sin recargar.

3. **Concepto "Travel App" (Dribbble)** — https://dribbble.com/search/travel-app
   Inspiración visual: paleta de colores, tipografía y espaciado.

---

## 🚀 Ejecutar en local

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Caro-it/nextjs-wanderlust-explorer.git
cd nextjs-wanderlust-explorer
npm install
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📁 Estructura

```
src/
├── app/
│   ├── layout.tsx              # Layout raíz con Navbar
│   ├── page.tsx                # Home (/)
│   ├── experiences/
│   │   ├── page.tsx            # Explorador (/experiences)
│   │   └── [id]/page.tsx       # Detalle (/experiences/[id])
│   ├── favorites/page.tsx      # Favoritos (/favorites)
│   └── profile/page.tsx        # Perfil (/profile)
├── components/                 # Navbar, ExperienceCard, SearchBar, FilterBar
├── hooks/                      # Custom hooks (lógica de filtrado y favoritos)
├── data/experiences.ts         # Dataset local de 100 experiencias
└── types/experience.ts         # Interface Experience
```
## Nota de arquitectura — Estado de favoritos

La spec pedía guardar los favoritos en un `useState` de nivel superior y
pasarlos como props. En el App Router de Next.js cada ruta es un árbol de
componentes independiente, por lo que no es posible compartir ese estado
entre páginas (`/experiences`, `/favorites`, `/profile`) solo con props.

La solución usa **React Context** (`FavoritesContext`), que es parte nativa
de React — no una librería externa de gestión de estado como Redux o Zustand,
que la spec prohíbe. El `useState` vive en el `FavoritesProvider` (nivel
superior, en el layout) y se consume mediante un custom hook `useFavorites()`.
Así se cumple el objetivo del requisito: un único estado compartido en React nativo.
---

## 👤 Autora

Carolina Kaechele — [github.com/Caro-it](https://github.com/Caro-it)
