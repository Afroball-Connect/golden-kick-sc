# Golden Kick SC — Next.js club-site concept

A mobile-first Next.js App Router concept for Golden Kick Sporting Club, developed from its public club website. The visual direction and page layouts are original; the club's published player portraits are locally served in the first-party Squad experience.

## Run locally

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run typecheck
npm run build
npm start
```

## Included

- Responsive club masthead and mobile navigation
- Responsive homepage hero using a user-supplied 1280 × 720 football-training photograph with mobile-aware focal positioning and a contrast overlay
- Persistent light/dark theme switch on the home page and squad page
- Interactive club-news carousel linking to the club's published archive
- Fixtures/results switch and honest match-centre pending states
- Dedicated first-party `/squad` page with 21 photographed profiles, grouped as published by the club
- Club history and contact details
- Pathway, partnership and involvement calls to action
- Honours area with an explicit confirmation state

## Content and provenance

The crest and three news images were downloaded from `goldenkicksc.com` and are served locally from `public/images/`. Player portraits used on `/squad` are copied from the public Players page at `https://www.goldenkicksc.com/team`, converted into locally served 640 × 800 WebP crops, and never hotlinked at runtime. Each portrait-to-name source URL is recorded in `app/squad/players.ts`. One airport/travel image was deliberately excluded from the football portrait gallery. No birth dates or shirt numbers are shown.

The public Players page does not identify a season and contains inconsistencies, so the new gallery is explicitly an archive of published profiles—not confirmation of the current first-team roster. Names and positional groupings remain subject to club confirmation. Squad, fixtures, results, sponsors, honours, social links and editorial status should be checked with the club before representing the site as an official publication.

The official club profile says Golden Kick Sporting Club was founded in 2016 and is based in Mamprobi, Accra. Contact details shown on the home page were published on the official club site. This is an original club-site concept; its public hosting does not make it an official club publication.

The visual direction is original: dark forest surfaces, cream editorial panels and a muted gold accent. The Inter Allies site was used as a feature reference, not copied code or layout. Public availability of imagery does not by itself establish commercial reuse rights; confirm club approval before presenting the site as official.
