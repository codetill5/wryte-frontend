import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li>
        <Link href="/lifestyle-blog">
          <a>DNA</a>
        </Link>
      </li>
      <li>
        <Link href="/tech-blog">
          <a>Litepaper</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
