import Head from 'next/head'

export default function ParentDashboard() {
  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>Parent Dashboard - ইকরা নূরানী একাডেমি</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Parent Dashboard</h1>
      <p>Welcome parent!</p>
    </div>
  )
}