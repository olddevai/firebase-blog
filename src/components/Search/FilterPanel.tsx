import React from 'react';
import { useSearch } from '../../hooks/useSearch';
import type { Category } from '../../types/blog';

interface FilterPanelProps {
  categories: Category[];
  tags: string[];
}

export default function FilterPanel({ categories, tags }: FilterPanelProps) {
  const { filters, setFilters } = useSearch();

  const handleCategoryChange = (slug: string) => {
    const newCategories = filters.categories?.includes(slug)
      ? filters.categories.filter(cat => cat !== slug)
      : [...(filters.categories || []), slug];
    
    setFilters({ ...filters, categories: newCategories });
  };

  const handleTagChange = (tag: string) => {
    const newTags = filters.tags?.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...(filters.tags || []), tag];
    
    setFilters({ ...filters, tags: newTags });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.categories?.includes(category.slug)}
                onChange={() => handleCategoryChange(category.slug)}
                className="rounded text-primary focus:ring-primary"
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.tags?.includes(tag)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}