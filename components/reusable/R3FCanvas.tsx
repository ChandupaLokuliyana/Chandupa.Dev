'use client'

import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function R3FCanvas() {
return (
<Canvas
style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
camera={{ position: [0, 0, 5], fov: 75 }}
>
<ambientLight intensity={0.3} />
<pointLight position={[10, 10, 10]} intensity={0.8} />
<Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
</Canvas>
)
}