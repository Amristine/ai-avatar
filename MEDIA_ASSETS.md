# Avatara media slots

The generated still-image assets are committed in `public/assets/` and wired into `src/App.tsx`. Branded placeholders remain available for any slot without an image.

When assets are ready, add their publicly accessible URLs in the `mediaAssets` object near the top of `src/App.tsx`.

| Slot | Recommended asset | Suggested framing |
|---|---|---|
| `heroBackground` | Brand landscape / hero photograph | Wide 16:9 or wider, at least 2400px |
| `studioPortrait` | Approved source portrait | Vertical 4:5, at least 1000px tall |
| `studioVideo` | Real avatar output demonstration | 16:9, ideally 1080p MP4 |
| `creator` | Creator use-case photograph | Vertical 4:5 or 3:4 |
| `team` | Team / business use-case photograph | Vertical 4:5 or 3:4 |
| `educator` | Educator / learning use-case photograph | Vertical 4:5 or 3:4 |
| `statement` | Wide brand photograph or campaign visual | Wide 16:9, at least 2000px |
| `closingVideo` | Short final avatar video clip | Vertical 4:5 or 3:4 MP4 |

## Notes

- Use images and voices only when you have the required rights and permission.
- Use real generated output for the avatar video slots; do not present a stock portrait as a generated result.
- Keep the subject near the centre of portraits so the responsive crops work on desktop and mobile.
- Use a consistent lighting and color treatment across the creator, team and educator photographs.
- For video, MP4/H.264 is a practical browser-compatible format. Keep clips short and optimized for web delivery.
- The hero keeps its current landscape fallback when `heroBackground` is empty.
- All other empty slots show a designed Avatara placeholder, so the page remains complete until assets are added.


## Assets currently wired into the site

- `heroBackground`: left empty so the existing full-width landscape fallback remains active
- `studioPortrait`: `/assets/avatar-portrait.webp`
- `studioVideoPoster`: `/assets/studio-video-poster.webp`
- `creator`: `/assets/creator-use-case.webp`
- `team`: `/assets/team-use-case.webp`
- `educator`: `/assets/educator-use-case.webp`
- `statement`: `/assets/brand-story-background.webp`
- `closingVideoPoster`: `/assets/closing-video-poster.webp`

The `studioVideo` and `closingVideo` properties intentionally remain empty until real avatar MP4 files are available. Poster images are illustrative stills, not generated video output.
