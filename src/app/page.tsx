import Hero from '@/components/ui/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import TimelineSection from '@/components/timeline/TimelineSection';
import SkillSection from '@/components/sections/SkillSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <SkillSection />
      <AboutSection />
      <TimelineSection />
    </>
  );
}
