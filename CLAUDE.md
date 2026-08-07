# Bingnan Jiang — AI Product Designer portfolio

Static HTML. No build step, no dependencies, no framework. Every page is a
single self-contained `.html` file with its CSS in a `<style>` block and its JS
in a `<script>` block. Serve the folder and open a file:

```
python3 -m http.server 8765
```

Use a server rather than `file://` — several pages load `assets/` images and
embed sibling pages in iframes.

## Pages

`portfolio.html` is the home page. It is the one to edit for anything about the
site's structure, work cards, or landing copy.

| File | Role |
|---|---|
| `portfolio.html` | **Home.** Sections: `#work` (3 cards) · `#case` · `#thinking` · `#more-work` · `#play` · `#contact` |
| `copilot-ime.html` | Case study — work card 01 |
| `voice-ime.html` | Case study — work card 02 (Loom embeds) |
| `microclaw.html` | Case study — work card 03 |
| `microclaw-steps.html` | First-run journey, built to be embedded. `?only=N` renders step N alone |
| `microclaw-console.html` | The timeline console mock — see below |
| `index.html` | Earlier standalone portfolio page. Superseded by `portfolio.html`; only `portfolio-template-第四轮.html` still links to it |
| `portfolio-template-第四轮.html` | Earlier full template, kept for reference |
| `microclaw-demo.html` | Orphan — nothing links to it |
| `font-compare.html`, `font-stencil.html`, `_ab-schibsted.html` | Type/AB scratch pages |

### What embeds what

```
portfolio.html ─┬─ microclaw-console.html?clip=pause   (work card 03 visual)
                ├─ assets/parametric-demo.html
                ├─ assets/devbar-demo.html
                └─ loom.com/…                          (work card 02 visual)

microclaw.html ─── microclaw-steps.html?only=1…5
microclaw-steps.html ─── microclaw-console.html        (no query — full deck)
```

Because `microclaw-console.html` is embedded from two places with different
query strings, **check both before changing its playback code.**

## microclaw-console.html

A mock of the MicroClaw desktop app running a plan the user interrupts. The
argument it exists to make is in its own header comment:

> an agent's plan is a timeline you can rewrite and rewind — not a progress bar
> you watch.

**Structure.** A fixed 956×760 `.app-shell` (grid `52px | 240px | 1fr`) scaled
to fit its frame by `fitShell()`. Inside, a 14-beat deck: `BEATS[]` holds one
`run()` per beat that mutates `state`, and `render()` redraws the whole thread
from it. Beat state changes are **synchronous**, so `goto(n)` — which resets and
replays 1…n — always produces the same frame as playing there in order. Keep it
that way: anything time-based (the typewriter, the pointer) is presentation
layered on top, never state.

**Never hard-code a beat index.** Look it up with `beatAt("…")`. Inserting a
beat has silently broken hard-coded indices twice.

**Three playback modes:**

| Opened as | Behaviour |
|---|---|
| Directly | Full 14 beats + the Play/Next/Reset bar (`H` hides it), stopping at the three interaction beats |
| In an iframe | Full 14 beats, looping, no bar |
| `?clip=pause` | Only beats 6–9 — the pointer on the pause button, the halt, the redirect being typed, the message landing |

`state.paused` is the *plan's* halt, which the deck sets itself at the halt
beat. `userPaused` is a viewer pressing ‖. Autoplay gates on `userPaused` only —
gating on `state.paused` stalls the run forever, because no script presses
resume.

**The composer never becomes a stop button.** Sending mid-run is how this agent
gets redirected; swapping ↑ for ■ leaves you able to type but not to send.
Halting lives on the card's ‖, which is resumable and doesn't touch the
conversation.

## Design system

The `--mc-*` palette mirrors the real MicroClaw desktop app and is shared by
`microclaw-console.html`, `microclaw-steps.html`, `microclaw-demo.html` and
`portfolio-template-第四轮.html`. Source of truth:

```
Projects/MicroClow Presentation/desktop_backup_20260505_英文版/
  For-Claude-Design/styles/global.css            ← semantic layer
  For-Claude-Design/styles/mai-tokens/*.css      ← --smtc-* primitives
  For-Claude-Design/components/Sidebar.vue
  For-Claude-Design/views/ChatView.vue
```

Take values from there rather than mixing them by eye. Coloured chips follow the
app's **status-tint recipe** — tint background + full-strength foreground —
rather than an invented pair.

**Brand accent is black.** Emphasis comes from fill, weight and form, not hue;
black is expressed through the system's *informative* tokens. The app backup
still defines a caramel `--accent: #a25a02` — that is stale, do not reintroduce
it. Red and green stay, as status colours.

Three deliberate deviations from the app are recorded in a comment block at the
top of `microclaw-console.html`, above the rules they affect. Read it before
"fixing" a value that looks wrong. Anything **not** listed there should match the
app; a gap is a bug, not a choice.

## Conventions

### Prototype integration rule

When a confirmed standalone prototype is incorporated into a case study, port
its component **verbatim first**: markup, CSS geometry, paths, motion logic,
and state mapping. Scope those original selectors for the destination page;
do not hand-recreate a simplified look-alike and then tune it by eye. Delete
the replaced case-study implementation only after the port matches its source.
The standalone prototype remains the single source of truth until the port is
explicitly verified.

- Chip text sits at 10px, which hits the 4.5:1 contrast floor long before the
  muted grey does. Check contrast before lightening small type — past a point it
  stops being quiet and starts being unreadable.
- Entry animations belong on an `.is-new` class the renderer applies, not on the
  element. `render()` rebuilds its subtree every beat, so an animation on the
  element itself replays each time and the whole card flashes.
- Prefer deriving numbers from geometry over eyeballing them, and leave the
  arithmetic in a comment (e.g. the sidebar's 56px session indent is
  `list 8 + row 10 + avatar 36 + gap 10`).
