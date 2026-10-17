import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { characters } from '../data/characters'
import Character from './Character'
import CharacterDetailCard from './CharacterDetailCard'
import Atmosphere from './Atmosphere'
import MusicPlayer from './MusicPlayer'
import LoreMapModal from './LoreMapModal'
import { ERAS } from '../data/eras'
import EraTimeline from './EraTimeline'
import EraBanner from './EraBanner'
import CipherTransmission from './CipherTransmission'

export default function AkatsukiShowcase() {
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const [rosterOpen, setRosterOpen] = useState(false)
  const [loreOpen, setLoreOpen] = useState(false)
  const [activeEra, setActiveEra] = useState('all')
  const [bannerVisible, setBannerVisible] = useState(true)
  const [cipherActive, setCipherActive] = useState(false)
  const refs = useRef({})

  // Era Filtering Logic
  const currentEraData = ERAS.find((e) => e.id === activeEra)
  const filteredCharacters = currentEraData?.members
    ? characters.filter((c) => currentEraData.members.includes(c.id))
    : characters

  const total = filteredCharacters.length
  const activeId = hoveredId ?? selectedId
  const activeIndex = filteredCharacters.findIndex((c) => c.id === activeId)
  const selectedIndex = filteredCharacters.findIndex((c) => c.id === selectedId)
  const selected = selectedIndex >= 0 ? filteredCharacters[selectedIndex] : null
  const hovered = filteredCharacters.find((c) => c.id === hoveredId)

  // Smart Era Change Handler: Keeps era active while toggling banner if same era is clicked again
  const handleEraChange = (eraId) => {
    if (activeEra === eraId) {
      setBannerVisible((prev) => !prev)
    } else {
      setActiveEra(eraId)
      setBannerVisible(true)
      setSelectedId(null)
      setHoveredId(null)
    }
  }

  const select = useCallback((id) => {
    setSelectedId((cur) => (cur === id ? cur : id))
    setRosterOpen(false)
    setLoreOpen(false)
  }, [])

  const step = useCallback(
    (dir) => {
      const i = selectedIndex < 0 ? (dir > 0 ? -1 : 0) : selectedIndex
      const next = filteredCharacters[(i + dir + total) % total]
      if (next) {
        setSelectedId(next.id)
        refs.current[next.id]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    },
    [selectedIndex, filteredCharacters, total]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (cipherActive) setCipherActive(false)
        else if (rosterOpen) setRosterOpen(false)
        else if (loreOpen) setLoreOpen(false)
        else setSelectedId(null)
      } else if (e.key === 'ArrowRight') {
        const focused = filteredCharacters.findIndex((c) => refs.current[c.id] === document.activeElement)
        if (focused >= 0) {
          e.preventDefault()
          refs.current[filteredCharacters[(focused + 1) % total].id]?.focus()
        } else if (selected) step(1)
      } else if (e.key === 'ArrowLeft') {
        const focused = filteredCharacters.findIndex((c) => refs.current[c.id] === document.activeElement)
        if (focused >= 0) {
          e.preventDefault()
          refs.current[filteredCharacters[(focused - 1 + total) % total].id]?.focus()
        } else if (selected) step(-1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cipherActive, rosterOpen, loreOpen, selected, step, total, filteredCharacters])

  const counterIndex = activeIndex >= 0 ? activeIndex + 1 : null

  return (
    <div className={`showcase ${selected ? 'has-detail' : ''} ${cipherActive ? 'cipher-mode-active' : ''}`}>
      <Atmosphere themeColor={currentEraData?.themeColor} />

      {/* Main Full-Roster Background Image Layer */}
      <div className="main-bg-container" aria-hidden="true">
        <img
          src="/characters/akatsuki_all.png"
          alt=""
          className="main-bg-img"
        />
        <div className="main-bg-overlay" />
      </div>

      {/* Secret Cipher Transmission Layer */}
      <CipherTransmission isActive={cipherActive} onClose={() => setCipherActive(false)} />

      <header className="header">
        <div className="brand">
          <span className="logo" aria-hidden="true">
            <img src="/akatsuki.svg" alt="" width="34" height="34" />
          </span>
          <div>
            <h1>AKATSUKI</h1>
            <p>The Shinobi Who Defied the World</p>
          </div>
        </div>

        <div className="header-right">
          <span className="counter" aria-live="polite">
            <b>{counterIndex ? String(counterIndex).padStart(2, '0') : '––'}</b>
            <i>/</i>
            {String(total).padStart(2, '0')}
          </span>

          <button
            type="button"
            className="nav-btn"
            onClick={() => setRosterOpen((v) => !v)}
            aria-expanded={rosterOpen}
            aria-controls="roster"
          >
            All Members
          </button>

          <button
            type="button"
            className="nav-btn"
            onClick={() => setLoreOpen(true)}
          >
            Lore
          </button>

          {/* Cipher Mode Toggle */}
          <button
            type="button"
            className={`nav-btn ${cipherActive ? 'active' : ''}`}
            onClick={() => setCipherActive((v) => !v)}
          >
            {cipherActive ? 'Mode Active' : 'Akatsuki Mode'}
          </button>

          <MusicPlayer />
        </div>
      </header>

      {/* Timeline Bar */}
      <EraTimeline activeEra={activeEra} onSelectEra={handleEraChange} />

      {/* Era Banner */}
      <AnimatePresence>
        {activeEra !== 'all' && bannerVisible && (
          <EraBanner currentEra={currentEraData} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {rosterOpen && (
          <motion.nav
            id="roster"
            className="roster"
            aria-label="All Akatsuki members"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <ul>
              {filteredCharacters.map((c, i) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => {
                      select(c.id)
                      refs.current[c.id]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
                    }}
                    className={c.id === selectedId ? 'active' : ''}
                    style={{ '--accent': c.accent }}
                  >
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{c.form}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="stage" aria-label="Akatsuki members">
        <div className={`lineup ${hoveredId ? 'any-hover' : ''}`}>
          {filteredCharacters.map((c, i) => (
            <Character
              key={c.id}
              data={c}
              index={i}
              total={total}
              hovered={hoveredId === c.id}
              selected={selectedId === c.id}
              anyHovered={!!hoveredId}
              anySelected={!!selectedId}
              onHover={setHoveredId}
              onSelect={select}
              buttonRef={(el) => (refs.current[c.id] = el)}
            />
          ))}
        </div>

        <p className="hint">
          {hovered
            ? `${hovered.form} — click for full profile`
            : 'Hover to preview · Click to open a profile · Use ← → keys'}
        </p>
      </main>

      <AnimatePresence>
        {selected && (
          <CharacterDetailCard
            key="detail"
            data={selected}
            index={selectedIndex}
            total={total}
            onClose={() => setSelectedId(null)}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loreOpen && (
          <LoreMapModal
            isOpen={loreOpen}
            onClose={() => setLoreOpen(false)}
            onSelectMember={(memberId) => {
              select(memberId)
              refs.current[memberId]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}