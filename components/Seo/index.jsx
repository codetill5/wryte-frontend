import React from "react";
import Head from "next/head";

const Seo = () => {
  const seoTitle = "Wryte | Decentralized Publishing platform";
  const seoDesc =
    "Wryte brings the power of web3 to your stories, making you the owner of your content";
  const url = "wryte.xyz";
  const imgUrl = "/assets/logo.png";
  return (
    <Head>
      <title>{seoTitle}</title>
      <link rel="icon" href={"/round.png"} />
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
