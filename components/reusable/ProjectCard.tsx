'use client'
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

type Project = {
  title: string
  description: string[]
  tech: string[]
  image: string
  preview?: string
  liveUrl: string
  githubUrl: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      })
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="bg-glass rounded-xl p-5 backdrop-blur-sm border border-cyan-300/20 hover:shadow-cyan-500/30 transition-all duration-300 group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 📸 Image + Preview */}
      <div className="aspect-video overflow-hidden rounded-md mb-4 relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />

        {project.preview && (
          <Image
            src={project.preview}
            alt={`${project.title} Preview`}
            fill
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>

      <h3 className="text-xl font-semibold tracking-wide text-white mb-2">
        {project.title}
      </h3>

      <ul className="text-sm text-gray-300 list-disc pl-5 mb-4 space-y-1">
        {project.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-cyan-900/30 px-3 py-1 rounded-full animate-popIn hover:scale-105 transition"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-black font-semibold hover:scale-105 transition-transform flex items-center gap-2"
        >
          More <FaExternalLinkAlt className="icon transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white font-semibold hover:scale-105 transition-transform flex items-center gap-2"
        >
          Code <FaGithub className="icon transition-transform group-hover:rotate-6" />
        </a>
      </div>
    </motion.div>
  )
}
