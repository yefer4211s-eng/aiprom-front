import { Outlet } from 'react-router'

import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1 bg-white">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
