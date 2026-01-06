import { eventsList} from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EventDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  
  const event = eventsList.find((e) => e.id.toString() === id);

  if (!event) {
    notFound();  
  }

  return (
    <>
    <section className="breadcrumb-hero position-relative d-flex align-items-center justify-content-center" style={{
        height: '50vh',
        minHeight: '150px',
        backgroundImage: 'url(/img/aboutbg.png)',  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 999,   
        paddingTop: '120px',  
      }}>
        <div className="overlay position-absolute w-100  " style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,123,255,0.4))',   
          zIndex: 2,
          top: 0,
          bottom: 0,
        }}></div>
        <div className="container text-center position-relative pt-10" style={{ zIndex: 3 }}>
          <h1 className="fs-48 text-white mb-3 animate__animated animate__fadeInDown">{event.title}</h1>
          <p className="mt-2 text-white fs-18 animate__animated animate__fadeInUp animate__delay-1s">
            Restez informé des dernières nouvelles et événements de notre hôpital.
          </p>
        </div>
      </section>
      <section className="bg-light py-5 pt-15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="card border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <Image
                    src={event.src ?? "/img/events1.jfif"}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h1 className="card-title text-primary fw-bold">{event.title}</h1>
                  <time className="text-muted small d-block mb-3">
                    {event.date}
                  </time>
                  <p className="card-text">{event.excerpt}</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link href="/" className="btn btn-outline-primary">
                  Retour à l&apos;Acceuil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return eventsList.map((event) => ({
    id: event.id.toString(),
  }));
}
