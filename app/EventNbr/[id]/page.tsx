import { eventsList } from "@/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetails({ params }: Props) {
  const { id } = await params;

  const event = eventsList.find(
    (e) => e.id.toString() === id
  );

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center"
        style={{
          height: "45vh",
          minHeight: "150px",
          backgroundImage: "url(/img/aboutbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 999,
          
        }}
      >
        <div
          className="overlay position-absolute w-100"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))",
            zIndex: 2,
            top: 0,
            bottom: 0,
          }}
        ></div>
        <div
          className="container text-center position-relative pt-10"
          style={{ zIndex: 3 }}
        >
          <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">
            Actualités & Événements
          </h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Restez informé des dernières nouvelles et événements de notre hôpital.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="container py-5">

        {/* IMAGE PRINCIPALE */}
        <div className="mb-5">
          <div className="ratio ratio-16x9 position-relative mb-4 rounded overflow-hidden">
            <Image
              src={event.images?.[0] ?? "/img/placeholder.png"}
              alt={event.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* GALERIE */}
          {event.images && event.images.length > 1 && (
            <div className="row g-3">
              {event.images.slice(1).map((img, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3">
                  <div className="ratio ratio-1x1 position-relative rounded overflow-hidden gallery-item">
                    <Image
                      src={img}
                      alt={`${event.title} ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TEXTE */}
        <div className="fs-5">
          <p>{event.excerpt}</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ici vous pouvez mettre le contenu détaillé de l’événement.
          </p>
        </div>

      </section>

      {/* STYLE LOCAL */}
      <style >{`
        .gallery-item {
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}