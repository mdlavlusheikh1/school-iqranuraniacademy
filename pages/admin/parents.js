import Head from 'next/head'
import Sidebar from '../../components/Sidebar'

export default function AdminParents() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Head>
          <title>Parents - ইকরা নূরানী একাডেমি</title>
        </Head>
        <h1 className="text-3xl font-bold mb-6">Parents</h1>
        <p>Parents page content...</p>
      </div>
    </div>
  )
}