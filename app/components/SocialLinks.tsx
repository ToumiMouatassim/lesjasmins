import { FC } from "react";
import Link from "next/link";

interface SocialLinkItem {
  id: number;
  icon: string;
  url: string;
}

const links: SocialLinkItem[] = [
  { id: 1, icon: "uil uil-facebook-f", url: "https://web.facebook.com/profile.php?id=61594540775296" },
  { id: 2, icon: "uil uil-instagram", url: "https://www.instagram.com/hopitalprive_lesjasmins/" },
  { id: 3, icon: "uil uil-whatsapp", url: "https://api.whatsapp.com" },
];

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ className = "nav social mt-4" }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <Link href={url} key={id} target="_blank" rel="noreferrer">
          <i className={`${icon} fs-30 bg-white rounded`} />
        </Link>
      ))}
    </nav>
  );
};

export default SocialLinks;
