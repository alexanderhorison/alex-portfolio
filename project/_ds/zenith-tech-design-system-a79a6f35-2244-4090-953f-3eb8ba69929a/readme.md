# WA Broadcast — Design System

A design system for **WA Broadcast**, a mobile-first WhatsApp broadcast CMS
built by Zenith Tech. The product lets a premier-banking relationship
manager compose a message (optionally with an image), pick customer groups
or individual contacts, send a WhatsApp broadcast, and track per-recipient
delivery results.

This system captures the product's visual language — a clean, flat,
shadcn-derived mobile UI in neutral grays with a **signature red brand
accent** and a green/blue/amber delivery-status palette — as reusable
tokens, components, and full-screen recreations.

---

## Sources

Built by reading the production codebase (not screenshots):

- **GitHub:** https://github.com/alexanderhorison/whatsapp-broadcast-hub
  (private). A Vite + React + TypeScript app using **shadcn/ui** (`default`
  style, `slate`/neutral base, Radix primitives, `lucide-react` icons,
  Tailwind). Tokens were ported verbatim from `src/index.css`; components
  mirror `src/components/ui/*`; screens recreate `src/pages/*`.

Explore the repo for deeper fidelity — every token, component recipe, and
screen here traces back to a file in it.

---

## Content fundamentals

How the product writes copy:

- **Voice — warm, personal, concierge.** This is a 1:1 RM tool, not a mass
  marketing console. The dashboard greets by name: *"Welcome back, Irene
  Suthiono 👋"* with the role *"Senior Premier Banking Manager"* beneath.
  The login even reads *"Made special for Irene Suthiono ❤️"*.
- **Bilingual by surface.** UI chrome is in **English** (Dashboard,
  Broadcast, Recipients, Settings, "Send to 12 recipients"); error toasts
  and customer-facing message bodies are in **Indonesian** ("Login gagal",
  "Password salah", "Selamat tahun baru, Bapak/Ibu nasabah premier…").
  Keep this split — don't translate message bodies to English.
- **Person.** Addresses the operator as "you/your" ("Manage your account",
  "Send your first"). Customer messages use formal Indonesian
  ("Bapak/Ibu").
- **Casing.** Title Case for page titles and primary buttons
  ("Send Broadcast?", "Send Now"). Sentence case for helper text. ALL-CAPS
  only on micro metric labels ("TOTAL", "SUCCESS", "FAILED") with wide
  tracking.
- **Numbers & units.** Counts are spelled inline ("48 recipients",
  "24 contacts", "5 customers"); pluralization is handled ("recipient" vs
  "recipients"). Character counter shows `123/4096`.
- **Emoji.** Used sparingly and affectionately in greetings/headers
  (👋 ❤️ 🙏) — never in system/status text. Don't overuse.
- **Tone of confirmations.** Direct and reassuring: *"This action cannot be
  undone."*, *"Results will appear here automatically once complete."*

---

## Visual foundations

- **Color.** Near-white background (`0 0% 100%`), near-black ink
  (`0 0% 9%`). **Primary = near-black** (default buttons/emphasis).
  **Brand = red** `#DC2626` (`0 72% 51%`) — the signature accent reserved
  for send CTAs, the active nav tab, selected group tiles, and brand-tinted
  icon wells (`hsl(brand / .1)`). Neutrals are pure grays (`0 0% 96%` fills,
  `0 0% 90%` borders, `0 0% 45%` muted text). Semantic: destructive red
  `0 84% 60%`, success green `145 65% 42%`. Delivery status borrows Tailwind
  hues: blue (pending), green (delivered), amber (partial), red (failed).
- **Type.** No webfont — the native **system UI stack** (`ui-sans-serif,
  system-ui, …`). Modest mobile scale: 24px bold stat numbers, 20px
  semibold page titles (tracking `-0.015em`), 14px body, 12/11/10px for
  captions and micro-labels. Weights 400/500/600/700.
- **Spacing.** 4px base. Screen gutter 16px (`px-4`), vertical rhythm 20px
  (`py-5`), 12px default gap between cards and list rows.
- **Radius.** Base `0.75rem` (12px) cards; 10px buttons/inputs; 16–20px for
  sheets and dialogs (`rounded-2xl`); full pills for badges, avatars, and
  icon wells. Generously rounded but never playful.
- **Backgrounds.** Flat, solid white. **No gradients, no patterns, no
  imagery** behind content. Depth comes from 1px borders, not fills.
