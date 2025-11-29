import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const router = useRouter()
  const isActive = (path) => router.pathname === path

  const menuItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/admin/students', label: 'Students', icon: '👨‍🎓' },
    { href: '/admin/teachers', label: 'Teachers', icon: '👨‍🏫' },
    { href: '/admin/parents', label: 'Parents', icon: '👨‍👩‍👧' },
    { href: '/admin/classes', label: 'Classes', icon: '📚' },
    { href: '/admin/routines', label: 'Routines', icon: '📅' },
    { href: '/admin/attendances', label: 'Attendances', icon: '✅' },
    { href: '/admin/events', label: 'Events', icon: '🎉' },
    { href: '/admin/exams', label: 'Exams', icon: '📝' },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">ইকরা নূরানী একাডেমি</h2>
      <nav className="space-y-2">
        {menuItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={\`block p-3 rounded ${isActive(item.href) ? 'bg-primary text-white' : 'hover:bg-gray-200'}\`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}