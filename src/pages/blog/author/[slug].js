import authorBlogPage from "@/mocData/blog/authorBlogPage";
import packArrayIntoGroups from "@/assets/geometry/blog/packArrayIntoGroups";
import handleGroup from "@/assets/geometry/blog/handleGroup";
import AuthorBlogPage from "@/components/pages/blog/authorBlogPage/AuthorBlogPage";

export default function AuthorBlog({data}) {
  return (<AuthorBlogPage data={data}/>)
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'author' } }],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let data = authorBlogPage
  data.content = Array.isArray(data.content[0]) ? data.content : packArrayIntoGroups(data.content, handleGroup)
  return { props: { data } }
}