- **Elevation.** Overwhelmingly **flat / border-only** — cards are a 1px
  border with no shadow. Shadow is reserved for things that genuinely float:
  dialogs/popovers (large soft overlay shadow) and the fixed send bar (which
  also uses a translucent backdrop blur).
- **Cards.** White surface, 1px `border` (`0 0% 90%`), 12px radius, **no
  shadow**. Stat tiles, list rows, and menu groups all follow this.
- **Borders.** 1px hairlines everywhere; lists use internal `divide-y`
  hairlines. Selected/emphasis states bump to a **2px** colored border
  (red for selected group tiles, status hue for result cards).
- **Animation.** Snappy and utilitarian. Color transitions ~150–200ms with
  a standard ease. Entrance: short fade-up / scale-in on first paint
  (login). Indeterminate states use spin (loader) and pulse (progress,
  pending icons). No bounce, no parallax, no decorative loops.
- **Hover / press.** Hover darkens fills (`/0.9` brand, `/0.8` secondary) or
  adds an accent background (ghost/outline). Touch press uses **scale**:
  full-width buttons `scale(0.95)`, cards/tiles `scale(0.98)`, list rows go
  to a muted background. Tap-highlight is suppressed.
- **Transparency & blur.** Used in two specific places: brand/status tints
  at low alpha (`/0.05`–`/0.18`) for soft fills, and a `backdrop-blur` +
  translucent background on the fixed send bar and image-preview modal.
- **Layout rules.** Fixed bottom tab bar (56px, `safe-area` padded). The
  compose screen pins its send CTA just above the nav. Content scrolls under
  fixed chrome. Everything lives in a single mobile column.

---

## Iconography

- **System:** [`lucide-react`](https://lucide.dev) — the icon set the
  product ships. Outline style, 2px stroke, 24×24 viewBox, round caps/joins.
  Rendered at ~16–20px in-app.
- **In this system:** the kit recreates the exact lucide vectors used by the
  app in `ui_kits/wa-broadcast/icons.js` (→ `window.WAIcons`) so screens stay
  faithful without a network dependency. Icons used: Send, Home
  (LayoutDashboard), Users, Settings, ChevronRight, ArrowLeft, Eye/EyeOff,
  Megaphone, Trash, ImagePlus, X, Folder, Check, CheckCircle, XCircle,
  AlertTriangle, Clock, Loader, Plus, Search, Shield, LogOut, User, Upload.
  To pull more icons, copy the path data from lucide or add the CDN.
- **Emoji** appear only inside copy (greetings/headers): 👋 ❤️ 🙏 — treated
  as content, never as UI controls. **No** unicode glyphs stand in for icons.
- **App mark:** the brand mark is the **red paper-plane "send" glyph** in a
  soft-red (or solid-red) icon well next to the "WA Broadcast" wordmark.
  Note: the green WhatsApp-style app tile in `assets/logo-icon.png` (192/512)
  is a **tailor-made, per-customer deliverable**, not a brand standard — keep
  it on file but do not reuse it as the brand mark.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point (consumers link this); `@import`s
  all tokens, semantic aliases, base, and component CSS.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (+ radius /
  shadow / motion / layout), `semantic.css` (aliases), `base.css` (reset +
  entrance keyframes).
- `assets/` — `logo-icon.png`, `logo-icon-512.png`, `favicon.ico`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `SKILL.md` — Agent-Skills entry point.

**Components** (`window.WABroadcastDesignSystem_*`)
- `components/core/` — `Button`, `Badge`, `Input`, `Textarea`, `Label`,
  `Checkbox`, `Card`, `Avatar`.
- `components/app/` — `StatCard`, `ListRow`, `SelectableTile`, `StatusCard`,
  `BottomNav`.
- `components/core.css`, `components/app.css` — the `wa-` class recipes.

**UI kit**
- `ui_kits/wa-broadcast/` — interactive mobile app recreation
  (`index.html` + `screens.jsx` + `icons.js` + `data.js`).

---

## Substitutions & caveats

- **Fonts:** the product uses no webfont (native system stack), so none were
  bundled — this is faithful, not a substitution.
- **Icons** are recreated lucide vectors (the genuine set the app uses); for
  production prefer importing `lucide-react` directly.
- Sample names, numbers, and message bodies in the UI kit are **fictional**.
