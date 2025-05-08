'use client'

import ProjectCard from '../reusable/ProjectCard'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const R3FCanvas = dynamic(() => import('../reusable/R3FCanvas'), { ssr: false })

const projects = [
  {
    title: 'Room Booking App',
    description: [
      'Built with Django & PostgreSQL',
      'Includes admin dashboard, email alerts, SEO, chatbot (Wit.AI)',
    ],
    tech: ['Django', 'PostgreSQL', 'Wit.AI', 'Bootstrap'],
    image: '/projects/room-booking.jpg',
    preview: '/projects/room-booking-preview.gif',
    liveUrl: 'https://room-booking.chandupa.dev',
    githubUrl: 'https://github.com/Lokuliyana/room-booking-app',
  },
  {
    title: 'Virtual Institute Platform',
    description: [
      'Built for Chadlop startup using Next.js + Express',
      'Video player, JWT auth, student class booking system',
    ],
    tech: ['Next.js', 'Express.js', 'MySQL', 'JWT'],
    image: '/projects/virtual-institute.jpg',
    preview: '/projects/virtual-institute-preview.gif',
    liveUrl: 'https://virtual.chadlop.com',
    githubUrl: 'https://github.com/Lokuliyana/virtual-institute',
  },
  {
    title: 'Secure File Transfer System',
    description: [
      'Enterprise-level secure file sharing web app',
      'Supports OTP login, JWT, AES & RSA encryption, integrity checks',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'RSA', 'AES', 'OTP'],
    image: '/projects/secure-transfer.jpg',
    preview: '/projects/secure-transfer-preview.gif',
    liveUrl: 'https://secure.chadlop.com',
    githubUrl: 'https://github.com/Lokuliyana/secure-file-transfer',
  },
  {
    title: 'Movie Recommendation App',
    description: [
      'RESTful API backend with GoLang',
      'Movie search chatbot + recommendation engine',
    ],
    tech: ['GoLang', 'MongoDB', 'React', 'Chatbot'],
    image: '/projects/movie-app.jpg',
    preview: '/projects/movie-app-preview.gif',
    liveUrl: 'https://movies.chandupa.dev',
    githubUrl: 'https://github.com/Lokuliyana/movie-recommendation-app',
  },
  {
    title: 'Tic Tac Toe – Lua Version',
    description: [
      'Classic game implemented in Lua',
      'CLI-based logic with win detection and replay loop',
    ],
    tech: ['Lua'],
    image: '/projects/tic-tac-toe.jpg',
    preview: '/projects/tic-tac-toe-preview.gif',
    liveUrl: 'https://tic-tac.chandupa.dev',
    githubUrl: 'https://github.com/Lokuliyana/tic-tac-toe-lua',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#0f172a] text-white relative overflow-hidden">
      <R3FCanvas />
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 drop-shadow-[0_0_10px_cyan]"
      >
        🚀 Projects – My Living Tech Gallery
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </section>
  )
}
