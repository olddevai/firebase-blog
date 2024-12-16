import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import type { Post, SearchFilters } from '../types/blog';

export function useSearch() {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    categories: [],
    tags: [],
  });

  const searchPosts = useCallback((searchFilters: SearchFilters): Post[] => {
    return posts.filter(post => {
      const matchesQuery = searchFilters.query
        ? post.title.toLowerCase().includes(searchFilters.query.toLowerCase()) ||
          post.content.toLowerCase().includes(searchFilters.query.toLowerCase())
        : true;

      const matchesCategories = searchFilters.categories?.length
        ? post.categories.some(category => 
            searchFilters.categories?.includes(category.slug)
          )
        : true;

      const matchesTags = searchFilters.tags?.length
        ? post.tags.some(tag => searchFilters.tags?.includes(tag))
        : true;

      return matchesQuery && matchesCategories && matchesTags;
    });
  }, [posts]);

  return {
    filters,
    setFilters,
    searchPosts,
  };
}