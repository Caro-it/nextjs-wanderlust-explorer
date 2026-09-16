import { experiences } from "@/data/experiences";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const experience = experiences.find((exp) => exp.id === Number(id));

  if (!experience) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link href="/experiences" className="text-blue-600 hover:underline">
        ← Volver al explorador
      </Link>

      <img
        src={experience.imageUrl}
        alt={experience.title}
        className="w-full h-80 object-cover rounded-xl mt-4"
      />

      <span className="text-sm font-semibold text-blue-600 uppercase mt-4 block">
        {experience.category}
      </span>
      <h1 className="text-3xl font-bold mt-1">{experience.title}</h1>
      <p className="text-gray-500 mt-1">{experience.destination}</p>

      <div className="flex gap-6 mt-4">
        <span className="text-xl font-bold">€{experience.price}</span>
        <span className="text-xl">⭐ {experience.rating}</span>
      </div>

      <p className="mt-6 text-lg leading-relaxed">{experience.description}</p>
    </main>
  );
}