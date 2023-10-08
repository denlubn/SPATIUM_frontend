import { useEffect, useState } from "react";
import { Project } from "../../types/Project";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import { getProjects } from "../../services/project";

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, [])

  // const projects: Project[] = [{
  //   id: '754952fb-7200-40b1-5081-08dbc7574c98',
  //   imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVm9rYch7FtYEGfYRpQz8ZCypoVsx3k5a4ASi_5a27T1w=s240-p-k-rw-no',
  //   name: 'Muscle nigga',
  //   description: 'Best Nigga ever',
  //   creator: 'God Dennis',
  //   requiredSkills: ['stressful', 'aggresive python user'],
  //   creationDate: "2023-10-07T15:17:51.2914276",
  // },];

  return (
    <ProjectsList title="Projects" projects={projects} />
  )
}