'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import avatarAnimation from '@/public/lottie/Animation - 1746417621387.json'

export default function AnimatedAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-32 md:w-40 pointer-events-none z-10"
      style={{ mixBlendMode: 'lighten' }}
    >
      <Lottie
        animationData={avatarAnimation}
        loop
        autoplay
        className="w-full h-full"
      />
    </motion.div>
  )
}
