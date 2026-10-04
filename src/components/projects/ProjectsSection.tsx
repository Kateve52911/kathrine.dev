import React from 'react';
import ProjectList from '@/components/projects/ProjectList';

export default function ProjectsSection() {
  return (
    <section id="projects" className="p-6 scroll-mt-20">
      <h2 className="text-4xl p-2 flex justify-center">My projects:</h2>
      <ProjectList />
    </section>
  );
}
