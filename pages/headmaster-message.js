import Head from 'next/head'
import Layout from '../components/Layout'

export default function HeadmasterMessage() {
  return (
    <Layout>
      <Head>
        <title>Headmaster's Message - ইকরা নূরানী একাডেমি</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Headmaster's Message</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg">Welcome message from the headmaster...</p>
        </div>
      </main>
    </Layout>
  )
}