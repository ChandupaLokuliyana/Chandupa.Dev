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
  { year: '2022 - May', title: 'O/Ls – 9As 🎓' },
  { year: '2022 - Jul', title: 'Diploma in Computing – ACBT 🧠' },
  { year: '2024 - Nov', title: 'A/Ls Thurstan College – 3As & 1.9455 Z-Score 📚' },
  { year: '2025 - Feb', title: 'BSc Computer Science at Edith Cowan University – Second Upper 🎓' },
  { year: '2025 - Mar', title: 'Launched My Tech Startup – Chadlop 🚀' },
]

const badges = [
  { label: '15+ Debate Titles', tooltip: 'Multiple championships' },
  { label: 'ECU Graduate', tooltip: 'Edith Cowan University – BSc in Computer Science' },
  { label: 'Full-Stack Dev', tooltip: 'Specialized in Next.js, Django, GoLang' },
  { label: 'Founder of Chadlop', tooltip: 'Launched in 2025 to build future-driven tech' },
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
      className="relative py-28 px-6 md:px-12 bg-[#0e1b2c] overflow-hidden z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <R3FCanvas />

      <h2 className="text-3xl text-center font-bold text-white mb-14 drop-shadow-[0_0_8px_cyan]">
        👤 About Me – Timewave Origin Scroll
      </h2>

      <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto items-start">
        {/* Left Avatar + Badges */}
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
              className="object-contain w-full h-full drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]"
              priority
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-20">
            {badges.map((badge, i) => (
              <div
                key={i}
                data-tooltip-id={`badge-${i}`}
                className="bg-cyan-900/30 text-white text-sm px-4 py-2 rounded-full hover:scale-105 transition shadow-md cursor-pointer"
              >
                {badge.label}
                <Tooltip id={`badge-${i}`} content={badge.tooltip} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Timeline + Content */}
        <div className="space-y-8 relative">
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-200 italic text-lg leading-relaxed"
          >
            I’ve always thrived on building meaningful tech—whether it was managing parallel paths through A/Ls and a BSc, or deploying full-stack systems that simplify real-world problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300"
          >
            I’m a Computer Science graduate from Edith Cowan University with deep focus in backend logic, scalable systems, and full-stack product development—from <strong>Next.js</strong> and <strong>Django</strong> to <strong>GoLang</strong>. In 2025, I launched my own startup, <strong>Chadlop</strong>, with a mission to empower lives through futuristic solutions.
          </motion.p>

          <div className="space-y-6 pl-6 relative">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {i !== 0 && (
                  <div className="absolute -left-[22px] top-[-22px] h-[22px] w-[2px] bg-cyan-500/60" />
                )}
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-md absolute -left-[30px] top-1 group-hover:animate-ping" />
                <div className="ml-2 text-white/90 font-medium text-sm">
                  {item.year} – {item.title}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-cyan-300 bg-white/5 p-4 rounded-md border-l-4 border-cyan-400 italic text-xl shadow-md hover:shadow-cyan-400 hover:-translate-y-1 transition"
          >
            “Code isn’t just logic — it’s vision translated into action.”
          </motion.blockquote>

          <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
            <Link
              href="#projects"
              scroll
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
