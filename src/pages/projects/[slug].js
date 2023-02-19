import ProjectPage from "@/components/pages/projects/project/ProjectPage";
import youdogg from "@/mocData/projects/youdogg";
import slugs from "@/mocData/projects/slugs";
import charterJets from "@/mocData/projects/charterJets";

export default function Project({data}) {
  return <ProjectPage data={data}/>
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'youdogg' } }, { params: { slug: 'charter_jets' } }],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  let data

  if (params.slug === 'youdogg') {
    data = youdogg
  } else if (params.slug === 'charter_jets') {
    data = charterJets
  }

  return { props: { data } }
}



