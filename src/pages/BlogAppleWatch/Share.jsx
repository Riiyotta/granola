import { useEffect, useRef, useState } from 'react'
import { copyShareLink, openShareWindow } from '../../motion/blog-share.js'

// Share controls on live blog posts (SharePopover in the byline, BlogPostShareFooter at the
// end). Measured on live: no enter/exit animation (the dropdown mounts/unmounts instantly,
// 0 animations), hover states are the original `transition-colors` classes. Copy swaps the icon
// to a check (and the label to "Copied!") for 2000ms; the popover stays open after copying and
// closes on outside mousedown or after choosing X / LinkedIn.

const ShareIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14v11H3z" fill="none" stroke="none" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5M3.5 11v3.5h13V11" />
  </svg>
)
const LinkIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
    <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
  </svg>
)
const CheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
  </svg>
)
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

function useCopied() {
  const [copied, setCopied] = useState(false)
  const t = useRef(null)
  useEffect(() => () => clearTimeout(t.current), [])
  return [
    copied,
    (url) => {
      copyShareLink(url)
      setCopied(true)
      clearTimeout(t.current)
      t.current = setTimeout(() => setCopied(false), 2000)
    },
  ]
}

const OPTIONS = [
  { id: 'copy', label: 'Copy link' },
  { id: 'x', label: 'Share on X' },
  { id: 'linkedin', label: 'Share on LinkedIn' },
]

export function SharePopover({ url, title }) {
  const [open, setOpen] = useState(false)
  const [copied, copy] = useCopied()
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])
  const choose = (id) => {
    if (id === 'copy') return copy(url)
    openShareWindow(id, url, title)
    setOpen(false)
  }
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((o) => !o)} className="p-1.5 rounded-md text-content-secondary hover:text-content-primary hover:bg-oats-neutral-100 transition-colors" aria-label="Share this post">
        <ShareIcon className="size-5" />
      </button>
      {open && (
        <div className="absolute top-full mt-2 right-0 z-50 w-56 rounded-xl border border-stroke bg-white shadow-lg py-1">
          {OPTIONS.map((o) => (
            <button key={o.id} onClick={() => choose(o.id)} className="flex w-full items-center gap-3 px-4 py-3 text-sm text-content-secondary hover:bg-oats-neutral-50 transition-colors">
              {o.id === 'copy' ? copied ? <CheckIcon className="size-5 shrink-0" /> : <LinkIcon className="size-5 shrink-0" /> : o.id === 'x' ? <XIcon className="size-5 shrink-0" /> : <LinkedInIcon className="size-5 shrink-0" />}
              <span>{o.id === 'copy' && copied ? 'Copied!' : o.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ShareFooter({ url, title }) {
  const [copied, copy] = useCopied()
  const cls = 'p-2 rounded-md text-content-secondary hover:text-content-primary hover:bg-oats-neutral-100 transition-colors'
  return (
    <div className="flex items-center justify-end gap-3 mt-10 pt-8 border-t border-stroke">
      <span className="text-sm text-content-secondary">{'Share'}</span>
      <button onClick={() => copy(url)} className={cls} aria-label="Copy link">
        {copied ? <CheckIcon className="size-5" /> : <LinkIcon className="size-5" />}
      </button>
      <button onClick={() => openShareWindow('x', url, title)} className={cls} aria-label="Share on X">
        <XIcon className="size-5" />
      </button>
      <button onClick={() => openShareWindow('linkedin', url, title)} className={cls} aria-label="Share on LinkedIn">
        <LinkedInIcon className="size-5" />
      </button>
    </div>
  )
}
