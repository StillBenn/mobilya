# Larisel furniture — product configurator

A furniture configurator rendered like a photograph. Three pieces — an
armchair, a sofa and a coffee table. The customer picks the shape, the
materials and the finish, turns the piece by hand, looks at the cloth or the
stone up close, measures it, compares two designs and shares a link — and the
price updates as they go.

**A portfolio demo.** The products, the brand and the prices are invented.

**Live:** https://larisel.com/mobilya/
· English (default) · Türkçe · Русский — or link a language directly with
`?lang=tr`, `?lang=ru`.

## The pieces

- **Armchair** — standard or XL; twelve bouclé colours; eight frames (four
  woods, four metals); an optional scatter cushion in any of the twelve.
- **Sofa** — two seats, three, or a corner with a chaise; three cloths
  (bouclé, velvet, linen) in eight tones each; legs in the same eight
  finishes; an optional pair of scatter cushions in any of the 24.
- **Coffee table** — round on a fluted drum, oval on a racetrack pedestal, or
  long on two slab legs; eight tops (five marbles, travertine, solid oak and
  walnut); the base in the same eight finishes.

The three share their finishes, so they make a set.

## What is inside

- **Every option is a path-traced render**: real light, a window's shadow
  sliding over the piece, wood grain, a bouclé's loops, a velvet's sheen,
  veined marble. Nothing is drawn live in WebGL.
- **A 72-step turntable.** The piece turns under a fixed studio light, the way
  a product turns on a real turntable. Drag to turn it, throw it, pinch or
  scroll to come closer, double-click to zoom.
- **Layers, not combinations.** Each option is its own layer, and the page
  stacks the chosen ones: the empty studio multiplied by the piece's shadow,
  then the upholstery and the frame (each rendered holding the other out, so
  together they cover exactly the piece) or, for the table, the base and the
  top over it; then the cushions with their shadow on the piece.
- **Two sets of frames**: light ones (800 px, one pack per layer) while the
  piece moves, the full 1600 px frame once it rests. Frames are cropped to
  what they cover and decoded within a memory budget, so a phone holds the
  piece's size, not 72 stage-sized images.
- **Swatches are the materials** — small renders of the cloth, the wood, the
  metal, a slab of the stone — not flat colours.
- **Pairings** — combinations chosen to go together, each with a picture of
  the piece dressed in it; one tap sets them all.
- **Close-up** — the chosen cloth or stone on the piece itself, near, with its
  tones beside it.
- **Dimensions** — drawn on the piece as a draughtsman would, following it as
  it turns (a round top shows its diameter).
- **Compare** — save a design as A, change anything (even the piece), and see
  the two side by side with the difference in price; go back to A in a tap.
- **Share** — a link that opens exactly this design:
  `?p=sofa&form=corner&fab=velvet-emerald&leg=brass&cush=velvet-ochre&lang=tr`.
- **Snapshot** — saves the full render of the angle on screen as a PNG.
- **Three languages**, English by default; the choice is remembered, and a
  `?lang=` link wins over it.
- **Responsive** — on a phone the stage takes the top of the screen and the
  options and price sit below it, with the price bar pinned.
- **Smoothing is tied to time, not to frames** — a transition takes the same
  wall-clock time at 60 Hz, at 144 Hz, and on a laptop dropping frames.

## Decisions worth knowing

- **A new piece is one catalogue entry and one folder of renders** —
  `PRODUCTS` in `index.html`; the page around it does not change.
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
- `renders/<std|xl>/`, `renders/sofa/<two|three|corner>/`,
  `renders/table/<round|oval|rect>/` — the layers: `manifest.json`, the empty
  studio (`bg0-*.webp`), per layer a light pack (`lite.bin`) and one full
  frame per angle (`hd/NN.webp`), and `dims.json` (where the piece's
  measuring box falls in each frame)
- `swatch/`, `macro/`, `pairs/` under each piece's folder — the material
  samples, the close-ups and the pairings' pictures

## Running it locally

The renders are fetched, so the page needs a server:

```bash
python -m http.server 8000
```
