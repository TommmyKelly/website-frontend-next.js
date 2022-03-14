import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Tommykelly100 coding tutorials",
  description:
    "Get the latest news and turn your ideas into reality with Tommykelly100 coding tutorials",
  keywords:
    "web development, programming, programming tutorials, web development tutorials",
};

export default Meta;
