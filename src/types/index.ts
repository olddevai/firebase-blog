export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  author: Author;
  categories: Category[];
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface MetaData {
  title: string;
  description: string;
  image?: string;
  url: string;
  type: string;
}