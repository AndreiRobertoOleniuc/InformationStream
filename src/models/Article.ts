import { Section } from "./Section";

export interface Article {
  title: string;
  description: string;
  heroImage: string;
  categories: string[];
  author: string;
  publishedAt: Date;
  sections: Section[];
}
