

export interface Blog {
  id?: string;
  title: string;
  content: string;
  href?: string;
  createdAt?: { seconds: number; nanoseconds: number };
}