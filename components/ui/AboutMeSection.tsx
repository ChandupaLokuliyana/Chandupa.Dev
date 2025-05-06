'use client'

import { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tooltip } from 'react-tooltip'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const R3FCanvas = dynamic(() => import('../reusable/R3FCanvas'), { ssr: false })

const timeline = [
  { year: '2020', title: 'O/Ls – 9As 🎓' },
  { year: '2023', title: 'A/Ls – ICT Stream 🧠' },
  { year: '2024', title: 'Joined ECU – BSc in CS 💻' },
  { year: '2025', title: 'HRM & SEO Certifications 📜' },
  { year: '2025', title: 'Room Booking App & Virtual Institute 🚀' },
]

const badges = [
  { label: '15+ Debate Titles', tooltip: 'Best Debater – Siyawas Prathapa' },
  { label: 'HRM Certified', tooltip: 'Human Resource Management – 2025' },
  { label: 'ECU Graduate', tooltip: 'Edith Cowan University – BSc (CS)' },
  { label: 'Full-Stack Dev', tooltip: 'Next.js, Django, GoLang' },
]

export default function AboutMeSection() {
  const imageRef = useRef(null)

  useEffect(() => {
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.25,
      })
    }
  }, [])

  return (
    <motion.section
      id="about"
      className="py-28 px-6 md:px-12 bg-[#0e1b2c] relative z-10 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <R3FCanvas />
      <h2 className="text-3xl text-center font-bold text-white mb-14 drop-shadow-[0_0_8px_cyan]">
        👤 About Me – Timewave Origin Scroll
      </h2>

      <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto items-start">
        {/* Left: Avatar & Badges */}
        <div className="relative flex flex-col items-center">
          <div
            ref={imageRef}
            className="w-60 h-60 rounded-full overflow-hidden border-4 border-cyan-500 ring-1 ring-offset-2 ring-cyan-300 shadow-lg bg-[#0e1b2c]/40 animate-floatingSlow mb-6"
          >
            <Image
              src="/Chandupa-Avatarr.png"
              alt="Chandupa Portrait"
              width={240}
              height={240}
              className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]"
              priority
            />
          </div>

          {/* Floating Badges */}
          <div className="flex flex-wrap justify-center gap-4 relative z-20">
            {badges.map((badge, i) => (
              <div
                key={i}
                data-tooltip-id={`badge-${i}`}
                className="bg-cyan-900/30 text-white text-sm px-4 py-2 rounded-full hover:scale-105 transition shadow-md"
              >
                {badge.label}
                <Tooltip id={`badge-${i}`} content={badge.tooltip} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Timeline & Bio */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-200 italic text-lg leading-relaxed"
          >
            From national debate stages to full-stack deployment, I thrive at the intersection of logic, communication, and innovation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300"
          >
            I&rsquo;m a Computer Science graduate from Edith Cowan University with hands-on experience in building scalable systems, optimizing performance, and delivering human-centered solutions.
          </motion.p>

          <div className="mt-8 pl-6 relative space-y-6">
            <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-cyan-500 via-transparent to-cyan-500 blur-sm animate-glowTrail" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-md absolute -left-3 top-1 group-hover:animate-ping" />
                <div className="ml-4 text-white/90 font-medium">
                  {item.year} – {item.title}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-cyan-300 bg-white/5 p-4 rounded-md border-l-4 border-cyan-400 italic text-xl shadow-md hover:shadow-cyan-400 transition"
          >
            “I believe software is not just about solving problems — it&rsquo;s about empowering people.”
          </motion.blockquote>

          <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
            <Link
              href="#projects"
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-cyan-600 transition-all"
            >
              🚀 View My Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
