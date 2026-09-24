import './tally-form.css'
import { useTallyForm, useRequiredBadgePositions } from '../../motion/contact-form.js'

// Native port of the live Tally embed (iframe "Contact sales v2", tally.so/embed/KY1kDD).
// Markup and class names mirror the iframe's rendered DOM; styles live in ./tally-form.css.
// On live the iframe sits under the header with width 100% (672px at 1440, 358px at 390).

const CHOICE = 'de557ec5-d49c-4b3a-b2de-a41e48c53633'
const OPTION_B = 'ff62c87f-3fe3-4897-87ce-c9a77b130690'
const FIELDS = [
  { id: 'c249bbd6-fe36-4edc-9988-099241eb449b', type: 'email', label: "What's your work email address?", placeholder: 'john@acme.com', autoComplete: 'email', block: '1b0b9ec3-bd55-4ac6-abc1-7056706a48c7', title: 'a7d715af-28b0-46c7-b014-7c62865277fc' },
  { id: '352048d1-3358-4d94-8205-6eab0b60bda3', type: 'text', label: "What's your first name?", placeholder: '', block: '86872797-ba24-4fcd-a90d-9410058a42f3', title: '06b98aea-e55d-4551-bbe8-d4b3ce161746' },
  { id: '57f9268e-87df-4b26-9453-19769e015ea9', type: 'text', label: "What's your last name?", placeholder: '', block: 'f8d585ed-2cfd-41fe-92e5-f46449091c28', title: '3fcbfe49-8105-48ff-a6c7-b0120f021a7e' },
  { id: 'db2b20c2-2136-4464-bb32-a6f7d443ae1b', type: 'text', label: "What's your role?", placeholder: '', block: '2e50dc9a-38cc-4b9f-8c03-61a8850e4039', title: '26c96002-5d9b-4562-8ba5-5ae253ede7d0' },
  { id: '45e8b5a3-8fd5-4a01-82dd-7a1e4f827487', type: 'text', label: "What's your company name?", placeholder: 'Acme', block: '2c8303c1-f94b-424b-9894-3d1210a2f719', title: 'd11a020b-d0dc-4486-8f36-19959f7347b3' },
  { id: CHOICE, type: 'choice', label: 'What do you need help with?', title: 'fdd4095f-2f87-4ceb-868a-5fbb41aee074' },
  // Tally conditional logic on the choice (live): B swaps in its own title + helper + textarea.
  { id: 'be54e1ec-caff-4f9c-9c07-14a75615f70c', type: 'textarea', label: 'Share any more context about your enterprise plan requirements', block: 'b6569496-fff2-43ce-8c65-a2f27a37d557', title: 'b69ed2de-7127-4244-a614-a45f410b0235', when: (v) => v[CHOICE] !== OPTION_B },
  { id: '8388af0c-18e3-4eef-b013-e6a304136b97', type: 'textarea', label: 'How can we help?', block: '6846d309-ac23-43c4-9e92-559e97699fe9', title: 'c6fe97f6-a813-4ee4-a8ab-b98c1964f5e6', when: (v) => v[CHOICE] === OPTION_B,
    help: { block: '12d85c14-9beb-481d-b99a-d331e7f799a4', text: 'Please give us as much detail as possible - it really helps us understand and resolve your issues faster!' } },
]
const OPTIONS = [
  { id: '3ad2a2c2-5fd5-4f12-a162-9abf402d627f', badge: 'A', label: "I'd like to learn more about Granola for Enterprise", container: 'eIKWtT' },
  { id: OPTION_B, badge: 'B', label: "I need help using Granola's product", container: 'hqnSMA' },
]

