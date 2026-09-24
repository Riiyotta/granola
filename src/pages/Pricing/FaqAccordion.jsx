import { useCollapsible, useMultiAccordion } from '../../motion/pricing-page-collapsible.js'

function buildNested(el, html) {
  if (!el || el.firstChild) return
  el.innerHTML = html.replace(/<(\/?)p>/g, '<$1x-p>')
  el.querySelectorAll('x-p').forEach((x) => {
    const p = document.createElement('p')
    while (x.firstChild) p.appendChild(x.firstChild)
    x.replaceWith(p)
  })
}

// Radix Accordion markup as rendered on live (ids/classes/attributes kept 1:1).
function FaqItem({ item, first, open, onToggle }) {
  const { ref, present } = useCollapsible(open)
  const state = open ? 'open' : 'closed'
  return (
    <div data-state={state} data-orientation="vertical" className={`w-full text-left border-b border-stroke${first ? ' border-t border-stroke' : ''}`}>
      <button type="button" aria-controls={item.contentId} aria-expanded={open ? 'true' : 'false'} data-state={state} data-orientation="vertical" id={item.triggerId} className="flex items-center py-5 w-full group" data-radix-collection-item="" onClick={onToggle}>
        <p className="flex-1 text-xl text-left md:text-2xl font-quadrant pr-2">
          {item.q}
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-5 group-data-[state=open]:rotate-180 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]">
          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
        </svg>
      </button>
      <div ref={ref} data-state={state} id={item.contentId} hidden={!present} role="region" aria-labelledby={item.triggerId} data-orientation="vertical" className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down !font-light py-0" style={{"--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)"}}>
        {present && (
          item.answerHtml
            // Live's DOM nests <ul> inside <p> (built via DOM APIs by React). JSX would warn and innerHTML
            // would auto-close the <p>, so the nodes are assembled imperatively.
            ? <div className="qa-answer-content prose-lg" ref={(el) => buildNested(el, item.answerHtml)} />
            : <div className="qa-answer-content prose-lg">{item.answer}</div>
        )}
      </div>
    </div>
  )
}

export default function FaqAccordion({ items }) {
  const { isOpen, toggle } = useMultiAccordion()
  return (
    <div className="col-span-full mx-auto w-full lg:max-w-3xl" data-orientation="vertical">
      {items.map((item, i) => (
        <FaqItem key={item.contentId} item={item} first={i === 0} open={isOpen(item.contentId)} onToggle={() => toggle(item.contentId)} />
      ))}
    </div>
  )
}

// Provider names in the "What SSO providers do you support?" answer (short labels, as on live).
export const SSO_PROVIDERS = ['Okta SAML', 'Entra ID (Azure AD)', 'Google Workspace SAML', 'ADP', 'Auth0', 'CAS', 'ClassLink', 'Cloudflare', 'Custom OIDC', 'Custom SAML', 'CyberArk', 'Duo', 'Entra ID (Azure AD) OIDC', 'Google OIDC', 'JumpCloud', 'Keycloak', 'LastPass', 'Login.gov', 'Microsoft AD FS', 'miniOrange', 'NetIQ', 'Okta OIDC', 'OneLogin', 'Oracle', 'PingFederate', 'PingOne', 'Rippling', 'Salesforce', 'Shibboleth', 'Shibboleth Unsolicited', 'SimpleSAMLphp', 'VMware']

// <p>{intro}<ul>…providers…</ul>{lead} <a>{email}</a> {tail}</p>, as structured on live.
export function ssoAnswerHtml(intro, lead, email, tail) {
  const lis = SSO_PROVIDERS.map((p) => `<li>${p}</li>`).join('')
  return `<p>${intro}<ul class="list-disc pl-5 mt-2">${lis}</ul>${lead} <a href="mailto:${email}">${email}</a> ${tail}</p>`
}
