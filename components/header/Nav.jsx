import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="menu-item-has-children">
        <a href="#">Home</a>
      </li>
      <li className="menu-item-has-children">
        <Link href="/">
          <a>Posts</a>
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link href="/">
          <a>Pages</a>
        </Link>
      </li>
      <li>
        <Link href="/lifestyle-blog">
          <a>Lifestyle</a>
        </Link>
      </li>
      <li>
        <Link href="/tech-blog">
          <a>Gadgets</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