function Title({ field }) {
  return (
    <div className={`sc-afe7e3c-6 gIdNap tally-block tally-block-title tally-block-${field.title}`} data-block-type="TITLE">
      <div className="sc-48b4edad-0">
        <div className="sc-48b4edad-1 ecyRHW title-content">
          <h3 id={`label_${field.id}`} className="sc-48b4edad-2 jAIlGF">{field.label}</h3>
          <div aria-hidden="true" className="sc-b6a4647c-0 iGkloU tally-required-indicator">
            <span>*</span>
            <div className="sc-ece1a7e2-0 kCkkwG tooltip"><span>Required</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ValidationError({ id, message }) {
  return (
    <div id={`error_${id}`} className="sc-99781b1e-0 fnaTaM tally-validation-error" role="alert">
      <span>{message}</span>
    </div>
  )
}

export default function TallyContactForm() {
  const form = useTallyForm(FIELDS)
  const rootRef = useRequiredBadgePositions()
  const { values, errors, submitting, register, onChange, onBlur, onSubmit } = form

  const aria = (f) => ({
    'aria-labelledby': `label_${f.id}`,
    'aria-required': 'true',
    'aria-invalid': errors[f.id] ? 'true' : 'false',
    ...(errors[f.id] ? { 'aria-describedby': `error_${f.id}` } : {}),
  })

  const renderField = (f) => {
    if (f.type === 'choice') {
      const choiceErr = errors[f.id]
      return (
        <fieldset key={f.id} aria-labelledby={`label_${f.id}`} className="sc-afe7e3c-1 eWJecT">
          {OPTIONS.map((o, i) => {
            const last = i === OPTIONS.length - 1
            const checked = values[f.id] === o.id
            return (
              <div key={o.id} className={`sc-afe7e3c-6 gIdNap tally-block tally-block-multiple-choice-option tally-block-${o.id}`} data-block-type="MULTIPLE_CHOICE_OPTION">
                <div className={`sc-fa9d2b45-0 ${last && choiceErr ? 'fXoelo' : o.container} tally-multiple-choice-option `}>
                  <div className={`sc-fa9d2b45-1 ${checked ? 'lgcVcU' : 'cozYva'}`}>
                    <div className="sc-fa9d2b45-2 xCwDP">
                      <div className="sc-d862227c-0 gyEwnr tally-enumeration-badge tally-alphabet-badge">{o.badge}</div>
                      <input
                        ref={i === 0 ? register(f.id) : undefined}
                        id={`choice_${o.id}`}
                        type="radio"
                        required
                        name={`multiple_choice_${f.id}`}
                        value={o.id}
                        checked={checked}
                        onChange={onChange(f)}
                        {...(choiceErr ? { 'aria-describedby': `error_${f.id}` } : {})}
                      />
                      <label htmlFor={`choice_${o.id}`}>{o.label}</label>
                    </div>
                  </div>
                </div>
                {last && choiceErr && <ValidationError id={f.id} message={choiceErr} />}
              </div>
            )
          })}
        </fieldset>
      )
    }
    if (f.type === 'textarea') {
      return (
        <div key={f.id} className={`sc-afe7e3c-6 gIdNap tally-block tally-block-textarea tally-block-${f.block}`} data-block-type="TEXTAREA">
          <div className="sc-88c4dca6-0 jjcQTI">
            <div className="sc-88c4dca6-1 coXIzK">
              <textarea ref={register(f.id)} id={f.id} placeholder="" required {...aria(f)} className="sc-110b2974-0 fAofpq" value={values[f.id]} onChange={onChange(f)} />
              {errors[f.id] && <ValidationError id={f.id} message={errors[f.id]} />}
            </div>
          </div>
        </div>
      )
    }
    return (
      <div key={f.id} className={`sc-afe7e3c-6 gIdNap tally-block tally-block-input-${f.type} tally-block-${f.block}`} data-block-type={f.type === 'email' ? 'INPUT_EMAIL' : 'INPUT_TEXT'}>
        <div className="sc-a4b24eaf-0 kFYUzQ">
          <div className="sc-ea4a4f5c-3 sc-a4b24eaf-1 cA-dnKf">
            <input
              ref={register(f.id)}
              id={f.id}
              type={f.type}
              placeholder={f.placeholder}
              required
              autoComplete={f.autoComplete}
              {...aria(f)}
              className="sc-40c6a8ef-0 dqiwcg"
              value={values[f.id]}
              onChange={onChange(f)}
              onBlur={onBlur(f)}
            />
            {errors[f.id] && <ValidationError id={f.id} message={errors[f.id]} />}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={rootRef} className="tally-embed" role="group" aria-label="Contact sales v2">
      <section className="sc-ea4a4f5c-2 sc-de0e1144-3 fzOfeN dzQoVF tally-page tally-page-1">
        <form noValidate onSubmit={onSubmit}>
          <progress max="1" value="1" aria-label="Form progress" aria-valuetext="Page 1 of 1">Page 1 of 1</progress>
          <div className="sc-afe7e3c-0 fMaEvw">
            <div className="sc-afe7e3c-6 dqpeHA tally-block tally-block-form-title" data-block-type="FORM_TITLE">
              <h1 className="sc-b32ad093-0 bXiazr">Contact sales v2</h1>
            </div>
            {FIELDS.filter((f) => !f.when || f.when(values)).map((f) => [
              <Title key={`t-${f.id}`} field={f} />,
              f.help && (
                <div key={`h-${f.id}`} className={`sc-afe7e3c-6 gIdNap tally-block tally-block-text tally-block-${f.help.block}`} data-block-type="TEXT">
                  <div className="sc-498a9a3e-0 djWurD tally-text">{f.help.text}</div>
                </div>
              ),
              renderField(f),
            ])}
          </div>
          <div className="sc-de0e1144-2 QndZJ tally-submit-button">
            <div>
              <button type="submit" tabIndex={0} className="sc-3a847d-6 hCqqxU" aria-busy={submitting || undefined}>
                <span className="sc-3a847d-2 buzsHn" style={submitting ? { opacity: 0 } : undefined}>Submit</span>
                <i aria-hidden="true" className="sc-3a847d-2 sc-3a847d-3 buzsHn fBOfvN" style={submitting ? { opacity: 0 } : undefined}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </i>
                <span aria-hidden="true" className="sc-3a847d-2 sc-3a847d-4 buzsHn gtCrdv" style={submitting ? { opacity: 1 } : undefined}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader sc-94bc404-0 fgTjLL activity-indicator" aria-hidden="true">
                    <path d="M12 2v4" />
                    <path d="m16.2 7.8 2.9-2.9" />
                    <path d="M18 12h4" />
                    <path d="m16.2 16.2 2.9 2.9" />
                    <path d="M12 18v4" />
                    <path d="m4.9 19.1 2.9-2.9" />
                    <path d="M2 12h4" />
                    <path d="m4.9 4.9 2.9 2.9" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
