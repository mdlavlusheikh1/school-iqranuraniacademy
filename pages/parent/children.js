import Head from 'next/head'

export default function ParentChildren() {
  return (
    <div className="min-h-screen p-8">
      <Head>
        <title>My Children - ইকরা নূরানী একাডেমি</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">My Children</h1>
      <p>Children list...</p>
    </div>
  )
}