import { eventsList } from "@/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function EventDetails({ params }: Props) {
  const event = eventsList.find(
    (e) => e.id.toString() === params.id
  );

  if (!event) {
    notFound();
  }

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">{event.title}</h1>
        <p className="text-muted">{event.date}</p>
      </div>

      <div className="mb-4">
        <div className="ratio ratio-16x9">
          <Image
            src={event.src && event.src !== "" ? event.src : "/img/placeholder.png"}
            alt={event.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="fs-5">
        <p>{event.excerpt}</p>

        {/* Ici tu peux ajouter description longue */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ici vous pouvez mettre le contenu détaillé de l’événement.
        </p>
      </div>
    </section>
  );
}