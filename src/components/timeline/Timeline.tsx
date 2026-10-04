import { professionalJourney } from '@/data/professionalJourney';
import TimelineRow from '@/components/timeline/TimelineRow';

export default function Timeline() {
  return (
    <div className="relative m-4">
      <h2 className="text-4xl p-2 flex justify-center">
        My education and experiences
      </h2>
      <div className="absolute left-1/2 bg-black h-full -ml-0.5 w-0.5"></div>
      {professionalJourney.map((entry, index) => (
        <TimelineRow
          key={entry.dateRange}
          index={index}
          entry={entry}
          variant={entry.type}
        />
      ))}
    </div>
  );
}
