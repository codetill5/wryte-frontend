import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import MobileMenu from "./MobileMenu";

import {
  login,
  logout,
  signMessage,
  verifyMessage,
  isLoggedIn,
} from "../../helper";

const Header = () => {
  const [showMMenu, SetShowMMenu] = useState(false);
  const [togglaClass, setTogglaClass] = useState(false);
  const [walletAddress, setWalletAddress] = useState();
  const [userData, setUserData] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const MobileShowHandler = () => SetShowMMenu(true);
  const MobileHideHandler = () => SetShowMMenu(false);

  const toggleHandler = () => {
    setTogglaClass((active) => !active);
  };

  const handleConnect = async () => {
    const response = await signMessage();
    if (response) {
      const address = await verifyMessage(response);
      setWalletAddress(address);
      // router.push("/profile/edit");
    } else {
      router.push("/loading");
    }
  };

  const signIn = async (walletAddress) => {
    const data = {
      walletAddress: walletAddress,
    };
    const response = await login(data);
  };

  const handeDisconnect = async () => {
    await logout();
  };

  useEffect(() => {
    if (walletAddress) {
      signIn(walletAddress);
    }
  }, [walletAddress]);

  useEffect(async () => {
    const logged = await isLoggedIn();
    if (!logged) {
      router.push("/");
    } else {
      setUserData(logged);
    }
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      router.push("/");
    }
  }, [pathname]);

  return (
    <>
      <header className="header axil-header">
        <div className="header-wrap">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
              <div className="logo">
                <Link href="/">
                  <a className="headerLogo">
                    <Image
                      className="dark-logo"
                      width={500}
                      height={150}
                      objectFit="cover"
                      src="/assets/gifLogo.gif"
                      alt="wryte logo"
                    />
                    <span className="betaTag">Beta</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
              <div className="header-search text-end d-flex align-items-center">
                <form className="header-search-form d-sm-block d-none">
                  {pathname !== "/" ? (
                    <div className="axil-search form-group">
                      <button type="submit" className="search-button">
                        <img
                          src="/assets/icons/search.svg"
                          alt="search"
                          style={{ height: "20px", width: "20px" }}
                        />
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  ) : (
                    <div className="menuList">
                      <Link href="/lightpaper">
                        <a>Litepaper</a>
                      </Link>
                    </div>
                  )}
                </form>
                <div className="mobile-search-wrapper d-sm-none d-block">
                  {/* <button
                    className="search-button-toggle"
                    onClick={toggleHandler}
                  >
                    <img
                      src="/assets/icons/search.svg"
                      alt="search"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </button> */}
                  <form
                    className={`header-search-form ${
                      togglaClass ? "open" : ""
                    }`}
                  >
                    <div className="axil-search form-group">
                      <button type="submit" className="search-button">
                        <img
                          src="/assets/icons/hamburger.svg"
                          alt="hamburger"
                          style={{ height: "20px", width: "20px" }}
                        />
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </div>
                <ul className="metabar-block">
                  {userData ? (
                    <>
                      <li className="icon">
                        <Link href="#">
                          <a>
                            <img
                              src="/assets/icons/bookmark.svg"
                              alt="bookmark"
                              style={{ height: "20px", width: "20px" }}
                            />
                          </a>
                        </Link>
                      </li>
                      <li className="icon">
                        <Link href="#">
                          <a>
                            <img
                              src="/assets/icons/notification.svg"
                              alt="notification"
                              style={{ height: "20px", width: "20px" }}
                            />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="profile/shubham">
                          <a>
                            <Image
                              width={40}
                              height={40}
                              src="/assets/randomProfile.png"
                              alt="profile"
                            />
                          </a>
                        </Link>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                  {/* <li>
                    {!userData ? (
                      <button
                        className="connectBtn"
                        onClick={() => handleConnect()}
                      >
                        Connect
                      </button>
                    ) : (
                      <button
                        className="connectBtn"
                        onClick={() => handeDisconnect()}
                      >
                        Disconnect
                      </button>
                    )}
                  </li> */}
                  <li>
                    <a href="https://waitlist.wryte.xyz/" target="_blank">
                      <button className="connectBtn">Join Waitlist</button>
                    </a>
                  </li>
                </ul>

                {/* <div className="hamburger-menu d-block d-xl-none">
                  <div className="hamburger-inner">
                    <div className="icon" onClick={MobileShowHandler}>
                      <img
                        src="/assets/icons/hamburger.svg"
                        alt="hamburger"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu menuShow={showMMenu} menuHide={MobileHideHandler} />
    </>
  );
};

export default Header;
