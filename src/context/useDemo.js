import { useContext } from 'react';
import { DemoContext } from './DemoContext';

function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo must be used inside DemoProvider');
  return ctx;
}

export { useDemo };
