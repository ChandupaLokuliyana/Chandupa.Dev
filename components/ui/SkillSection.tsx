'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiNextdotjs,
  SiReact,
  SiDjango,
  SiNodedotjs,
  SiGoland,
  SiMysql,
  SiGit,
  SiJsonwebtokens,
} from 'react-icons/si'
import {
  FaComments,
  FaPuzzlePiece,
  FaUserTie,
  FaBullhorn,
  FaUsers,
  FaChalkboardTeacher,
} from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { IconType } from 'react-icons'
import dynamic from 'next/dynamic'

const R3FCanvas = dynamic(() => import('../reusable/R3FCanvas'), { ssr: false })

type SkillItem = {
  name: string
  icon: IconType
  tooltip: string
}

const techSkills: SkillItem[] = [
  { icon: SiNextdotjs, name: 'Next.js', tooltip: 'Used in 4 projects' },
  { icon: SiReact, name: 'React', tooltip: 'Frontend base framework' },
  { icon: SiDjango, name: 'Django', tooltip: '3+ projects with Django' },
  { icon: SiNodedotjs, name: 'Node.js', tooltip: 'Built REST APIs & auth' },
  { icon: SiMysql, name: 'MySQL', tooltip: 'Used in production apps' },
  { icon: SiJsonwebtokens, name: 'JWT', tooltip: 'Token-based auth' },
  { icon: SiGit, name: 'Git', tooltip: 'Version control for every project' },
]

const softSkills: SkillItem[] = [
  { name: 'Communication', icon: FaComments, tooltip: 'Public speaking & team sync' },
  { name: 'Critical Thinking', icon: GiBrain, tooltip: 'Strategic problem solving' },
  { name: 'Problem Solving', icon: FaPuzzlePiece, tooltip: 'Debugging & innovation' },
  { name: 'HRM', icon: FaUserTie, tooltip: 'Certified in Human Resource Management' },
  { name: 'Marketing', icon: FaBullhorn, tooltip: 'Promoting digital solutions' },
  { name: 'Teamwork', icon: FaUsers, tooltip: 'Collaborative project execution' },
  { name: 'Leadership', icon: FaChalkboardTeacher, tooltip: 'Leading tech & debate teams' },
]

const skillGroups = {
  Frontend: [
    { name: 'Next.js', level: 90, icon: SiNextdotjs },
    { name: 'React', level: 85, icon: SiReact },
  ],
  Backend: [
    { name: 'Django', level: 80, icon: SiDjango },
    { name: 'Node.js', level: 75, icon: SiNodedotjs },
    { name: 'GoLang', level: 70, icon: SiGoland },
  ],
  Tools: [
    { name: 'Git', level: 85, icon: SiGit },
    { name: 'MySQL', level: 80, icon: SiMysql },
    { name: 'JWT', level: 75, icon: SiJsonwebtokens },
  ],
}

export default function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section id="skills" className="py-28 px-6 md:px-12 bg-[#0e1b2c]/80 backdrop-blur-md text-white relative z-10 overflow-hidden">
      <R3FCanvas />
      <h2 className="text-3xl text-center font-bold text-white mb-14 drop-shadow-[0_0_8px_cyan]">
        🧠 Skills – My Interactive Code DNA
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* LEFT COLUMN – Tech + Soft Skills */}
        <div className="flex flex-col items-center gap-10 w-full">
          {/* TECH SKILLS */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-cyan-300 text-center mb-2">🛠 Technical Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              <AnimatePresence>
                {techSkills.map(({ icon: Icon, name, tooltip }) => (
                  <motion.div
                    key={name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="relative group bg-[#101c2c] p-4 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all animate-float cursor-help text-center"
                  >
                    <Icon className="text-3xl mx-auto text-white group-hover:text-cyan-400 transition" />
                    <p className="mt-2 text-xs text-cyan-300 font-medium">{name}</p>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm text-xs px-3 py-1 rounded-md text-cyan-200 border border-cyan-400 shadow-md z-50"
                    >
                      {tooltip}
                    </motion.span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Divider */}
          <div className="my-2 border-t border-cyan-800 w-full" />

          {/* SOFT SKILLS */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-cyan-300 text-center mb-2">💡 Soft Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              <AnimatePresence>
                {softSkills.map(({ icon: Icon, name, tooltip }) => (
                  <motion.div
                    key={name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="relative group bg-[#101c2c] p-4 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all animate-float cursor-help text-center"
                  >
                    <Icon className="text-3xl mx-auto text-white group-hover:text-cyan-400 transition" />
                    <p className="mt-2 text-xs text-cyan-300 font-medium">{name}</p>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm text-xs px-3 py-1 rounded-md text-cyan-200 border border-cyan-400 shadow-md z-50"
                    >
                      {tooltip}
                    </motion.span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN – Skill Bars */}
        <div ref={ref} className="space-y-10">
          {Object.entries(skillGroups).map(([group, skills], i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-cyan-200 mb-3 border-b border-cyan-500 pb-1">
                {group}
              </h3>
              <div className="space-y-5">
                {skills.map(({ name, level, icon: Icon }, j) => (
                  <div key={j}>
                    <div className="flex items-center gap-3 mb-1">
                      <Icon className="text-lg text-cyan-300" />
                      <span className="text-sm font-medium">{name}</span>
                    </div>
                    <div className="bg-gray-800 rounded-full h-3 overflow-hidden relative">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${level}%` : '0%' }}
                        transition={{ duration: 1.2, delay: j * 0.1 }}
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + j * 0.1 }}
                        className="absolute right-0 top-[-6px] w-4 h-4 bg-cyan-300 rounded-full blur-md animate-ping"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
