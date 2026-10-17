import { motion } from 'framer-motion'
import { hideouts } from '../data/hideouts'

export default function LoreMapModal({ isOpen, onClose, onSelectMember }) {
  if (!isOpen) return null

  return (
    <motion.div
      className="lore-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lore-modal-content"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lore-header">
          <h2>Shinobi World Hideouts</h2>
          <button type="button" onClick={onClose} className="close-btn" aria-label="Close lore map">✕</button>
        </div>

        <div className="lore-body">
          <div className="map-container">
            {/* Map Image from /public/maps/shinobi_world_map.png */}
            <img 
              src="/maps/shinobi_world_map.png" 
              alt="Shinobi World Map" 
              className="map-image" 
            />

            {/* Interactive Pins overlaid on top */}
            {hideouts.map((hideout) => (
              <div
                key={hideout.id}
                className="map-pin"
                style={{ left: `${hideout.coords.x}%`, top: `${hideout.coords.y}%` }}
                onClick={() => hideout.members[0] && onSelectMember?.(hideout.members[0])}
              >
                <span className="pin-dot" />
                <div className="pin-tooltip">
                  <h4>{hideout.name}</h4>
                  <p>{hideout.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}