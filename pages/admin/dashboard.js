import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import { useEffect, useState } from 'react'
import api from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'
import { useRouter } from 'next/router'

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState({ students: 0, teachers: 0, classes: 0 })

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login')
      return
    }

    Promise.all([
      api.get('/students').then(r => r.data.length).catch(() => 0),
      api.get('/teachers').then(r => r.data.length).catch(() => 0),
      api.get('/classes').then(r => r.data.length).catch(() => 0),
    ]).then(([students, teachers, classes]) => {
      setStats({ students, teachers, classes })
    })
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Head>
          <title>Admin Dashboard - ইকরা নূরানী একাডেমি</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Students</h3>
            <p className="text-3xl font-bold">{stats.students}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Teachers</h3>
            <p className="text-3xl font-bold">{stats.teachers}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Classes</h3>
            <p className="text-3xl font-bold">{stats.classes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}