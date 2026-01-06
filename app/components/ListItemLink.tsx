import { FC } from "react";
import NextLink from "./NextLink";

interface ListItemLinkProps {
  href: string;
  title: string;
  linkClassName?: string;
  liClassName?: string;
}

const ListItemLink: FC<ListItemLinkProps> = ({
  href,
  title,
  linkClassName = "nav-link",
  liClassName = "nav-item",
}) => {
  return (
    <li className={liClassName}>
      <NextLink href={href} title={title} className={linkClassName} />
    </li>
  );
};

export default ListItemLink;
