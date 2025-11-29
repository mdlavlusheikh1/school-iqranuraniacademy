import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ইকরা নূরানী একাডেমি</title>
        <meta name="description" content="Welcome to ইকরা নূরানী একাডেমি" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to ইকরা নূরানী একাডেমি
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">
              Learn more about our school and our mission.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Admissions</h2>
            <p className="text-gray-600">
              Information about admissions and enrollment.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600">
              Get in touch with us for more information.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}