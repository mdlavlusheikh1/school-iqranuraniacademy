import Head from 'next/head'
import Layout from '../components/Layout'
import api from '../lib/api'
import { useState, useEffect } from 'react'

export default function Classes() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    api.get('/classes')
      .then(res => setClasses(res.data))
      .catch(() => {})
  }, [])

  return (
    <Layout>
      <Head>
        <title>Classes - ইকরা নূরানী একাডেমি</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Our Classes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map(cls => (
            <div key={cls.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{cls.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}