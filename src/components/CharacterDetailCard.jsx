import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CharacterImage } from './Character'

export default function CharacterDetailCard({ data, index, total, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
  }, [data.id])

  return (
    <motion.aside
      className="detail"
      style={{ '--accent': data.accent }}
      role="dialog"
      aria-modal="false"
      aria-label={`${data.name} details`}
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
    >
      <div className="detail-top">
        <span className="detail-count">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <div className="detail-nav">
          <button type="button" onClick={onPrev} aria-label="Previous member">‹</button>
          <button type="button" onClick={onNext} aria-label="Next member">›</button>
          <button type="button" ref={closeRef} onClick={onClose} aria-label="Close details" className="close">
            ✕
          </button>
        </div>
      </div>

      <motion.div
        key={data.id}
        className="detail-body"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="detail-portrait">
          <CharacterImage id={data.id} name={data.name} accent={data.accent} />
        </div>

        <p className="eyebrow">{data.title}</p>
        <h2>{data.name}</h2>
        <p className="form">{data.form}</p>

        <dl className="facts">
          <div><dt>Alias</dt><dd>{data.alias}</dd></div>
          <div><dt>Village</dt><dd>{data.village}</dd></div>
          <div><dt>Role in Akatsuki</dt><dd>{data.role}</dd></div>
        </dl>

        <h3>Abilities</h3>
        <ul className="chips">
          {data.abilities.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <h3>Personality</h3>
        <p>{data.personality}</p>

        <h3>Backstory</h3>
        <p>{data.backstory}</p>
      </motion.div>
    </motion.aside>
  )
}
