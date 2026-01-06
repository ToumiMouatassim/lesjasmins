import { FC, AnchorHTMLAttributes } from "react";
import Link from "next/link";

interface DropdownToggleLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  className?: string;
}

const DropdownToggleLink: FC<DropdownToggleLinkProps> = ({ title, className, ...others }) => {
  return (
    <Link
      href="#"
      data-bs-toggle="dropdown"
      className={className || "dropdown-item dropdown-toggle"}
      {...others}
    >
      {title}
    </Link>
  );
};

export default DropdownToggleLink;
