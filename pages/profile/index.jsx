import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  FaTwitter,
  FaTelegramPlane,
  FaGlobeAmericas,
  FaInstagram,
} from "react-icons/fa";

import { getUserData, getBlogFromContract } from "../../helper";
import PostContainerOne from "../../components/posts/PostContainerOne";
import Sidebar from "../../components/Sidebar";
import keys from "../../config/key.config";

const Profile = () => {
  const router = useRouter();
  const [userdata, setUserData] = useState();
  const [blog, setBlog] = useState();
  const [socialLink, setSocialLink] = useState([]);

  const getBlog = async () => {
    const data = {
      address: userdata?.walletAddress,
      contract: keys.MINT_CONTRACT,
    };
    const response = await getBlogFromContract(data);
    setBlog(response?.result);
  };

  useEffect(() => {
    const data = getUserData();
    setUserData(JSON.parse(data));
    setSocialLink(userdata?.social);
  }, []);

  useEffect(() => {
    if (userdata) {
      getBlog();
    }
  }, [userdata]);

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
                      <h1 className="title">{userdata?.name}</h1>
                      <span className="b3 subtitle">
                        {userdata?.designation}
                      </span>
                    </div>
                    <div className="content">
                      <p className="b1 description">{userdata?.bio}</p>
                      <ul className="social-share-transparent size-md authorSocialIcons">
                        {socialLink?.twitter ? (
                          <li href={socialLink?.twitter}>
                            <FaTwitter />
                          </li>
                        ) : (
                          ""
                        )}
                        {socialLink?.telegram ? (
                          <li href={socialLink?.telegram}>
                            <FaTelegramPlane />
                          </li>
                        ) : (
                          ""
                        )}
                        {socialLink?.instagram ? (
                          <li href={socialLink?.instagram}>
                            <FaInstagram />
                          </li>
                        ) : (
                          ""
                        )}
                        {socialLink?.web ? (
                          <li href={socialLink?.web}>
                            <FaGlobeAmericas />
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                      <button
                        className="editBtn"
                        onClick={() => router.push("/profile/edit")}
                      >
                        Edit Profile
                      </button>

                      {/* need to add logic for following  */}
                      {/* <button className="editBtn">Follow</button> */}
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
              <PostContainerOne blog={blog} />
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <Sidebar userdata={userdata} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
