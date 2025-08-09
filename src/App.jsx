import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import DataTable from './components/DataTable';
import { sampleUsers } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        <Sidebar />
        <main className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Active Users">
              <div className="text-2xl font-bold">{sampleUsers.filter(u => u.status === 'Active').length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Users currently active</div>
            </Card>
            <Card title="Total Users">
              <div className="text-2xl font-bold">{sampleUsers.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total registered users</div>
            </Card>
            <Card title="Quick Actions">
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded focus-outline">Create user</button>
            </Card>
          </div>

          <section aria-labelledby="user-table">
            <h2 id="user-table" className="text-lg font-semibold mb-3">Users</h2>
            <Card>
              <DataTable rows={sampleUsers} />
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
