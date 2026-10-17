import { useEffect, useRef, useState } from 'react'
import { AUDIO_URL, AUDIO_VOLUME } from '../config/assets'

// Background music toggle. Uses the audio file you supply (see config/assets.js).
// Browsers block autoplay, so music starts on the first click/key press, or via the button.
export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)
  const userPaused = useRef(false)

  const play = async () => {
    const a = audioRef.current
    if (!a || missing) return
    try {
      await a.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  useEffect(() => {
    const a = audioRef.current
    a.volume = AUDIO_VOLUME
    const start = () => {
      if (!userPaused.current) play()
      window.removeEventListener('pointerdown', start)
      window.removeEventListener('keydown', start)
    }
    window.addEventListener('pointerdown', start)
    window.addEventListener('keydown', start)
    return () => {
      window.removeEventListener('pointerdown', start)
      window.removeEventListener('keydown', start)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [missing])

  const toggle = (e) => {
    e.stopPropagation()
    const a = audioRef.current
    if (missing) return
    if (a.paused) {
      userPaused.current = false
      play()
    } else {
      userPaused.current = true
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="music">
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        loop
        preload="auto"
        onError={() => setMissing(true)}
      />
      <button
        type="button"
        className={`music-btn ${playing ? 'on' : ''}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        title={missing ? 'No audio file found' : undefined}
      >
        <span className="bars" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
        <span>{missing ? 'No track' : playing ? 'Music on' : 'Music off'}</span>
      </button>
      {missing && (
        <p className="music-hint" role="status">
          Add your audio file at <code>public/audio/theme.mp3</code>
        </p>
      )}
    </div>
  )
}
