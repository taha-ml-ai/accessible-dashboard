import React, { useState, useMemo } from 'react';

export default function DataTable({ rows }) {
  const [query, setQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = useMemo(() => {
    let result = rows;
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(r => r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q) || r.role.toLowerCase().includes(q));
    }
    if (filterStatus !== 'all') {
      result = result.filter(r => r.status.toLowerCase() === filterStatus);
    }
    return result;
  }, [rows, query, filterStatus]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
        <label htmlFor="search" className="sr-only">Search users</label>
        <input
          id="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, role or email"
          className="p-2 border rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label htmlFor="status" className="sr-only">Filter by status</label>
        <select
          id="status"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div role="table" aria-label="User list" className="overflow-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-xs text-gray-600 dark:text-gray-300">
              <th className="py-2 px-2">Name</th>
              <th className="py-2 px-2 hidden sm:table-cell">Role</th>
              <th className="py-2 px-2">Email</th>
              <th className="py-2 px-2">Status</th>
              <th className="py-2 px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-4 text-sm text-gray-500">No results found.</td>
              </tr>
            ) : filtered.map((r) => (
              <tr key={r.id} className="border-t border-gray-100 dark:border-gray-700">
                <td className="py-3 px-2">
                  <div className="font-medium text-gray-900 dark:text-gray-100">{r.name}</div>
                </td>
                <td className="py-3 px-2 hidden sm:table-cell">{r.role}</td>
                <td className="py-3 px-2">
                  <a href={`mailto:${r.email}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus-outline">{r.email}</a>
                </td>
                <td className="py-3 px-2">
                  <span className={`inline-block px-2 py-1 text-xs rounded ${r.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {r.status}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus-outline" aria-label={`Open profile for ${r.name}`}>Open</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
