import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import type { Post } from '../../types/blog';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          {post.categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="text-sm text-primary hover:text-primary/80"
            >
              {category.name}
            </Link>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-2">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-gray-500">
                {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
              </p>
            </div>
          </div>
          <span className="text-sm text-gray-500">{post.readingTime} min read</span>
        </div>
      </div>
    </article>
  );
}