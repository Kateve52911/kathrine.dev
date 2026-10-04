import TimelineCard from '@/components/timeline/TimelineCard';
import { TimelineEntry } from '@/schemas/timelineEntry';

interface TimelineRowProps {
  entry: TimelineEntry;
  index: number;
  variant?: string;
}

export default function TimelineRow({
  index,
  entry,
  variant,
}: TimelineRowProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="flex w-full">
      <div className="w-1/2 flex justify-end p-4">
        {isLeft && <TimelineCard entry={entry} variant={variant} />}
      </div>
      <div className="w-1/2 p-4">
        {!isLeft && <TimelineCard entry={entry} variant={variant} />}
      </div>
    </div>
  );
}
