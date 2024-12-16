import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { usePosts } from '../hooks/usePosts';
import { formatDistance } from 'date-fns';

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = usePosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Modern React Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        {post.coverImage && <meta property="og:image" content={post.coverImage} />}
      </Helmet>

      <article className="container mx-auto px-4 py-8">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}

        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            {post.categories.map(category => (
              <span
                key={category.id}
                className="text-sm text-primary"
              >
                {category.name}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-500">
                  {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {post.readingTime} min read
            </div>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </>
  );
}