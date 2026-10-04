import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TimelineEntry } from '@/schemas/timelineEntry';

interface TimelineEntryProps {
  entry: TimelineEntry;
  variant?: string;
}

export default function TimelineCard({ entry, variant }: TimelineEntryProps) {
  return (
    <Card
      className={`max-w-2xl items-stretch border-4 shadow-md ${variant === 'education' ? 'border-sage' : 'border-plum'}`}
    >
      <CardHeader>
        <CardTitle>{entry.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="p-1">
          <p className="font-bold text-black py-1">{entry.organisation}</p>
          <p className="text-black"> {entry.dateRange}</p>
          {entry.bullets && (
            <ul>
              {entry.bullets.map((bullet) => (
                <li className="list-disc py-1" key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {entry.description && <p>{entry.description}</p>}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
