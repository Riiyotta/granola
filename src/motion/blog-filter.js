import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { navigate } from '../router.js'

// Live /blog filter chips are plain Next <Link>s to /blog, /blog?type=blog, /blog?type=press
// (Announcements goes to /updates). The server renders the filtered list: ?type=blog keeps the
// 24 Granola posts, ?type=press keeps the 12 external press items and the H1 becomes "Press".
// There is no transition: the list swaps on navigation and the page is at the top.
// The shared router only tracks pathname, so this hook tracks ?type itself.
const readType = () => new URLSearchParams(window.location.search).get('type')

export function useBlogType() {
  const [type, setType] = useState(readType)
  useEffect(() => {
    const on = () => setType(readType())
    // Any other in-app navigation (e.g. the navbar "Blog" link from ?type=press) goes through
    // the router's document click handler, which runs after this one; re-read afterwards.
    const onClick = () => setTimeout(on, 0)
    window.addEventListener('popstate', on)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', on)
      document.removeEventListener('click', onClick)
    }
  }, [])
  // Chip click: route in-app (runs before the router's document-level listener).
  const go = useCallback((e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const href = e.currentTarget.getAttribute('href')
    if (!href || !href.startsWith('/blog')) return
    e.preventDefault()
    navigate(href)
    setType(readType())
  }, [])
  return [type, go]
}

// Hide list entries that don't match the active type. Rows carry data-kind="post"|"press"
// (tagged from their original links, since external links are removed in this clone).
export function useBlogListFilter(listRef, type) {
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return
    for (const a of list.querySelectorAll(':scope > a[href]')) {
      const href = a.getAttribute('href')
      const isPost = a.dataset.kind ? a.dataset.kind === 'post' : href.startsWith('/blog/')
      const show = type === 'press' ? !isPost : type === 'blog' ? isPost : true
      a.style.display = show ? '' : 'none'
    }
  }, [listRef, type])
}

export const chipClass = (active) =>
  'flex gap-1 items-center py-1.5 pr-3 pl-2.5 rounded-full border transition-colors ' + (active ? 'border-oats-neutral-450 bg-oats-neutral-100' : 'border-stroke hover:bg-oats-neutral-100')
export const chipTextClass = (active) => 'text-base font-medium ' + (active ? 'text-content-primary' : 'text-oats-neutral-700')
