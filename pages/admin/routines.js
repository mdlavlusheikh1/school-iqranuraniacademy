import Head from 'next/head'
import Sidebar from '../../components/Sidebar'

export default function Routines() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Head>
          <title>Routines - ইকরা নূরানী একাডেমি</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Routines</h1>
        <p>Routines page content...</p>
      </div>
    </div>
  )
}