import ArticleBlogPage from "@/components/pages/blog/articleBlogPage/ArticleBlogPage";
export default function ArticleBlog({data}) {
  return <ArticleBlogPage data={data[0]}/>
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'curabitur-faucibus-purus-aenean-ut-nisi-neque-in-sit-duis' } }],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.BACK_END}/wp-json/wp/v2/posts?slug=${params.slug}&_embed`)
  const data = await res.json()


  return { props: { data } }
}