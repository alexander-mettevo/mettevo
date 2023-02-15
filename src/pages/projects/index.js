import ProjectListPage from "@/components/pages/projects/projectList/ProjectListPage";
import projects from "@/mocData/projects/projects";

export default function Projects() {
  return <ProjectListPage data={projects}/>
}