import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chinese Name Generator',
  description: 'Generate your own magical Chinese name! A fun and exciting way to discover your Chinese name with beautiful characters.',
  keywords: ['chinese name', 'name generator', 'chinese characters', 'fun generator'],
  openGraph: {
    title: 'Chinese Name Generator',
    description: 'Generate your own magical Chinese name with beautiful characters!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}