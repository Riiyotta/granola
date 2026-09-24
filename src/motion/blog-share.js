// Share helpers. Live opens X/LinkedIn share windows for the canonical post URL; this clone
// keeps no external links, so "copy" copies the local page URL and the share buttons are inert.
export const POST_URL = typeof window === 'undefined' ? '/blog/granola-for-apple-watch' : window.location.origin + '/blog/granola-for-apple-watch'
export const POST_TITLE = 'Granola for Apple Watch'

export function withUtm(url, source) {
  const u = new URL(url)
  u.searchParams.set('utm_source', source)
  u.searchParams.set('utm_medium', 'social')
  u.searchParams.set('utm_campaign', 'blog_share')
  return u.toString()
}

export function copyShareLink(url) {
  navigator.clipboard?.writeText(withUtm(url, 'copy_link')).catch(() => {})
}

export function openShareWindow() {
  // Intentionally inert: no external share windows in this clone.
}
