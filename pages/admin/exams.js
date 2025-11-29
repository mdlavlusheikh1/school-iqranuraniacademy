import Head from 'next/head'
import Sidebar from '../../components/Sidebar'

export default function Exams() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Head>
          <title>Exams - ইকরা নূরানী একাডেমি</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Exams</h1>
        <p>Exams page content...</p>
      </div>
    </div>
  )
}