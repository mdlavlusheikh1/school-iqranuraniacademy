import Head from 'next/head'
import Layout from '../components/Layout'

export default function AcademicCalendar() {
  return (
    <Layout>
      <Head>
        <title>Academic Calendar - ইকরা নূরানী একাডেমি</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Academic Calendar</h1>
        <p>Calendar information coming soon...</p>
      </main>
    </Layout>
  )
}