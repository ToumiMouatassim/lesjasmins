"use client";
export default function LaboratoirePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-4">Laboratoire</h1>

      <p className="text-gray-300 mb-6">
        Bienvenue dans le laboratoire. Vous trouverez ici les analyses médicales
        et les services disponibles.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-gray-900 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Analyse sanguine</h2>
          <p className="text-gray-400">
            Résultats rapides et fiables.
          </p>
        </div>

        <div className="p-6 bg-gray-900 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Tests PCR</h2>
          <p className="text-gray-400">
            Dépistage et diagnostics.
          </p>
        </div>

        <div className="p-6 bg-gray-900 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Radiologie</h2>
          <p className="text-gray-400">
            Imagerie médicale moderne.
          </p>
        </div>
      </div>
    </main>
  );
}
