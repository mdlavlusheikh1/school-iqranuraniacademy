import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b-4" style={{ borderColor: '#6366f1' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold" style={{ color: '#6366f1' }}>
            ইকরা নূরানী একাডেমি
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="/introduction" className="hover:text-primary transition">About</Link>
            <Link href="/teachers" className="hover:text-primary transition">Teachers</Link>
            <Link href="/classes" className="hover:text-primary transition">Classes</Link>
            <Link href="/login" className="px-4 py-2 rounded" style={{ backgroundColor: '#6366f1', color: 'white' }}>
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}