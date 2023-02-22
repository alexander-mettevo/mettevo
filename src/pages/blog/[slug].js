import seoBlogPage from "@/mocData/blog/seoBlogPage";
import CategoryBlogPage from "@/components/pages/blog/categoryBlogPage/CategoryBlogPage";
import blogList from "@/assets/geometry/blog/blogList";
import modifyFourArray from "@/assets/modifyFourArray";
import packArrayIntoGroups from "@/assets/geometry/blog/packArrayIntoGroups";
import handleGroup from "@/assets/geometry/blog/handleGroup";

export default function BlogCategory({data}) {
  return (
    <CategoryBlogPage data={data}/>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'seo-basics' } }],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let data = seoBlogPage
  data.favorites = modifyFourArray( data.favorites, blogList)
  data.content = Array.isArray(data.content[0]) ? data.content : packArrayIntoGroups(data.content, handleGroup)
  return { props: { data } }
}

