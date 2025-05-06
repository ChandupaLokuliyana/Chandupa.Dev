'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import dynamic from 'next/dynamic'
import contactAvatar from '@/public/lottie/Contact.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name as keyof typeof formData]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, message } = formData
  
    if (!name || !email.includes('@') || !message) {
      setError(true)
      return
    }
  
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
  
      if (!res.ok) throw new Error('Failed to send email')
  
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setError(true)
    }
  }
  

  return (
    <section id="contact" className="relative bg-[#0e1b2c] py-24 px-6 md:px-12 text-white overflow-hidden">
      <h2 className="text-3xl font-bold text-cyan-300 text-center mb-2">📬 Let’s Connect</h2>
      <p className="text-center text-white/70 italic mb-12 max-w-xl mx-auto">
        “Every great connection starts with a simple hello. Drop your thoughts below and let’s create something magical.”
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Lottie Avatar + Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-lg font-medium drop-shadow-glow px-4"
            >
              “Hey there! Let’s build something amazing together.”
            </motion.p>

            <div className="filter hue-rotate-300 brightness-150 contrast-150 saturate-150">
              <Lottie animationData={contactAvatar} loop />
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#101c2c]/60 backdrop-blur-md p-8 rounded-xl shadow-lg border border-cyan-500/20 space-y-6"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-cyan-300 text-lg"
            >
              🚀 Your message is flying to Chandupa!
            </motion.div>
          ) : (
            <>
              {(['name', 'email'] as Array<keyof typeof formData>).map((field) => (
                <div key={field} className="relative">
                  <motion.input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    animate={error && !formData[field] ? { x: [-4, 4, -4, 0] } : {}}
                    placeholder={field === 'email' ? 'Your Email' : 'Your Name'}
                    className={`peer w-full bg-transparent border ${
                      error && !formData[field] ? 'border-red-500' : 'border-cyan-400/30'
                    } text-white px-4 pt-6 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-transparent`}
                  />
                  <label className="absolute left-3 top-2 text-sm text-cyan-300 transition-all scale-90 origin-left peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:scale-90">
                    {field === 'email' ? 'Email' : 'Name'}
                  </label>
                </div>
              ))}

              {/* Message */}
              <div className="relative">
                <motion.textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  animate={error && !formData.message ? { x: [-4, 4, -4, 0] } : {}}
                  placeholder="Your Message"
                  className={`peer w-full bg-transparent border ${
                    error && !formData.message ? 'border-red-500' : 'border-cyan-400/30'
                  } text-white px-4 pt-6 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-transparent`}
                />
                <label className="absolute left-3 top-2 text-sm text-cyan-300 transition-all scale-90 origin-left peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:scale-90">
                  Message
                </label>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-2 rounded-md shadow-lg transition"
              >
                ✈️ Send Message
              </motion.button>
            </>
          )}
        </motion.form>
      </div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 flex flex-col items-center space-y-4"
      >
        <p className="text-white/80 text-center">Or connect via:</p>
        <div className="flex space-x-6 text-3xl text-cyan-400">
          <a href="mailto:chandupa@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:text-white transition" />
          </a>
          <a href="https://github.com/chandupadev" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/chandupa" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white transition" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
