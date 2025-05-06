'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ResumeSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="resume" className="bg-[#0e1b2c] py-24 px-6 md:px-12 text-white">
      <h2 className="text-3xl font-bold text-cyan-300 text-center mb-12">
        📜 Resume & Key Qualifications
      </h2>

      <div className="max-w-3xl mx-auto space-y-10">
        {/* Resume Capsule */}
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
          className="bg-glass border border-cyan-400 rounded-xl p-6 shadow-md transition-all flex items-center gap-5"
        >
          <div className="text-5xl">📄</div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Chandupa_Poorna_Lokuliyana_Resume.pdf
            </h3>
            <p className="text-sm text-gray-400">Last updated: April 2025</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="relative overflow-hidden px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg transition-all group"
            onClick={() => window.open('/Chandupa_Resume.pdf', '_blank')}
          >
            <span>🔽 Download Resume</span>
            <span className="absolute left-0 top-0 w-0 h-full bg-white/20 group-hover:w-full transition-all duration-500 z-0"></span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative overflow-hidden px-6 py-2 bg-cyan-800/40 border border-cyan-500 text-white rounded-lg transition-all hover:bg-cyan-700"
          >
            {isOpen ? '❌ Close Viewer' : '👁️ View Inline'}
          </button>
        </div>

        {/* Inline Viewer */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-black/90 backdrop-blur-lg p-4 rounded shadow-lg mt-6"
          >
            <iframe
              src="/Chandupa_Resume.pdf"
              className="w-full h-[600px] border-none rounded"
            />
          </motion.div>
        )}

        {/* Summary List */}
        <div className="mt-10">
          <h4 className="text-xl font-semibold text-cyan-300 mb-4">
            ⚡ Key Highlights
          </h4>
          <ul className="list-disc text-sm text-white/80 pl-5 space-y-1">
            <li>🎓 BSc in Computer Science (Second Upper)</li>
            <li>🧠 3+ Real-world projects (Next.js, Django, GoLang)</li>
            <li>🎤 15+ Debate Championships & public speaking awards</li>
            <li>🧾 Certified in HRM, Digital Marketing, SEO</li>
            <li>🛠️ Full-stack dev experience with JWT, MySQL, Wit.AI</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
