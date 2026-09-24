import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

// Client-side behaviour of the live Tally form on /contact/sales, measured with Playwright
// against the embedded iframe (tally.so/embed/KY1kDD):
//  - Submit (button or Enter in an input) validates every required block, renders
//    "Please enter a value" / "Please select an option" under each invalid one and focuses the
//    first invalid control. Iframe grew 897.5 -> 1039.45px with all 7 errors at 1440.
//  - Email: a malformed value gives "Please enter a valid email". Once the field has been
//    edited, blurring it re-validates (even an emptied field -> "Please enter a valid email").
//    Typing into it does NOT clear an existing error; the blur/submit does.
//  - Text inputs / textarea: the first change clears that block's error; emptying the field
//    again does not bring it back until the next submit.
//  - Picking an option clears the choice error. Tally conditional logic swaps the trailing
//    block: no choice / A -> "Share any more context..." textarea; B -> "How can we help?" +
//    helper text + a different textarea (+61px). Errors persist per block, so A's textarea error
//    reappears when switching B -> A. Hidden blocks are skipped by validation.
//  - No transitions on field shadows (computed transition: all 0s) -> instant.
// Not reproduced: the network submit and Tally's post-submit page (never triggered on live).
export const MSG_REQUIRED = 'Please enter a value'
export const MSG_EMAIL = 'Please enter a valid email'
export const MSG_CHOICE = 'Please select an option'
// Tally's email check is permissive: something@something.tld
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateField(field, value) {
  if (field.type === 'choice') return value ? null : MSG_CHOICE
  const v = (value || '').trim()
  if (!v) return MSG_REQUIRED
  if (field.type === 'email' && !EMAIL_RE.test(v)) return MSG_EMAIL
  return null
}

export function useTallyForm(fields) {
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.id, ''])))
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const dirty = useRef({})
  const controls = useRef({})

  const register = (id) => (el) => {
    if (el) controls.current[id] = el
  }

  const clearErrors = (ids) =>
    setErrors((e) => {
      if (!ids.some((id) => e[id])) return e
      const n = { ...e }
      ids.forEach((id) => delete n[id])
      return n
    })

  const onChange = (field) => (e) => {
    const value = e.target.value
    setValues((v) => ({ ...v, [field.id]: value }))
    dirty.current[field.id] = true
    if (field.type !== 'email') clearErrors([field.id])
  }

  const onBlur = (field) => (e) => {
    if (field.type !== 'email' || !dirty.current[field.id]) return
    const v = e.target.value.trim()
    const err = EMAIL_RE.test(v) ? null : MSG_EMAIL
    setErrors((prev) => {
      const n = { ...prev }
      if (err) n[field.id] = err
      else delete n[field.id]
      return n
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    const visible = fields.filter((f) => !f.when || f.when(values))
    visible.forEach((f) => {
      const err = validateField(f, values[f.id])
      if (err) next[f.id] = err
    })
    setErrors(next)
    const first = visible.find((f) => next[f.id])
    if (first) {
      controls.current[first.id]?.focus()
      return
    }
    // Valid: show Tally's in-button loading indicator. No request is sent.
    setSubmitting(true)
  }

  useEffect(() => {
    if (!submitting) return undefined
    const t = setTimeout(() => setSubmitting(false), 1200)
    return () => clearTimeout(t)
  }, [submitting])

  return { values, errors, submitting, register, onChange, onBlur, onSubmit }
}

// Tally positions each required "*" badge with inline style
//   top: unset; bottom: 13.25px; right: unset; left: <end of the title's last line + 5px>
// (5px = the h3's padding-right). Measured identical at 1440 and 390, including the title that
// wraps to 3 lines at 390 (left 256.64px). Recomputed on resize and after webfonts load.
export function useRequiredBadgePositions() {
  const rootRef = useRef(null)
  const place = useCallback(() => {
    const root = rootRef.current
    if (!root) return
    root.querySelectorAll('.title-content').forEach((c) => {
      const h = c.querySelector('h3')
      const badge = c.querySelector('.tally-required-indicator')
      if (!h || !badge) return
      const range = document.createRange()
      range.selectNodeContents(h)
      const rects = range.getClientRects()
      const last = rects[rects.length - 1]
      if (!last) return
      const left = last.right - c.getBoundingClientRect().left + 5
      badge.style.top = 'unset'
      badge.style.bottom = '13.25px'
      badge.style.right = 'unset'
      badge.style.left = `${left}px`
    })
  }, [])

  useLayoutEffect(() => {
    place()
    let alive = true
    document.fonts?.ready.then(() => alive && place())
    const ro = new ResizeObserver(place)
    if (rootRef.current) ro.observe(rootRef.current)
    return () => {
      alive = false
      ro.disconnect()
    }
  }, [place])

  return rootRef
}
