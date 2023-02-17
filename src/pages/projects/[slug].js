import projects from "@/mocData/projects/projects";
import ProjectPage from "@/components/pages/projects/project/ProjectPage";

export default function Project() {
  return <ProjectPage data={projects}/>
}