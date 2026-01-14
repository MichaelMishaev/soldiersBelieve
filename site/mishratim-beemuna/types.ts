export enum Screen {
  HOME = 'HOME',
  PROGRAMS = 'PROGRAMS',
  STORIES = 'STORIES',
  CONTACT = 'CONTACT',
  ARTICLE = 'ARTICLE',
  ABOUT = 'ABOUT',
  SUCCESS = 'SUCCESS'
}

export interface NavItem {
  id: Screen;
  label: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  views?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  features?: string[];
}