# Royelle Jewellery — Agent Notes

## Project
Single-page React app for a luxury Indian jewellery brand. Vite + React 19 + TypeScript + Tailwind CSS 3 + Framer Motion. Lenis smooth-scroll.

## Dev commands
```bash
npm run dev      # vite dev server (port 5173 default)
npm run build    # tsc -b && vite build
npm run lint     # eslint .
npm run preview  # vite preview
```

## Architecture
- Entry: `src/main.tsx` → `LenisProvider` → `App.tsx`
- Router: none (single landing page, hash-scroll anchors like `#about`, `#shop`, `#contact`)
- Sections order in `App.tsx`: Navbar → Hero → TrustStrip → PromoCards → ProductSections → Craftsmanship → Materials → About → Testimonials → Newsletter → Contact
- Reusable wrappers: `ScrollReveal` / `StaggerContainer` / `StaggerItem` (`src/components/ScrollReveal.tsx`) — prefer these over inline IntersectionObserver

## Tailwind conventions
- Site uses a **custom container** `.container-luxury` (not Tailwind’s `container`). Every section wraps content in it.
- Font stack: headings → `font-[Cormorant_Garamond]`, body → `Montserrat`
- Theme colors: `royal-purple`, `royal-purple-light`, `royal-gold`, `brand-teal`, `brand-pink` (see `tailwind.config.js`)
- Buttons: use `.btn-primary` / `.btn-secondary` from `index.css` instead of one-off utility stacks
- Section spacing: prefer `py-10 md:py-14` over very large paddings like `py-24 md:py-32` unless the design explicitly demands it

## Assets
- Images are mostly Unsplash URLs inline; local assets live in `src/assets/` (hero.png, bg.png)
- Product data is hardcoded in `src/data/products.ts`

## Adding a new section
1. Create component in `src/components/MySection.tsx`
2. Import and place it in `src/App.tsx` inside `<main>` in the desired order
3. Wrap content in `<div className="container-luxury relative z-10">`
4. Use `id="my-section"` if it needs a navbar anchor
5. Animate with `ScrollReveal` or `motion` from Framer Motion
6. Run `npm run build` to verify TypeScript compiles

## Common gotchas
- `html { scroll-behavior: smooth }` is set in `index.css`; Lenis overrides this, so custom scroll logic should read `useLenis()` hook from `LenisProvider`
- Navbar is `position: fixed` with explicit top padding in `Hero.tsx` (`pt-[128px] md:pt-[152px]`) to avoid overlap — adjust both together if navbar height changes
- The project has no test runner, no formatter, and no CI — rely on `npm run lint` and `npm run build` for verification
