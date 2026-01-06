import { FC, ReactNode } from "react";
import Link from "next/link";

interface NextLinkProps {
  href: string;
  title: ReactNode;
  className?: string;
}

const NextLink: FC<NextLinkProps> = ({ href, title, className }) => {
  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
};

export default NextLink;
