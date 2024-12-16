import React from 'react';
import PostCard from './PostCard';
import { usePosts } from '../../hooks/usePosts';
import { useSearch } from '../../hooks/useSearch';

export default function PostList() {
  const { posts, loading } = usePosts();
  const { filters, searchPosts } = useSearch();
  
  const filteredPosts = searchPosts(filters);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}