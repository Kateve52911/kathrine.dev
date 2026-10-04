import { skills } from '@/data/skills';

export default function SkillSection() {
  return (
    <section id="skills" className="p-6 scroll-mt-20">
      <h2 className="text-4xl p-2 flex justify-center">My skills:</h2>
      <div className="grid grid-cols-3 gap-6 my-8">
        {skills.map((category) => {
          return (
            <div
              className="border-sage border-1 shadow rounded p-10"
              key={category.category}
            >
              <h3 className="text-lg font-bold">{category.category}</h3>
              <div className="flex flex-wrap gap-2 ">
                {category.items.map((item) => (
                  <div key={item}>
                    <span className="rounded-full bg-plum/10 text-plum px-3 py-1 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
