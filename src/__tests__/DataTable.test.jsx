import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from '../components/DataTable';
import { sampleUsers } from '../data';

test('renders table and filters correctly', () => {
  render(<DataTable rows={sampleUsers} />);
  // initial content
  expect(screen.getByText(/Amina Hassan/i)).toBeInTheDocument();
  // search
  const input = screen.getByRole('searchbox');
  fireEvent.change(input, { target: { value: 'sofia' } });
  expect(screen.queryByText(/Amina Hassan/i)).not.toBeInTheDocument();
  expect(screen.getByText(/Sofia Martinez/i)).toBeInTheDocument();
});
