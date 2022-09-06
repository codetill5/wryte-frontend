import Image from 'next/image';
import Link from "next/link";

const FooterOne = () => {
  if (typeof window !== "undefined") {
    var colorMode = window.localStorage.getItem('color-mode');
  }

  return (
    <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="footer-mainmenu">
        <div className="container">
          <div className="row">
            
           
           
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    className="dark-logo"
                    src={colorMode === "Dark" ? "/images/logo/logo-white2.webp" : "/images/logo/logo-black.webp"}
                    alt="Logo Images"
                    height={37}
                    width={141}
                  />
                </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                <ul className="social-icon color-tertiary md-size justify-content-start">
                  <li>
                    <a href="https://www.facebook.com/" rel="noopener" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8">
              <div className="copyright-left">
                <ul className="mainmenu justify-content-start">
                  <li>
                    <Link href="/about">
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Contact Us">Contact Us</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Privacy Policy">Privacy Policy</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                 
                  
                  <li>
                    <Link href="#">
                     
                          <span data-text="Blogar Store">wryte</span>
                       
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="copyright-right text-start text-md-end mt_sm--20">
                <p className="b3">
                  All Rights Reserved © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
