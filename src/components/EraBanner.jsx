import { motion, AnimatePresence } from 'framer-motion'

export default function EraBanner({ currentEra }) {
  if (!currentEra) return null

  return (
    <div className="era-banner-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentEra.id}
          className="era-banner-card"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          style={{ '--theme-color': currentEra.themeColor }}
        >
          <div className="era-banner-header">
            <span className="era-banner-period">{currentEra.period}</span>
            <h2 className="era-banner-title">{currentEra.name}</h2>
          </div>
          <p className="era-banner-desc">{currentEra.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}