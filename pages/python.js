import Cards from "@/components/Cards";
import { server } from "@/config/index";

const Python = ({ posts }) => {
  return <Cards posts={posts} />;
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${server}/videos?category.category=python`);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Python;
