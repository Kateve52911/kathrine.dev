import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 m-4">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
