# Akatsuki Character Showcase

A cinematic, dark-themed React showcase of the Akatsuki, built with Vite and Framer Motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build
```

## Add your own character art

Each character looks for a file named after its id in `public/characters/`.
Transparent PNG or WebP full-body images work best.

```
public/characters/pain.png
public/characters/konan.png
public/characters/itachi.png
public/characters/kisame.png
public/characters/deidara.png
public/characters/sasori.png
public/characters/hidan.png
public/characters/kakuzu.png
public/characters/zetsu.png
public/characters/tobi.png
public/characters/orochimaru.png
```

Prefer URLs or other file names? Add them to `IMAGE_OVERRIDES` in `src/config/assets.js`.
Until an image is found, a generic silhouette is shown with a loading shimmer.

## Add background music

Place your own audio file at `public/audio/theme.mp3` (or change `AUDIO_URL` in `src/config/assets.js`).
Browsers block autoplay, so music starts on your first click or key press; the **Music** button in the header toggles it.
If no file is found, the button shows "No track".

## Controls

- Hover / focus a character: preview with glow, name and title
- Click / Enter: open the detail panel (stays highlighted)
- `←` `→`: move focus between members, or step through profiles when one is open
- `Esc`: close the panel or roster
- **All Members** opens a list to jump to anyone

## Structure

```
src/
  components/  AkatsukiShowcase, Character, CharacterDetailCard, Atmosphere, MusicPlayer, Silhouette
  data/        characters.js   (all member info)
  config/      assets.js       (image + audio paths)
  styles.css
```
# akatsuki
