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
  status: 'draft' | 'published';
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

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
  parentId?: string;
}

export interface SearchFilters {
  query: string;
  categories?: string[];
  tags?: string[];
  dateRange?: {
    start: string;
    end: string;
  };
}