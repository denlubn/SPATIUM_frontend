import { Project } from "../../types/Project";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import './ProductList.scss';

type Props = {
  title: string,
  projects: Project[]
}

export const ProjectsList: React.FC<Props> = ({ title, projects }) => {
  const itemsAmount = projects.length;

  return (
    <div className="product-list">
      <div className="product-list__container">
        <h1 className="product-list__title">{title}</h1>
        <p className="product-list__count">{`${itemsAmount} ${title}`}</p>

        <div className="product-list__products">
          {projects.map((item: Project) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
    </div>
  )
}