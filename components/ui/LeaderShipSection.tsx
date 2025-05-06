'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CountUp from 'react-countup'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import dynamic from 'next/dynamic'
const R3FCanvas = dynamic(() => import('../reusable/R3FCanvas'), { ssr: false })

const trophies = [
  { title: 'Best Debater – Siyawas Prathapa ‘24', subtitle: 'National Finals, 1st Place', icon: '🏆' },
  { title: 'ICT Society Secretary', subtitle: 'Organized 5+ events', icon: '📣' },
  { title: 'Wagandara ’23 Champion', subtitle: 'Island-wide event winner', icon: '🥇' },
]

const moments = [
  {
    title: 'Sirasa TV Finals',
    caption: 'Leaders for the Future – National Debate',
    src: '/achievements/121.jpg',
    video: true,
  },
  {
    title: 'Debate Stage Win',
    caption: 'Royal College Finals',
    src: '/achievements/121.jpg',
  },
  {
    title: 'ICT Society Event',
    caption: 'Leadership & Event Hosting',
    src: '/achievements/121.jpg',
  },
  {
    title: 'Panel Discussion',
    caption: 'Representing ICT Leadership',
    src: '/achievements/121.jpg',
  },
  {
    title: 'Debate Workshop',
    caption: 'Trained 100+ new debaters',
    src: '/achievements/121.jpg',
  },
]

export default function LeadershipSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleGallery = moments.slice(currentIndex, currentIndex + 3)

  const next = () => {
    setCurrentIndex((prev) => (prev + 3 >= moments.length ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? Math.max(moments.length - 3, 0) : prev - 1
    )
  }

  return (
    <section id="leadership" className="bg-gradient-to-br from-[#0f172a] via-[#203a43] to-[#2c5364] text-white py-28 px-6 md:px-12">
      <R3FCanvas />
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-cyan-200 text-center mb-12 tracking-wide"
      >
        🏆 Leadership & Legacy
      </motion.h2>

      {/* Trophy Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <motion.blockquote
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="italic text-xl text-cyan-300 border-l-4 pl-4 border-cyan-500 bg-[#0d1b2a]/30 rounded max-w-md"
          >
            “15+ championships including Wagandara ‘23, Siyawas Prathapa”
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-cyan-400 relative inline-block"
          >
            <span className="absolute -inset-1 rounded-full bg-cyan-500/10 blur-xl animate-pulse"></span>
            <CountUp end={15} duration={2.5} />+ Awards
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {trophies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
                type: 'spring',
                stiffness: 150,
              }}
              className="bg-glass backdrop-blur-md p-5 rounded-xl border border-cyan-400/30 hover:shadow-cyan-500/30 transition-all shadow-md hover:scale-105"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="font-semibold text-lg">{item.title}</div>
              <div className="text-sm text-gray-300">{item.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Champion Moments Section with entrance animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-24"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-cyan-300 drop-shadow-glow">
          🎥 Champion Moments
        </h3>

        <div className="relative max-w-6xl mx-auto">
          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleGallery.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative group rounded-xl overflow-hidden shadow-md shadow-cyan-500/20 border border-cyan-400/10 bg-white/5 backdrop-blur-md cursor-pointer"
                onClick={() => {
                  setLightboxIndex((currentIndex + i) % moments.length)
                  setLightboxOpen(true)
                }}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-cyan-200">{item.caption}</p>
                </div>
                {item.video && (
                  <div className="absolute top-2 left-2 text-xs bg-cyan-600 px-2 py-0.5 rounded-full text-white">
                    🎬 Video
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
            >
              ← Prev
            </button>
            <button
              onClick={next}
              className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={moments.map((img) => ({ src: img.src, title: img.title }))}
          index={lightboxIndex}
          on={{ view: ({ index }) => setLightboxIndex(index) }}
        />
      )}
    </section>
  )
}
