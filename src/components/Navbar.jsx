import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Accessible Dashboard</h1>
        <div className="flex items-center gap-3">
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex gap-4">
              <li><a href="#" className="text-sm text-gray-700 dark:text-gray-200 focus-outline">Overview</a></li>
              <li><a href="#" className="text-sm text-gray-700 dark:text-gray-200 focus-outline">Reports</a></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
