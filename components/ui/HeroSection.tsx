'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { FaArrowDown } from 'react-icons/fa'
import avatarAnimation from '@/public/lottie/Animation - 1746417621387.json'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const R3FCanvas = dynamic(() => import('../reusable/R3FCanvas'), { ssr: false })
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-20 h-20" />,
})

const greetings = [
  `<span class='text-white'>Hi, I’m <strong class='text-cyan-400'>Chandupa</strong> 👋<br/> A Developer & Tech Communicator</span>`,
  `<span class='text-cyan-300 italic'>Still here? Let’s build something cool 💻</span>`,
]

export default function HeroSection() {
  const [loopIndex, setLoopIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoopIndex((prev) => (prev + 1) % greetings.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    
    <section id="home" className="relative w-full min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-20 overflow-hidden flex flex-col md:flex-row items-center justify-between">
      <R3FCanvas />

      {/* 💬 Left Text */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="z-10 md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[0_0_25px_cyan] leading-relaxed">
          <Typewriter
            key={loopIndex}
            options={{
              strings: [greetings[loopIndex]],
              autoStart: true,
              loop: false,
              delay: 70,
              deleteSpeed: 30,
            }}
          />
        </h1>

        <p className="text-lg text-cyan-300 italic max-w-md">
          Building scalable systems and simplifying complexity — one line of code at a time.
        </p>

        <div className="flex gap-4 mt-6">
        <Link href="#projects" passHref>
          <JellyButton>🚀 View Projects</JellyButton>
        </Link>

          <JellyButton variant="glow">
            <a
              href="/Chandupa Poorna Lokuliyana.pdf"
              download
            >
              📄 Download Resume
            </a>
          </JellyButton>

          </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-cyan-400 mt-10 text-2xl"
        >
          <FaArrowDown className="drop-shadow-[0_0_10px_cyan]" />
        </motion.div>
      </motion.div>

      {/* 💻 Terminal Box */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="z-10 md:w-1/2 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative bg-white/5 border border-cyan-400 backdrop-blur-md rounded-xl p-5 shadow-lg shadow-cyan-500/30 w-[320px] h-[240px] animate-floatingSlow">
          <div className="font-mono text-green-400 text-sm space-y-2 pb-4">
            <p>~$ npm run dev</p>
            <p>
              Starting server on <span className="text-cyan-300">localhost:3000</span>...
            </p>
            <p className="text-white">✅ Server started successfully!</p>
            <p className="text-yellow-300">💡 Waiting for client requests...</p>
          </div>

          <div className="absolute bottom-[-36px] left-1/2 -translate-x-1/2 drop-shadow-[0_4px_12px_rgba(0,255,255,0.4)]">
            <Lottie animationData={avatarAnimation} loop autoplay className="w-40 h-40" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function JellyButton({
  children,
  variant,
}: {
  children: React.ReactNode
  variant?: 'glow'
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`relative overflow-hidden px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
        variant === 'glow'
          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_0_15px_rgba(0,255,255,0.4)]'
          : 'bg-transparent border border-cyan-300 text-cyan-200 hover:bg-cyan-600/20'
      }`}
    >
      {children}
    </motion.button>
  )
}
