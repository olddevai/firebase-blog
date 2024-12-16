import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';

export default function SearchBar() {
  const { filters, setFilters } = useSearch();

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search posts..."
        value={filters.query}
        onChange={(e) => setFilters({ ...filters, query: e.target.value })}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}