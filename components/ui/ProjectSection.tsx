'use client'

import ProjectCard from '../reusable/ProjectCard'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const R3FCanvas = dynamic(() => import('../reusable/R3FCanvas'), { ssr: false })

const projects = [
  {
    title: 'Room Booking App',
    description: ['Built with Django + PostgreSQL', 'Admin, email alerts, live chat'],
    tech: ['Django', 'Wit.AI', 'PostgreSQL', 'Bootstrap'],
    image: '/projects/room-booking.jpg',           // ✅ Store under public/projects/
    preview: '/projects/room-booking-preview.gif', // optional
    liveUrl: 'https://room-booking.example.com',
    githubUrl: 'https://github.com/you/room-booking',
  },
  {
    title: 'Virtual Institute',
    description: ['Built with Next.js + Express', 'JWT, Video player, class booking'],
    tech: ['Next.js', 'Express.js', 'MySQL', 'JWT'],
    image: '/projects/virtual-institute.jpg',
    preview: '/projects/room-booking-preview.gif',
    liveUrl: 'https://virtual-institute.example.com',
    githubUrl: 'https://github.com/you/virtual-institute',
  },
  {
    title: 'Movie Recommendation App',
    description: ['Built with GoLang REST APIs', 'Chatbot + Movie search'],
    tech: ['GoLang', 'MongoDB', 'React', 'Chatbot'],
    image: '/projects/movie-app.jpg',
    preview: '/projects/room-booking-preview.gif',
    liveUrl: 'https://movie-app.example.com',
    githubUrl: 'https://github.com/you/movie-app',
  },
  {
    title: 'AI Chat Engine',
    description: ['Custom AI fine-tuning', 'Multi-thread chat and voice input'],
    tech: ['Python', 'HuggingFace', 'Socket.IO', 'SpeechRecognition'],
    image: '/projects/ai-chat.jpg',
    preview: '/projects/room-booking-preview.gif',
    liveUrl: 'https://ai-chat.example.com',
    githubUrl: 'https://github.com/you/ai-chat',
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
