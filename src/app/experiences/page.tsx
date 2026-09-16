import { Suspense } from "react";
import ExperiencesClient from "./ExperiencesClient";

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto p-6">Cargando...</div>}>
      <ExperiencesClient />
    </Suspense>
  );
}