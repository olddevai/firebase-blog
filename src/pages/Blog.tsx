import React from 'react';
import { Helmet } from 'react-helmet-async';
import PostList from '../components/Posts/PostList';
import SearchBar from '../components/Search/SearchBar';
import FilterPanel from '../components/Search/FilterPanel';

export default function Blog() {
  // Mock data for demonstration
  const categories = [
    { id: '1', name: 'Technology', slug: 'technology' },
    { id: '2', name: 'Design', slug: 'design' },
    { id: '3', name: 'Development', slug: 'development' },
  ];

  const tags = ['React', 'TypeScript', 'JavaScript', 'Web Development', 'UI/UX'];

  return (
    <>
      <Helmet>
        <title>Blog - Modern React Blog</title>
        <meta name="description" content="Explore our latest blog posts about technology, design, and development." />
        <meta property="og:title" content="Blog - Modern React Blog" />
        <meta property="og:description" content="Explore our latest blog posts about technology, design, and development." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterPanel categories={categories} tags={tags} />
          </div>
          <div className="lg:col-span-3">
            <PostList />
          </div>
        </div>
      </div>
    </>
  );
}