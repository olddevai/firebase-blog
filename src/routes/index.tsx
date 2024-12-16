import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Home = React.lazy(() => import('../pages/Home'));
const Blog = React.lazy(() => import('../pages/Blog'));
const Post = React.lazy(() => import('../pages/Post'));
const About = React.lazy(() => import('../pages/About'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Post />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}