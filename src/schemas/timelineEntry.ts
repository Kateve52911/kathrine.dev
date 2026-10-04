export interface TimelineEntry {
  title: string;
  organisation: string;
  dateRange: string;
  description?: string;
  bullets?: string[];
  type: 'experience' | 'education';
}
