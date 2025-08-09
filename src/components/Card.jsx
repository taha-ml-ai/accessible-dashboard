import React from 'react';

export default function Card({ title, children }) {
  return (
    <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-4 shadow-sm">
      <h2 className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
