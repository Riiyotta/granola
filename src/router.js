import { useEffect, useSyncExternalStore } from 'react'

// Routes that exist in this clone. Links anywhere else are inert (no external links).
export const ROUTES = ['/', '/chat', '/enterprise', '/pricing', '/blog', '/blog/granola-for-apple-watch', '/jobs', '/contact/sales']

const listeners = new Set()
const emit = () => listeners.forEach((l) => l())

function subscribe(l) {
  listeners.add(l)
  window.addEventListener('popstate', l)
  return () => {
    listeners.delete(l)
    window.removeEventListener('popstate', l)
  }
}

export const usePath = () => useSyncExternalStore(subscribe, () => window.location.pathname)

// Local path for an href if it points at a cloned route, else null.
export function localPath(href) {
  if (!href || href.startsWith('#')) return null
  let url
  try {
    url = new URL(href, window.location.href)
  } catch {
    return null
  }
  const sameSite = url.origin === window.location.origin
  if (!sameSite || !ROUTES.includes(url.pathname)) return null
  return url.pathname + url.search + url.hash
}

export function navigate(to) {
  if (to === window.location.pathname + window.location.search + window.location.hash) return
  window.history.pushState({}, '', to)
  window.scrollTo(0, 0)
  emit()
}

// Intercept clicks on links: cloned routes navigate in-app; "#" and anything off-site is inert.
function isExternal(href) {
  try {
    return new URL(href, window.location.href).origin !== window.location.origin
  } catch {
    return false
  }
}

export function useLinkInterception() {
  useEffect(() => {
    function onClick(e) {
      if (e.defaultPrevented) return
      const a = e.target.closest?.('a[href]')
      if (!a) return
      const href = a.getAttribute('href')
      if (href === '#' || href === '' || isExternal(href)) {
        e.preventDefault() // inert link; never leaves the clone, never opens a tab
        return
      }
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return
      const to = localPath(href)
      if (!to) return
      e.preventDefault()
      navigate(to)
    }
    // Also stop scripts from opening off-site windows.
    const open = window.open
    window.open = (url, ...rest) => (url && isExternal(String(url)) ? null : open.call(window, url, ...rest))
    document.addEventListener('click', onClick)
    // Middle-click opens links in a new tab via auxclick; block that for inert links too.
    const onAux = (e) => {
      const a = e.target.closest?.('a[href]')
      if (a && (a.getAttribute('href') === '#' || isExternal(a.getAttribute('href')))) e.preventDefault()
    }
    document.addEventListener('auxclick', onAux)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('auxclick', onAux)
      window.open = open
    }
  }, [])
}
