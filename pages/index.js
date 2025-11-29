import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ইকরা নূরানী একাডেমি</title>
        <meta name="description" content="Welcome to ইকরা নূরানী একাডেমি" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">ইকরা নূরানী একাডেমি</h1>
          <p className="text-xl text-gray-600">Excellence in Education</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/introduction" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">
              Learn more about our school and our mission.
            </p>
          </Link>
          
          <Link href="/headmaster-message" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Headmaster's Message</h2>
            <p className="text-gray-600">
              A message from our headmaster.
            </p>
          </Link>
          
          <Link href="/teachers" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Our Teachers</h2>
            <p className="text-gray-600">
              Meet our dedicated teaching staff.
            </p>
          </Link>
        </div>

        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Student & Parent Portal</h2>
          <p className="mb-6">Access your dashboard and manage your academic activities</p>
          <Link href="/login" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Login Now
          </Link>
        </div>
      </main>
    </Layout>
  )
}