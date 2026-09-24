import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import FooterReveal from './components/FooterReveal.jsx'
import Footer from './components/Footer.jsx'
import MobileDialog from './components/MobileDialog.jsx'
import HomePage from './pages/Home/index.jsx'
import ChatPage from './pages/Chat/index.jsx'
import EnterprisePage from './pages/Enterprise/index.jsx'
import PricingPage from './pages/Pricing/index.jsx'
import BlogPage from './pages/Blog/index.jsx'
import BlogAppleWatchPage from './pages/BlogAppleWatch/index.jsx'
import JobsPage from './pages/Jobs/index.jsx'
import ContactSalesPage from './pages/ContactSales/index.jsx'
import { usePath, useLinkInterception } from './router.js'

// Titles and footer CTA per route, as served by the live site.
const PAGES = {
  '/': { Page: HomePage, title: 'Granola — The AI Notepad for back-to-back meetings', cta: false },
  '/chat': { Page: ChatPage, title: "Granola — AI that already knows what you're working on | Granola", cta: true },
  '/enterprise': { Page: EnterprisePage, title: 'Granola for Enterprise | Granola', cta: false },
  '/pricing': { Page: PricingPage, title: 'Pricing plans | Granola', cta: true },
  '/blog': { Page: BlogPage, title: 'Blog - News and product insights from Granola HQ | Granola', cta: true },
  '/blog/granola-for-apple-watch': { Page: BlogAppleWatchPage, title: 'Granola for Apple Watch | Granola', cta: true },
  '/jobs': { Page: JobsPage, title: 'Careers - Come build the future of work | Granola', cta: true },
  '/contact/sales': { Page: ContactSalesPage, title: 'Contact sales | Granola', cta: true },
}

export default function App() {
  const path = usePath()
  useLinkInterception()
  const route = PAGES[path.replace(/\/+$/, '') || '/'] ?? PAGES['/']
  const { Page } = route

  useEffect(() => {
    document.title = route.title
  }, [route])

  return (
    <>
      <Navbar path={path} />
      <FooterReveal key={path}>
        <Page />
        <Footer cta={route.cta} />
      </FooterReveal>
      <MobileDialog />
    </>
  )
}
