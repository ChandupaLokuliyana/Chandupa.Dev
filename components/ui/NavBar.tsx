'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Folder, User, Cpu, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: <Home /> },
  { name: 'Projects', icon: <Folder /> },
  { name: 'About', icon: <User /> },
  { name: 'Skills', icon: <Cpu /> },
  { name: 'Contact', icon: <Mail /> },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        <h1 className="text-xl font-bold tracking-wide text-cyan-300">Chandupa.dev</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-cyan-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="group relative hover:text-white transition"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cyan-300" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-[75%] bg-[#0e1b2c]/95 backdrop-blur-xl text-white p-6 z-50 shadow-2xl"
          >
            <button className="mb-6 text-white hover:text-cyan-400 transition" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>

            <ul className="space-y-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium hover:text-cyan-400 transition"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
