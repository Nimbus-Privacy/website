'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let time = 0
    let animationId: number

    const animate = () => {
      time += 0.005

      ctx.fillStyle = '#021427'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const lightX = Math.sin(time) * canvas.width * 0.3 + canvas.width * 0.5
      const lightY = Math.cos(time * 0.7) * canvas.height * 0.2 + canvas.height * 0.3

      const lightGradient1 = ctx.createRadialGradient(
        lightX,
        lightY,
        0,
        lightX,
        lightY,
        canvas.width * 0.2
      )
      lightGradient1.addColorStop(0, 'rgba(45, 49, 149, 0.8)')
      lightGradient1.addColorStop(0.3, 'rgba(45, 49, 149, 0.4)')
      lightGradient1.addColorStop(1, 'rgba(45, 49, 149, 0)')
      
      ctx.fillStyle = lightGradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const lightX2 = Math.sin(time * 0.8 + Math.PI) * canvas.width * 0.3 + canvas.width * 0.5
      const lightY2 = Math.cos(time * 0.6 + Math.PI) * canvas.height * 0.2 + canvas.height * 0.7

      const lightGradient2 = ctx.createRadialGradient(
        lightX2,
        lightY2,
        0,
        lightX2,
        lightY2,
        canvas.width * 0.18
      )
      lightGradient2.addColorStop(0, 'rgba(45, 49, 149, 0.6)')
      lightGradient2.addColorStop(0.3, 'rgba(45, 49, 149, 0.2)')
      lightGradient2.addColorStop(1, 'rgba(45, 49, 149, 0)')
      
      ctx.fillStyle = lightGradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const lightX3 = Math.sin(time * 0.5 + Math.PI/3) * canvas.width * 0.25 + canvas.width * 0.3
      const lightY3 = Math.cos(time * 0.9 + Math.PI/2) * canvas.height * 0.15 + canvas.height * 0.5

      const lightGradient3 = ctx.createRadialGradient(
        lightX3,
        lightY3,
        0,
        lightX3,
        lightY3,
        canvas.width * 0.15
      )
      lightGradient3.addColorStop(0, 'rgba(45, 49, 149, 0.5)')
      lightGradient3.addColorStop(0.3, 'rgba(45, 49, 149, 0.15)')
      lightGradient3.addColorStop(1, 'rgba(45, 49, 149, 0)')
      
      ctx.fillStyle = lightGradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.3,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      )
      vignetteGradient.addColorStop(0, 'rgba(2, 20, 39, 0)')
      vignetteGradient.addColorStop(1, 'rgba(2, 20, 39, 0.3)')
      
      ctx.fillStyle = vignetteGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full', className)}
      style={{ background: '#021427' }}
    />
  )
}