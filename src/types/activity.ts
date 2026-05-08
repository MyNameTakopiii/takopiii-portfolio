export interface ActivityItem {
  title: string;
  period: string;
  role: string;
  description: string;
  type: 'academic' | 'event' | 'work';
}

export interface ActivityProps {
  activityData: ActivityItem[];
}
