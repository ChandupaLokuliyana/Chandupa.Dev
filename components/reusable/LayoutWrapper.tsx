'use client'

import R3FCanvas from '@/components/reusable/R3FCanvas'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#0f172a] overflow-hidden text-white">
      {/* Global background particle canvas */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <R3FCanvas />
      </div>

      {/* Actual Page Content */}
      {children}
    </div>
  )
}
