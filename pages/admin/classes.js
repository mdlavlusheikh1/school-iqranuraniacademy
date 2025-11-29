import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import { useState, useEffect } from 'react'
import api from '../../lib/api'

export default function AdminClasses() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    api.get('/classes')
      .then(res => setClasses(res.data))
      .catch(() => {})
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Head>
          <title>Classes - ইকরা নূরানী একাডেমি</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Classes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map(cls => (
            <div key={cls.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{cls.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}