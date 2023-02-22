import MainBlogPage from "@/components/pages/blog/mainBlogPage/MainBlogPage";
import mainBlogPage from "@/mocData/blog/mainBlogPage";
import blogList from "@/assets/geometry/blog/blogList";
import modifyFourArray from "@/assets/modifyFourArray";

export default function Blog({data}) {
  return (
    <MainBlogPage data={data}/>
  )
}

export async function getStaticProps() {
  const data = mainBlogPage
  data.trending.posts = blogList(data.trending.posts)
  data.content = data.content.map((item) => {
  return {
    ...item,
    posts: modifyFourArray(item.posts, blogList)
  }
  })

  return {
    props: {
      data,
    },
  }
}