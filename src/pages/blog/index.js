import MainBlogPage from "@/components/pages/blog/mainBlogPage/MainBlogPage";
import mainBlogPage from "@/mocData/blog/mainBlogPage";

export default function Blog({data}) {
  return (
    <MainBlogPage data={data}/>
  )
}

export async function getStaticProps() {
  const data = mainBlogPage

  return {
    props: {
      data,
    },
  }
}