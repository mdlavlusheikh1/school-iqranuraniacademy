import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import { useState, useEffect } from 'react'
import api from '../../lib/api'

export default function AdminTeachers() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    api.get('/teachers')
      .then(res => setTeachers(res.data))
      .catch(() => {})
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Head>
          <title>Teachers - ইকরা নূরানী একাডেমি</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Teachers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachers.map(teacher => (
            <div key={teacher.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}