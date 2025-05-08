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
  { title: 'Best Debater – Ananda Piyadigama ‘24', subtitle: 'All Island Championship', icon: '🏆' },
  { title: 'ICT Society Secretary', subtitle: 'Revived Thurstan College ICT Day after 8 years', icon: '📣' },
  { title: 'Team Leader', subtitle: 'Top Dhamma School Team – Colombo District', icon: '🥇' },
  { title: 'Best Developer', subtitle: '1st Place – Web Design Competition', icon: '🥳' },
]

const moments = [
  {
    title: 'Seethala Ithala – Charana TV',
    caption: 'Invited guest speaker at age 18 for a national TV program discussing youth innovation and education.',
    src: '/achievements/charana.jpg',
  },
  {
    title: 'Prathirawa – Ananda College',
    caption: 'Champions of Sri Lanka’s oldest all-island school-level debate tournament.',
    src: '/achievements/prathirawa.jpg',
  },
  {
    title: 'Avarjana – Open Tournament',
    caption: 'Won against university-level debaters. Selected to the “Dream Team of the Tournament.”',
    src: '/achievements/Avarjana.jpg',
  },
  {
    title: 'The Debater – Sirasa TV',
    caption: 'Represented Thurstan College in Sri Lanka’s biggest televised debate show.',
    src: '/achievements/TheDebater.jpg',
    video: true,
  },
  {
    title: 'Techno Vision – Rotaract Club',
    caption: 'First championship win as captain of the Thurstan College team.',
    src: '/achievements/TechnoVision.jpg',
  },
]

export default function LeadershipSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleGallery = moments.slice(currentIndex, currentIndex + 3)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1 + 3 > moments.length ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? Math.max(moments.length - 3, 0) : prev - 1
    )
  }

  return (
    <section id="leadership" className="py-24 px-6 md:px-12 bg-[#0f172a] text-white relative overflow-hidden">
      <R3FCanvas />
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-cyan-200 text-center mb-12 tracking-wide"
      >
        🏆 Leadership & Legacy
      </motion.h2>

      {/* Trophies */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <motion.blockquote
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="italic text-xl text-cyan-300 border-l-4 pl-4 border-cyan-500 bg-[#0d1b2a]/30 rounded max-w-md"
          >
            “15+ championships including debating, oratory and software excellence.”
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

      {/* Champion Moments */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-cyan-300 drop-shadow-glow">
          🎥 Champion Moments
        </h3>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleGallery.map((item, i) => (
              <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-xl overflow-hidden shadow-lg border border-cyan-500/20 bg-[#0d1b2a]/40 backdrop-blur-md transition-all cursor-pointer"
              onClick={() => {
                setLightboxIndex((currentIndex + i) % moments.length)
                setLightboxOpen(true)
              }}
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            
              {/* Text */}
              <div className="absolute bottom-0 p-4 z-10">
                <h3 className="text-lg font-bold text-white drop-shadow-md">{item.title}</h3>
                <p className="text-sm text-cyan-200 mt-1">{item.caption}</p>
              </div>
            
              {/* Video Label */}
              {item.video && (
                <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-cyan-600/80 text-white font-semibold shadow-md animate-pulse">
                  🎬 Video
                </div>
              )}
            </motion.div>            
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={prev}
              className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-200 hover:bg-cyan-700/20 transition-all backdrop-blur-sm"
            >
              ← Previous
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={next}
              className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-200 hover:bg-cyan-700/20 transition-all backdrop-blur-sm"
            >
              Next →
            </motion.button>
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
