import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar          from './components/Navbar'
import Footer          from './components/Footer'
import Home            from './pages/Home'
import Classes         from './pages/Classes'
import Camps           from './pages/Camps'
import Aftercare       from './pages/Aftercare'
import Teams           from './pages/Teams'
import TheGym          from './pages/TheGym'
import BirthdayParties from './pages/BirthdayParties'
import OpenGym         from './pages/OpenGym'
import Gallery         from './pages/Gallery'
import Blog            from './pages/Blog'
import Contact         from './pages/Contact'
import NotFound        from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                     element={<Home />} />
          <Route path="/classes"              element={<Classes />} />
          <Route path="/classes/recreational" element={<Classes />} />
          <Route path="/classes/competitive"  element={<Teams />} />
          <Route path="/classes/camps"        element={<Camps />} />
          <Route path="/classes/aftercare"    element={<Aftercare />} />
          <Route path="/teams/:team"          element={<Teams />} />
          <Route path="/the-gym"              element={<TheGym />} />
          <Route path="/the-gym/:sub"         element={<TheGym />} />
          <Route path="/birthday-parties"     element={<BirthdayParties />} />
          <Route path="/open-gym"             element={<OpenGym />} />
          <Route path="/gallery"              element={<Gallery />} />
          <Route path="/blog"                 element={<Blog />} />
          <Route path="/contact"              element={<Contact />} />
          <Route path="*"                     element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
