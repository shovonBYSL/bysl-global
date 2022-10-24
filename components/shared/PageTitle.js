import Head from "next/head";

const PageTitle = ({ title }) => {
  const name = "BYSL Global Technology Group";
  const info =
    "BYSL Global Technology Group is a next-generation technology conglomerate. The group operates as an integrated business ecosystem with investments in multiple brands, industries, markets, and supply chains.";

  const pageName = title
    ? title === name
      ? title
      : title + " - " + name
    : name;

  return (
    <Head>
      <title>{pageName}</title>
      <meta name="title" content={pageName} />
      <meta name="description" content={info} />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://byslglobal.com/" />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={info} />
      <meta property="og:image" content="/images/bysl.png" />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://byslglobal.com/" />
      <meta property="twitter:title" content={name} />
      <meta property="twitter:description" content={info} />
      <meta property="twitter:image" content="" />
    </Head>
  );
};

export default PageTitle;
