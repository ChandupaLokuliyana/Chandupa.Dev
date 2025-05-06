'use client'

import dynamic from 'next/dynamic'

const AnimatedAvatar = dynamic(() => import('./AnimatedAvatar'), {
  ssr: false,
  loading: () => <div className="w-[150px] h-[150px] bg-cyan-500/10 rounded-full animate-pulse" />
})

export default AnimatedAvatar
