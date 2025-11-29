import Head from 'next/head'
import Layout from '../components/Layout'

export default function Introduction() {
  return (
    <Layout>
      <Head>
        <title>About Us - ইকরা নূরানী একাডেমি</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About ইকরা নূরানী একাডেমি</h1>
        <div className="prose max-w-none">
          <p className="text-lg">ইকরা নূরানী একাডেমি is committed to providing quality education...</p>
        </div>
      </main>
    </Layout>
  )
}