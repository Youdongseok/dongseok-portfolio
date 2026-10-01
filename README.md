# Dongseok Portfolio — React + Vite + Tailwind

The original single-page HTML/CSS/JS implementation has been reorganized into a small React project that is easier to read and edit.

## Stack

- React
- Vite
- JSX
- Tailwind CSS v4
- Motion

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```text
src/
├─ components/
│  ├─ ArrowIcon.jsx
│  ├─ HeroPanel.jsx
│  ├─ LeftPanel.jsx
│  ├─ PixelArt.jsx
│  ├─ RightPanel.jsx
│  └─ ThemeToggle.jsx
├─ hooks/
│  ├─ useIntroAnimation.js
│  └─ useTheme.js
├─ styles/
│  └─ global.css
├─ utils/
│  └─ pixelArt.js
├─ App.jsx
└─ main.jsx
```

## Styling rule

Layout and component styling now live primarily in Tailwind utility classes inside JSX.

`src/styles/global.css` is intentionally small and contains only styles that are genuinely global or awkward to express as component utilities:

- light/dark theme CSS variables
- the shared sonar keyframe
- View Transition pseudo-element rules

The duplicated source video that was left in the public root has also been removed. The page uses only `public/videos/hero.mp4`.

## Motion license

Motion is MIT licensed. Its notice is retained in `LICENSES/Motion-MIT.txt`.


## Reference image

The original root-level reference image is preserved as:

`08db8377cf47f889a5ef20f65c093036.jpg`

It is a design reference only and is not imported by the application.
