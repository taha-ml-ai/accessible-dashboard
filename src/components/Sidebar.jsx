import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 hidden md:block bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4">
      <nav aria-label="Sidebar" className="space-y-2">
        <a href="#" className="block p-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus-outline" tabIndex="0">Dashboard</a>
        <a href="#" className="block p-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus-outline" tabIndex="0">Users</a>
        <a href="#" className="block p-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus-outline" tabIndex="0">Settings</a>
      </nav>
    </aside>
  );
}
