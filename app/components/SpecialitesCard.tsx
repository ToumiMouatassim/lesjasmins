import { FC } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  src: string;
  description: string;
  whatsapp?: string; // WhatsApp number
  url?: string;
}

const SpecialitesCard: FC<ServiceCardProps> = ({
  title,
  src,
  description,
  whatsapp,
  url,
}) => {

  const formatWhatsApp = (number?: string) => {
    if (!number) return "";
    const digits = number.replace(/\D/g, "");
    if (digits.length === 10) {
      return digits.replace(
        /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
        "+212 $1 $2 $3 $4 $5"
      );
    }
    return number;
  };

  const whatsappLink = whatsapp
    ? `https://wa.me/${whatsapp.replace(/\D/g, "")}`
    : "#";

  return (
    <div className="col-md-4 mb-4"> 
      <div className="card h-100 specialite-card">
        <div className="card-body d-flex flex-column text-center">
          <Image
            src={src}
            alt={title}
            width={300} 
            height={200}
            className="my-3 mx-auto"
          />

          <h5 className="mt-2">{title}</h5>
          <p className="grow px-3">{description}</p>

          {whatsapp && (
            <p className="mt-2">
              💬{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {formatWhatsApp(whatsapp)}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialitesCard;
