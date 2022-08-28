import Head from "next/head";

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title ? title :"BYSL Global Technology Group"}</title>
    </Head>
  );
};

export default PageTitle;
