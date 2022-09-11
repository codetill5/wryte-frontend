import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="sidebar-inner">
      <div className="axil-single-widget widget widget_categories mb--30">
        <ul>
          <li className="cat-item">
            <Link href={`/category/`}>
              <a className="inner">
                <div className="thumbnail">
                  <Image
                    src="/assets/gadget.webp"
                    alt="interest"
                    height={50}
                    width={50}
                    priority={true}
                  />
                </div>
                <div className="content">
                  <h5 className="title">Design</h5>
                </div>
              </a>
            </Link>
          </li>
          <li className="cat-item">
            <Link href={`/category/`}>
              <a className="inner">
                <div className="thumbnail">
                  <Image
                    src="/assets/gadget.webp"
                    alt="interest"
                    height={50}
                    width={50}
                    priority={true}
                  />
                </div>
                <div className="content">
                  <h5 className="title">Design</h5>
                </div>
              </a>
            </Link>
          </li>
          <li className="cat-item">
            <Link href={`/category/`}>
              <a className="inner">
                <div className="thumbnail">
                  <Image
                    src="/assets/gadget.webp"
                    alt="interest"
                    height={50}
                    width={50}
                    priority={true}
                  />
                </div>
                <div className="content">
                  <h5 className="title">Design</h5>
                </div>
              </a>
            </Link>
          </li>
          <li className="cat-item">
            <Link href={`/category/`}>
              <a className="inner">
                <div className="thumbnail">
                  <Image
                    src="/assets/gadget.webp"
                    alt="interest"
                    height={50}
                    width={50}
                    priority={true}
                  />
                </div>
                <div className="content">
                  <h5 className="title">Art</h5>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
