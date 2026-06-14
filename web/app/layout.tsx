import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'FactoryOS',
  description: 'FactoryOS control center with FastAPI-backed AI endpoints.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'Segoe UI, sans-serif',
          background: '#f5f7fb',
          color: '#10213a',
        }}
      >
        {children}
      </body>
    </html>
  );
}
