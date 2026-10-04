import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Project } from '@/schemas/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="max-w-sm shadow items-stretch">
      <CardHeader>
        <Image
          src={`/${project.image}`}
          alt={project.title}
          width={400}
          height={400}
          className="rounded-md object-cover"
        />
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        {project.live && (
          <a href={project.live} target="_black" rel="noopner noreferrer">
            Live
          </a>
        )}
      </CardContent>
    </Card>
  );
}
