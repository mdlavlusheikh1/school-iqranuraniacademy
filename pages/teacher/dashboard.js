import Head from 'next/head'
import { useState, useEffect } from 'react'
import api from '../../lib/api'

export default function TeacherDashboard() {
  const [stats, setStats] = useState({ students: 0, classes: 0 })

  useEffect(() => {
    Promise.all([
      api.get('/teacher/students').then(r => r.data.length).catch(() => 0),
      api.get('/teacher/classes').then(r => r.data.length).catch(() => 0),
    ]).then(([students, classes]) => {
      setStats({ students, classes })
    })
  }, [])

  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Teacher Dashboard - ইকরা নূরানী একাডেমি</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">My Students</h3>
          <p className="text-3xl font-bold">{stats.students}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">My Classes</h3>
          <p className="text-3xl font-bold">{stats.classes}</p>
        </div>
      </div>
    </div>
  )
}