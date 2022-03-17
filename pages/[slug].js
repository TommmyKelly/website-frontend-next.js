import Meta from "@/components/Meta";
import Link from "next/link";
import { useRouter } from "next/router";

import { server } from "../config";

const article = ({ article }) => {
  return (
    <>
      <Meta
        title={article.video_title}
        description={article.meta_description}
        keywords={article.Meta_keywords}
      />
      <div className='flex flex-col items-center min-h-screen py-2 relative'>
        <div className='w-3/4 '>
          <div className='aspect-w-16 aspect-h-9'>
            <iframe
              src={`https://www.youtube.com/embed/${article.video_url}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
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
