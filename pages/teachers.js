import Head from 'next/head'
import Layout from '../components/Layout'
import api from '../lib/api'
import { useState, useEffect } from 'react'

export default function Teachers() {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/teachers')
      .then(res => {
        setTeachers(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <Layout>
      <Head>
        <title>Our Teachers - ইকরা নূরানী একাডেমি</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Our Teachers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachers.map(teacher => (
              <div key={teacher.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.subject}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </Layout>
  )
}