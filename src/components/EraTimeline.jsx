import { motion } from 'framer-motion'
import { ERAS } from '../data/eras'

export default function EraTimeline({ activeEra, onSelectEra }) {
  return (
    <div className="era-timeline-container">
      <div className="era-timeline-track">
        {ERAS.map((era) => {
          const isActive = activeEra === era.id
          return (
            <button
              key={era.id}
              type="button"
              className={`era-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectEra(era.id)}
            >
              <span className="era-period">{era.period}</span>
              <span className="era-name">{era.name}</span>
              {isActive && (
                <motion.div
                  className="era-active-glow"
                  layoutId="eraGlow"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}