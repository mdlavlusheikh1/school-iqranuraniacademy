export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm" style={{ borderTop: '4px solid #6366f1' }}>
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold" style={{ color: '#6366f1' }}>
            ইকরা নূরানী একাডেমি
          </h1>
        </div>
      </header>
      
      <div className="container mx-auto">
        {children}
      </div>
      
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2025 ইকরা নূরানী একাডেমি. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}