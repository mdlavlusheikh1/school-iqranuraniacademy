import Head from 'next/head'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Student Dashboard - ইকরা নূরানী একাডেমি</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <p>Welcome student!</p>
    </div>
  )
}