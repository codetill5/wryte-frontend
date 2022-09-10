import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="menu-item-has-children">
        <Link href="/">
          <a>Posts</a>
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/lifestyle-blog">
          <a>Litepaper</a>
        </Link>
      </li>
      <li>
        <Link href="/tech-blog">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
