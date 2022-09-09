import Link from "next/link";
import Image from "next/image";

const PostContainerOne = () => {
  return (
    <>
      <div className="content-block post-list-view axil-control mt--30">
        <div className="post-thumbnail">
          <Link href={`/post`}>
            <a>
              <Image
                src="/assets/randomPost.webp"
                alt="blogImg"
                height={250}
                width={295}
                priority={true}
              />
            </a>
          </Link>

          <Link href={`/post/`}>
            <a className="video-popup size-medium position-top-center icon-color-secondary">
              <span className="play-icon"></span>
            </a>
          </Link>
        </div>

        <div className="post-content">
          <div className="post-cat">
            <div className="post-cat-list">
              <Link href={`/category/}`}>
                <a className="hover-flip-item-wrapper">
                  <span className="hover-flip-item">
                    <span data-text="Design">Design</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <h4 className="title">
            <Link href={`/post/`}>
              <a>4 types of research methods all designers should know</a>
            </Link>
          </h4>

          <div className="post-meta-wrapper">
            <div className="post-meta">
              <div className="content">
                <h6 className="post-author-name">
                  <Link href={`/author/`}>
                    <a className="hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text="Rose Mary">Rose Mary</span>
                      </span>
                    </a>
                  </Link>
                </h6>
                <ul className="post-meta-list">
                  <li>Feb 28 2022</li>
                  <li>3 min read</li>
                </ul>
              </div>
            </div>
            <ul className="social-share-transparent justify-content-end">
              {/* {data.author_social.map((social) => (
                <li key={social.url}>
                  <a href={social.url}>
                    <i className={social.icon} />
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContainerOne;
