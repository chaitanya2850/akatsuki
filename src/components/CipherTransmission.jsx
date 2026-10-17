import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CIPHER_SNIPPETS = [
  '雨隠れの里 — SIGNAL INTERCEPT [AMEGAKURE_NODE_09]',
  'GEDO_MAZO_SEAL_PROGRESS: 88.4%',
  'ENCRYPTED_KEY: 朱 · 青 · 白 · 波 · 闘 · 空 · 南 · 北 · 三 · 玉',
  'TRANSMISSION_SOURCE: GOD_REALM_PAIN',
  'DECODING_INTEL: JINCHŪRIKI_LOCATIONS_FOUND',
  'PRIORITY_ALPHA: CARRY OUT THE EYE OF THE MOON PLAN'
]

export default function CipherTransmission({ isActive, onClose }) {
  const [streamIndex, setStreamIndex] = useState(0)

  useEffect(() => {
    if (!isActive) return
    const interval = setInterval(() => {
      setStreamIndex((prev) => (prev + 1) % CIPHER_SNIPPETS.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [isActive])

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="cipher-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Silhouette Layer */}
          <div className="cipher-bg-silhouette">
            <img
              src="/silhouette/akatsuki_silhouette.png"
              alt="Akatsuki Silhouette"
              className="cipher-silhouette-img"
            />
            <div className="cipher-vignette" />
          </div>

          {/* CRT Scanline Grid */}
          <div className="cipher-scanline" />

          {/* Cipher HUD Header */}
          <div className="cipher-hud">
            <div className="cipher-badge">
              <span className="live-dot" />
              <span>INTERCEPTED TRANSMISSION</span>
            </div>
            <p className="cipher-text-stream">{CIPHER_SNIPPETS[streamIndex]}</p>
            <button type="button" className="cipher-close-btn" onClick={onClose}>
              TERMINATE LINK [ESC]
            </button>
          </div>

          {/* Background Cipher Watermarks */}
          <div className="cipher-kanji-watermark" aria-hidden="true">
            <span>暁</span>
            <span>神</span>
            <span>雨</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}