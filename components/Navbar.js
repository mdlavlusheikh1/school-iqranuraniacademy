import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex space-x-6">
        <Link href="/admin/dashboard" className={router.pathname.includes('/admin') ? 'font-bold' : ''}>
          Dashboard
        </Link>
      </div>
    </nav>
  )
}