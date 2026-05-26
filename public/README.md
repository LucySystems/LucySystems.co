# /public

## VitalPort screenshots

Place app screenshots in `/public/vitalport/` when ready.

Suggested filenames:
- `vitalport/screen-1.png` — main dashboard
- `vitalport/screen-2.png` — workout detail
- `vitalport/screen-3.png` — trends view

In `src/app/page.tsx`, find the comment `/* Place app screenshots in /public/vitalport/ ... */`
and replace the three placeholder `<div>` elements with `<Image>` tags:

```tsx
import Image from "next/image";

<Image
  src="/vitalport/screen-1.png"
  alt="VitalPort dashboard"
  width={176}
  height={320}
  className="absolute right-0 top-0 rounded-2xl shadow-2xl"
/>
```

## Favicon

Replace `/public/favicon.ico` with the Lucy Systems favicon when ready.
