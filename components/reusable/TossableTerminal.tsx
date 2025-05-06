/*
'use client'

import { useRef, useEffect, useState } from 'react'
import AnimatedAvatar from './AnimatedAvatar'

export default function TossableTerminal() {
  const boxRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  // 🔁 Toss animation with velocity decay & bounds
  const animate = () => {
    setPosition((prev) => {
      const container = containerRef.current
      const box = boxRef.current
      if (!container || !box) return prev

      let nextX = prev.x + velocity.current.x
      let nextY = prev.y + velocity.current.y

      const maxX = container.offsetWidth - box.offsetWidth
      const maxY = container.offsetHeight - box.offsetHeight

      if (nextX < 0 || nextX > maxX) velocity.current.x *= -0.6
      if (nextY < 0 || nextY > maxY) velocity.current.y *= -0.6

      nextX = Math.max(0, Math.min(nextX, maxX))
      nextY = Math.max(0, Math.min(nextY, maxY))

      velocity.current.x *= 0.93
      velocity.current.y *= 0.93

      if (Math.abs(velocity.current.x) > 0.5 || Math.abs(velocity.current.y) > 0.5) {
        animationRef.current = requestAnimationFrame(animate)
      }

      return { x: nextX, y: nextY }
    })
  }

  // 🖱️ Drag logic
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    const startX = e.clientX
    const startY = e.clientY

    const onMouseMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startX
      const dy = ev.clientY - startY
      setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
      velocity.current = { x: dx, y: dy }
    }

    const onMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      animationRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  useEffect(() => {
    return () => cancelAnimationFrame(animationRef.current!)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md h-[340px] md:h-[360px] overflow-hidden"
    >
      <div
        ref={boxRef}
        onMouseDown={handleMouseDown}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        className="absolute bg-white/5 border border-cyan-400 backdrop-blur-md rounded-xl p-5 shadow-lg shadow-cyan-500/30 cursor-grab active:cursor-grabbing w-[320px] h-[240px] transition-transform duration-200 animate-float"
      >
        
        <div className="font-mono text-green-400 text-sm space-y-2 pb-4">
          <p>~$ npm run dev</p>
          <p>
            Starting server on <span className="text-cyan-300">localhost:3000</span>...
          </p>
          <p className="text-white">Server started ✔️</p>
        </div>

        
        <div className="absolute bottom-[-36px] left-1/2 -translate-x-1/2 scale-90 drop-shadow-[0_4px_12px_rgba(0,255,255,0.4)]">
          <AnimatedAvatar />
        </div>
      </div>
    </div>
  )
}

*/