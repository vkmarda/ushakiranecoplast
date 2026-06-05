import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// Load .env from project root if it exists (no external dependency needed)
try {
  const envContent = fs.readFileSync(path.join(root, '.env'), 'utf-8')
  for (const line of envContent.split('\n')) {
    const match = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/)
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, '')
    }
  }
} catch { /* .env not present — rely on shell environment */ }

const API_KEY  = process.env.GOOGLE_PLACES_API_KEY
const PLACE_ID = process.env.GOOGLE_PLACE_ID
const OUT_PATH = path.join(root, 'src/data/reviews.json')

if (!API_KEY || !PLACE_ID) {
  console.warn('[fetch-reviews] GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not set — skipping')
  process.exit(0)
}

try {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=en`,
    {
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'reviews,userRatingCount,rating',
      },
    }
  )

  if (!res.ok) {
    console.error('[fetch-reviews] API error:', res.status, await res.text())
    process.exit(0)
  }

  const data = await res.json()
  const raw = data.reviews ?? []

  const reviews = raw
    .map(r => ({
      text:         r.text?.text ?? '',
      name:         r.authorAttribution?.displayName ?? 'Google Reviewer',
      rating:       r.rating ?? 5,
      relativeTime: r.relativePublishTimeDescription ?? '',
      photoUri:     r.authorAttribution?.photoUri ?? null,
    }))
    .filter(r => r.text.length > 20)

  const meta = {
    overallRating:    data.rating ?? null,
    totalRatingCount: data.userRatingCount ?? null,
    fetchedAt:        new Date().toISOString(),
  }

  fs.writeFileSync(OUT_PATH, JSON.stringify({ meta, reviews }, null, 2))
  console.log(`[fetch-reviews] Saved ${reviews.length} reviews (overall: ${meta.overallRating}/5)`)
} catch (err) {
  console.error('[fetch-reviews] Failed:', err.message)
  process.exit(0)
}
