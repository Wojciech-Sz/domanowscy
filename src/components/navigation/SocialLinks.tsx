import React from "react";

import { socialMedia } from "@/constants";

const SocialLinks = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <ul className={className}>
      {socialMedia.map(({ href, name, icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            title={name}
            rel="noopener noreferrer"
            className="flex items-center justify-center hover:text-secondary"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
