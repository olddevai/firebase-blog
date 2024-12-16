export interface MetaData {
  title: string;
  description: string;
  image?: string;
  url: string;
  type: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}