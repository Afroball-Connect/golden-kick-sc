# Squad photo asset provenance

The public-facing `/squad` gallery uses 21 optimised local WebP display derivatives (640 × 800, 4:5 crops) from images recorded in `app/squad/players.ts`. Each original portrait was visibly paired with its name on the club's public Players page, `https://www.goldenkicksc.com/team`. The app serves the locally stored WebP derivatives and does not depend on the source site at runtime; each exact source image URL is preserved in the player data for auditability.

One source entry, Nana Kobina Osoh, was not used: its public image showed an airport/travel scene rather than a football portrait. This preserves the user's instruction to use club images without presenting a non-football scene as a squad profile.

The source page's player names and groupings are reproduced as published. Its season is not stated, so the UI describes the gallery as an archive and does not assert current squad membership. Dates of birth and shirt numbers are omitted. Confirm image-reuse rights and the active roster with the club before representing this concept as an official publication.
