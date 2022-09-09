import Link from "next/link";
import Image from "next/image";
import PostContainerOne from "../../components/posts/PostContainerOne";
import Sidebar from "../../components/Sidebar";

// import { getAllPosts } from "../../../lib/api";
// import InstagramOne from "../../common/components/instagram/InstagramOne";
// import FooterOne from "../../common/elements/footer/FooterOne";
// import HeaderOne from "../../common/elements/header/HeaderOne";
// import PostLayoutTwo from "../../common/components/post/layout/PostLayoutTwo";
// import SidebarOne from "../../common/components/sidebar/SidebarOne";
// import { slugify } from "../../common/utils";
// import HeadTitle from "../../common/elements/head/HeadTitle";

const AuthorArchive = ({ authorData, allPosts }) => {
  return (
    <>
      <div className="axil-author-area axil-author-banner bg-color-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-author">
                <div className="media">
                  <div className="thumbnail">
                    <Link href="#">
                      <a>
                        <Image
                          src="/assets/randomProfile.png"
                          alt="profileImg"
                          height={105}
                          width={105}
                          priority={true}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="media-body">
                    <div className="author-info">
                      <h1 className="title">shubham mehra</h1>
                      <span className="b3 subtitle">Software developer</span>
                    </div>
                    <div className="content">
                      <p className="b1 description">
                        At 22 years old, my favorite compliment is being told
                        that I look like my mom. Seeing myself in her image,
                        like this daughter up top, makes me so proud of how far
                        I’ve come, and so thankful for where I come from.
                      </p>
                      <ul className="social-share-transparent size-md">
                        icons
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <h2 className="title mb--40">Articles By This Author</h2>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              <PostContainerOne />
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      {/* <InstagramOne parentClass="bg-color-grey" /> */}
      {/* <FooterOne /> */}
    </>
  );
};

export default AuthorArchive;
