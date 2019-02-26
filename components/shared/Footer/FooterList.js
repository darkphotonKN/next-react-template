import React from "react";
import Link from "next/link";

const FooterList = (props) => {
  const footerContent = props.links.map((link) => {
    return (
      <li className="text-left" key={link.url + link.name}>
        <Link href={link.url ? link.url : "#"}>
          <a className={link.url ? "footer-link" : "footer-head"}>
            {link.name}
          </a>
        </Link>
      </li>
    );
  });

  return <ul className="footer-links-list col-6 col-md">{footerContent}</ul>;
};

export default FooterList;
