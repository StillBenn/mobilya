# Larisel armchair — product configurator

A furniture configurator rendered like a photograph. The customer picks the
upholstery, the frame, the size and a scatter cushion, turns the chair by hand,
and the price updates as they go.

**A portfolio demo.** The product, the brand and the prices are invented.

**Live:** https://larisel.com/mobilya/
· English (default) · Türkçe · Русский — or link a language directly with
`?lang=tr`, `?lang=ru`.

## What is inside

- **Every option is a path-traced render** (Blender, Cycles): real light, a
  window's shadow sliding over the chair, wood grain, a boucle weave. Nothing
  is drawn live in WebGL.
- **A 72-step turntable.** The chair turns under a fixed studio light, the way
  a product turns on a real turntable. Drag to turn it, throw it, pinch or
  scroll to come closer, double-click to zoom.
- **Layers, not combinations.** Twelve fabrics × eight frames × two sizes × thirteen
  cushion choices would be 2,496 renders per angle. Instead each option is its
  own layer, and the page stacks the chosen ones:
  - the empty studio, multiplied by the chair's shadow on its floor;
  - upholstery + frame, added — each was rendered holding the other out, so
    together they cover exactly the chair;
  - the cushion over them, rendered with the chair catching its shadow.
- **Two sets of frames**: light ones (800 px, one pack per layer) while the
  chair moves, the full 1600 px frame once it rests. Frames are cropped to
  what they cover and decoded on demand within a memory budget, so a phone
  holds the chair's size, not 72 stage-sized images.
- **Swatches are the materials.** Each fabric and frame button is a small
  render of the material itself — the boucle's loops, the oak's rings, the
  metal's softbox — not a flat colour.
- **Pairings.** Six chair, cushion and frame combinations chosen to go
  together, each with a picture of the chair dressed in it; one tap sets all
  three, and every option stays editable.
- **Live price**, with an animated counter.
- **Snapshot** — saves the full render of the angle on screen as a PNG.
- **Three languages**, English by default; the choice is remembered, and a
  `?lang=` link wins over it.
- **Responsive** — on a phone the stage takes the top of the screen and the
  options and price sit below it, with the price bar pinned.
- **Smoothing is tied to time, not to frames** — a transition takes the same
  wall-clock time at 60 Hz, at 144 Hz, and on a laptop dropping frames.

## Decisions worth knowing

- **XL changes the proportions, not the overall scale.** In an empty scene a
  uniform enlargement is indistinguishable from the camera moving closer.
- **One file.** All of the JavaScript lives in `index.html`.
- **Names live on the catalogue item, not in a parallel list** — a colour and
  its three names cannot drift apart if they are one object.
- **Fonts are self-hosted and split by script.** The Cyrillic slice only
  downloads when the page is switched to Russian.

## Files

- `index.html` — the page and its script
- `css/style.css` — the page's styles
- `renders/<size>/` — the layers: `manifest.json`, the empty studio
  (`bg0-*.webp`), and per layer a light pack (`lite.bin`) and one full frame
  per angle (`hd/NN.webp`)
- `renders/swatch/` — the material samples; `renders/pairs/` — the pairings' pictures

## Running it locally

The renders are fetched, so the page needs a server:

```bash
python -m http.server 8000
```
