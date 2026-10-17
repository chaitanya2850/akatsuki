import { useEffect, useState } from 'react'
import Silhouette from './Silhouette'
import { getImageUrl } from '../config/assets'

// Image with loading shimmer and graceful fallback to a silhouette.
export function CharacterImage({ id, name, accent, className = '' }) {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    setStatus('loading')
  }, [id])

  return (
    <div className={`art ${className} art-${status}`}>
      {status !== 'loaded' && (
        <div className="art-fallback">
          <Silhouette color={accent} />
          {status === 'loading' && <span className="shimmer" />}
        </div>
      )}
      <img
        src={getImageUrl(id)}
        alt={status === 'loaded' ? name : ''}
        draggable="false"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        style={{ opacity: status === 'loaded' ? 1 : 0 }}
      />
    </div>
  )
}

export default function Character({
  data,
  index,
  total,
  hovered,
  selected,
  anyHovered,
  anySelected,
  onHover,
  onSelect,
  buttonRef,
}) {
  const state = [
    hovered ? 'is-hovered' : '',
    selected ? 'is-selected' : '',
    (anyHovered && !hovered) || (anySelected && !selected && !hovered) ? 'is-dim' : '',
  ].join(' ')

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`character ${state}`}
      style={{ '--accent': data.accent }}
      onMouseEnter={() => onHover(data.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(data.id)}
      onBlur={() => onHover(null)}
      onClick={() => onSelect(data.id)}
      aria-pressed={selected}
      aria-label={`${data.name}, ${data.title}. Member ${index + 1} of ${total}. Open details.`}
    >
      <span className="glow" aria-hidden="true" />
      <span className="smoke" aria-hidden="true" />
      <CharacterImage id={data.id} name={data.name} accent={data.accent} className="stage-art" />
      <span className="label">
        <span className="label-name">{data.name}</span>
        <span className="label-title">{data.title}</span>
      </span>
    </button>
  )
}
