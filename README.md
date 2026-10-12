# Larisel armchair — 3D product configurator

An interactive furniture configurator built with Three.js / WebGL. The
customer picks the upholstery, the frame and the size; the model and the
price update in real time.

**A portfolio demo.** The product, the brand and the prices are invented.

**Live:** https://larisel.com/threejs-chair-configurator/
· English (default) · Türkçe · Русский — or link a language directly with
`?lang=tr`, `?lang=ru`.

## What is inside

- **The model is built in code** — no external `.glb` / `.fbx` files, so the
  page opens instantly and weighs under 30 KB excluding the library.
- **PBR materials and soft shadows**, environment from `RoomEnvironment`, so
  there is no HDRI file to download either.
- **Live price**, with an animated counter.
- **Snapshot** — one button saves a PNG of the configuration on screen.
- **Three languages**, English by default; the choice is remembered, and a
  `?lang=` link wins over it.
- **Responsive** — on a phone the stage takes the top of the screen and the
  options and price sit below it, with the price bar pinned.
- **Smoothing is tied to time, not to frames** — a transition takes the same
  wall-clock time at 60 Hz, at 144 Hz, and on a laptop dropping frames.

## Decisions worth knowing

- **XL changes the proportions, not the overall scale.** In an empty scene a
  uniform enlargement is indistinguishable from the camera moving closer.
- **One file.** All of the JavaScript lives in `index.html`: ES modules are
  blocked by CORS over `file://`, so a separate `js/` folder stopped the page
  from opening on a double-click. One source of truth instead of two.
- **Names live on the catalogue item, not in a parallel list** — a colour and
  its three names cannot drift apart if they are one object.
- **Fonts are self-hosted and split by script.** The Cyrillic slice only
  downloads when the page is switched to Russian.

## Running it locally

Open `index.html`, or serve the folder:

```bash
python -m http.server 8000
```
