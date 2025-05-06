// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        <h1 className="text-xl font-bold tracking-wide text-cyan-300">Chandupa.dev</h1>

        <nav className="hidden md:flex gap-6 text-sm text-cyan-200">
          {['Home', 'Projects', 'About', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="group relative hover:text-white transition">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button className="md:hidden text-cyan-300" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="fixed top-0 right-0 h-screen w-[70%] bg-[#0e1b2c] text-white p-6 z-50 shadow-lg"
        >
          <button className="mb-4" onClick={() => setIsOpen(false)}>
            <X className="hover:text-cyan-300 transition" />
          </button>
          <ul className="space-y-4 text-xl">
            {['Home', 'Projects', 'About', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-300 border-b border-white/10 pb-2 block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  )
}
