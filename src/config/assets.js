// ─────────────────────────────────────────────────────────────
//  ASSET CONFIGURATION — edit this file to plug in your own files
// ─────────────────────────────────────────────────────────────
//
//  IMAGES
//  By default each character looks for  public/characters/<id>.png
//  (e.g. public/characters/itachi.png). Transparent PNGs/WebPs work
//  best. To use a URL or another path instead, add it to IMAGE_OVERRIDES.
//
//  AUDIO
//  Put your own music file at  public/audio/theme.mp3  or set AUDIO_URL.
//
//  If a file is missing, the app shows a silhouette fallback and the
//  music button explains that no track was found.

const base = import.meta.env.BASE_URL

export const IMAGE_OVERRIDES = {
  // pain: 'https://example.com/pain.png',
  // konan: '/characters/konan.webp',
}

export const getImageUrl = (id) =>
  IMAGE_OVERRIDES[id] ?? `${base}characters/${id}.png`

export const AUDIO_URL = `${base}audio/theme.mp3`
export const AUDIO_VOLUME = 0.45
