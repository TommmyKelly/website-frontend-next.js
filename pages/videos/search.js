import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "@/config/index";

import qs from "qs";
import Cards from "@/components/Cards";

export default function SearchPage({ videos }) {
  const router = useRouter();
  return (
    <>
      <Link href='/'>Go Back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {videos.length === 0 && <h3>No events to show</h3>}

      <Cards posts={videos} />
    </>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { video_title_contains: term },
        { slug_contains: term },
        { description_contains: term },
      ],
    },
  });

  const res = await fetch(`${server}/videos?${query})&_sort=created_at:desc`);

  const videos = await res.json();

  return {
    props: { videos },
  };
}
