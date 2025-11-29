import Head from 'next/head'
import Sidebar from '../../components/Sidebar'

export default function Attendances() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Head>
          <title>Attendances - ইকরা নূরানী একাডেমি</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Attendances</h1>
        <p>Attendances page content...</p>
      </div>
    </div>
  )
}