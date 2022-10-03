import React from "react";
import Head from "next/head";

const Seo = () => {
  const seoTitle = "Wryte";
  const seoDesc = "Decentralized Publishing platform";
  const url = "wryte.xyz";
  const imgUrl = "https://wryte.xyz/assets/logo.png";
  return (
    <Head>
      <title>{seoTitle}</title>
      <link rel="icon" href={"/assets/round.png"} />
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={imgUrl || ""} />
      <meta property="og:image:secure_url" content={imgUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDesc} />
      <meta property="twitter:image" content={imgUrl} />
    </Head>
  );
};

export default Seo;
