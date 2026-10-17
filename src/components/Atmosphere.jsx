import { useEffect, useRef } from 'react'

// Drifting red clouds + fog layers (CSS) and rising ember particles (canvas).
export default function Atmosphere() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let w = 0
    let h = 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const count = reduce ? 0 : Math.min(70, Math.floor(window.innerWidth / 18))
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      s: Math.random() * 0.5 + 0.15,
      d: Math.random() * Math.PI * 2,
      a: Math.random() * 0.5 + 0.2,
    }))

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        p.y -= p.s
        p.d += 0.01
        p.x += Math.sin(p.d) * 0.35
        if (p.y < -10) {
          p.y = h + 10
          p.x = Math.random() * w
        }
        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 70, 60, ${p.a})`
        ctx.shadowColor = 'rgba(255, 40, 40, 0.9)'
        ctx.shadowBlur = 8
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="cloud cloud-a" />
      <div className="cloud cloud-b" />
      <div className="cloud cloud-c" />
      <div className="fog fog-a" />
      <div className="fog fog-b" />
      <canvas ref={canvasRef} className="embers" />
      <div className="vignette" />
    </div>
  )
}
