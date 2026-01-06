import { FC } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title?: string;
  src?: string;
  description?: string;
}
const ServiceCard: FC<ServiceCardProps> = ({
  title = "Untitled Service",
  src = "/img/default-service.png",
  description = "No description available.",
}) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card-body p-2">
          <Image
            src={src}
            alt={`${title} | LesJasmins`}
            width={100}
            height={100}
            className="position-static my-5"
          />
          <h3>{title}</h3>
          <p className="px-5">{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
