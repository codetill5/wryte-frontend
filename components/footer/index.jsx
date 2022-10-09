import Image from "next/image";
import Link from "next/link";

const FooterOne = () => {
  return (
    <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    className="dark-logo"
                    src="/assets/gifLogo.gif"
                    alt="Logo Images"
                    height={50}
                    width={151}
                    objectFit="cover"
                  />
                </a>
              </Link>
              <p
                style={{
                  fontSize: "13px",
                  width: "50%",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              >
                Wryte brings the power of web3 to your stories, making you the
                owner of your content
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
              <ul className="social-icon color-tertiary md-size justify-content-start">
                <li>
                  <a
                    href="https://twitter.com/WryteXyz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/assets/icons/twitter.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/wrytexyz"
                  >
                    <img src="/assets/icons/github3.png" />
                  </a>
                </li>
                <li>
                  <a href="discord/oyemehra.xyz#5951">
                    <img src="/assets/icons/discord.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shubhammehracs/">
                    <img src="/assets/icons/linkedin.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
