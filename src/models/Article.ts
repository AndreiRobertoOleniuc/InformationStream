import { Section } from "./Section";

export interface Article {
  title: string;
  description: string;
  url: string;
  heroImage: string;
  publishedAt: string;
  categories: string[];
  author: string;
  sections: Section[];
}
