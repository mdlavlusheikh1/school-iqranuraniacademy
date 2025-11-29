import Head from 'next/head'
import Sidebar from '../../components/Sidebar'

export default function Events() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Head>
          <title>Events - ইকরা নূরানী একাডেমি</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Events</h1>
        <p>Events page content...</p>
      </div>
    </div>
  )
}