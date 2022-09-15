import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  FaTwitter,
  FaTelegramPlane,
  FaGlobeAmericas,
  FaInstagram,
} from "react-icons/fa";

import PostContainerOne from "../../components/posts/PostContainerOne";
import Sidebar from "../../components/Sidebar";

const Profile = () => {
  const router = useRouter();
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
                      <ul className="social-share-transparent size-md authorSocialIcons">
                        <li>
                          <FaTwitter />
                        </li>
                        <li>
                          <FaTelegramPlane />
                        </li>
                        <li>
                          <FaInstagram />
                        </li>
                        <li>
                          <FaGlobeAmericas />
                        </li>
                      </ul>
                      <button
                        className="editBtn"
                        onClick={() => router.push("/profile/edit")}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FaBeer /> */}

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
    </>
  );
};

export default Profile;
