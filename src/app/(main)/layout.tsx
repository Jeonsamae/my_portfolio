import React from 'react';
import type { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="main-layout">
      {children}
    </div>
  );
}
