import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Modern blog platform built with React and TypeScript, featuring the latest web technologies
              and best practices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/technology" className="text-sm hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/design" className="text-sm hover:text-primary">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/category/development" className="text-sm hover:text-primary">
                  Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ModernBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}