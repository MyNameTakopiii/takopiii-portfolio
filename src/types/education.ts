export interface EducationItem {
  title: string;
  period: string;
  detail: string;
  image: string;
  status?: string;
}

export interface EducationProps {
  items: EducationItem[];
}
