import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chinese Name Generator',
  description: 'Generate your own magical Chinese name! A fun and exciting way to discover your Chinese name.',

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