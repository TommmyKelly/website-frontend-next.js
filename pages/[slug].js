import Link from "next/link";
import { useRouter } from "next/router";

import { server } from "../config";

const article = ({ article }) => {
  console.log(article);

  return (
    <>
      <h1>{article.Title}</h1>
      <Link href='/'>Go Back</Link>
    </>
  );
};

//getServerSideProps()
export const getStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(`${server}/videos/?slug=${slug}`);

  const article = await res.json();

  return {
    props: {
      article: article[0],
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/videos`);

  const articles = await res.json();

  // const slugs = articles.map((article) => article.slug);

  const paths = articles.map((slug) => ({
    params: {
      slug: slug.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
