import PlanCta from './PlanCta.jsx'

export default function S01GranolaHowYou() {
  return (
    <section id="pricing" className="flex overflow-visible relative flex-col w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl mt-16 gap-16 md:gap-20 lg:gap-28">
      <div className="flex flex-col col-span-full gap-4 items-center mx-auto max-w-5xl text-center [&_h1]:leading-[0.85] lg:[&_h1]:leading-[0.6] lg:[&_p]:mt-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-balance tracking-[-0.015em] font-quadrant text-3xl sm:text-4xl md:text-5xl lg:text-[68px] text-center">
          {"Granola how you wanna"}
        </h1>
        <p className="col-span-2 max-w-4xl text-2xl text-content-secondary font-light text-balance text-lg sm:text-xl lg:text-2xl text-center">
          {"Get the Granola plan that's right for you and your team, so everyone can be on the same page."}
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="grid gap-6 sm:grid-cols-4 lg:grid-cols-6">
          <div className="rounded-lg border border-oats-neutral-300 flex flex-col col-span-2 p-0 w-full h-full overflow-hidden">
            <div className="flex flex-col bg-white">
              <div className="p-7 border-b border-stroke">
                <h2 className="text-lg">
                  {"Basic"}
                </h2>
                <p className="mt-0.5 text-base leading-snug text-content-secondary">
                  {"Great for a free taste of Granola"}
                </p>
              </div>
              <div className="flex flex-col gap-6 p-7">
                <div className="flex gap-2 items-baseline">
                  <h3 className="text-4xl font-quadrant">
                    {"$0"}
                  </h3>
                  <span className="text-base text-content-secondary">
                    {"per user per month"}
                  </span>
                </div>
                <div className="grid gap-2 w-full grid-cols-1">
                  <PlanCta />
                </div>
                <ul className="flex-1 space-y-2 w-full text-base">
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"AI meeting notes"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"See limited meeting history"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"AI chat within and across meetings"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Shared folders for collaboration"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Customized note templates"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Multi-language support"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Opt out of model training any time"}
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-oats-neutral-300 flex flex-col col-span-2 p-0 w-full h-full overflow-hidden">
            <div className="flex flex-col bg-white">
              <div className="p-7 border-b border-stroke">
                <h2 className="text-lg">
                  {"Business"}
                </h2>
                <p className="mt-0.5 text-base leading-snug text-content-secondary">
                  {"Great for individuals or small teams"}
                </p>
              </div>
              <div className="flex flex-col gap-6 p-7">
                <div className="flex gap-2 items-baseline">
                  <h3 className="text-4xl font-quadrant">
                    {"$14"}
                  </h3>
                  <span className="text-base text-content-secondary">
                    {"per user per month"}
                  </span>
                </div>
                <div className="grid gap-2 w-full grid-cols-1">
                  <PlanCta />
                </div>
                <ul className="flex-1 space-y-2 w-full text-base">
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-neutral-700 text-white shrink-0">
                      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Everything in Basic, plus"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Unlimited meeting notes and history"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Access to advanced AI thinking models and features"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Advanced integrations with Attio, Notion, HubSpot, Affinity, and Zapier"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"Centralized billing & user management"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"MCP integration in all your apps"}
                      </span>
                    </p>
                  </li>
                  <li className="flex gap-2 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <p className="leading-normal whitespace-normal break-words">
                      <span className="">
                        {"API access"}
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-oats-neutral-300 flex flex-col col-span-2 p-0 w-full h-full overflow-hidden sm:col-start-2 lg:col-start-auto">
            <div className="flex flex-col bg-white">
              <div className="p-7 border-b border-stroke">
                <h2 className="text-lg">
                  {"Enterprise"}
                </h2>
                <p className="mt-0.5 text-base leading-snug text-content-secondary">
                  {"Great for larger companies"}
                </p>
              </div>
              <div className="flex flex-col gap-6 p-7">
                <div className="flex gap-2 items-baseline">
                  <h3 className="text-4xl font-quadrant">
                    {"$35"}
                  </h3>
                  <span className="text-base text-content-secondary">
                    {"per user per month"}
                  </span>
                </div>
                <div className="grid gap-2 w-full grid-cols-1">
                  <PlanCta signup />
                  <a className="relative px-6 h-12 lg:h-14 w-full flex items-center justify-center rounded-full bg-oats-green-100 hover:bg-oats-green-100/70 text-content-primary font-medium transition-all whitespace-nowrap" href="/enterprise">
                    {"Learn more"}
                  </a>
                </div>
                <ul className="flex-1 space-y-2 w-full text-base">
                  <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-neutral-700 text-white shrink-0">
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                      </svg>
                      <p className="leading-normal whitespace-normal break-words">
                        <span className="">
                          {"Everything included in Business"}
                        </span>
                      </p>
                    </li>
                    <li className="flex gap-2 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <p className="leading-normal whitespace-normal break-words">
                        <span className="">
                          {"Enterprise-grade security & admin controls"}
                        </span>
                      </p>
                    </li>
                    <li className="flex gap-2 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <p className="leading-normal whitespace-normal break-words">
                        <span className="">
                          {"Single sign-on (SSO)"}
                        </span>
                      </p>
                    </li>
                    <li className="flex gap-2 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <p className="leading-normal whitespace-normal break-words">
                        <span className="">
                          {"Priority support and usage analytics"}
                        </span>
                      </p>
                    </li>
                    <li className="flex gap-2 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <p className="leading-normal whitespace-normal break-words">
                        <span className="">
                          {"Org-wide auto-deletion periods"}
                        </span>
                      </p>
                    </li>
                    <li className="flex gap-2 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <p className="leading-normal whitespace-normal break-words">
                        <span className="">
                          {"Admin controls for sharing & API access"}
                        </span>
                      </p>
                    </li>
                    <li className="flex gap-2 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <p className="leading-normal whitespace-normal break-words">
                        <span className="">
                          {"Opt out of model training for everyone in your team"}
                        </span>
                      </p>
                    </li>
                    <li className="flex gap-2 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="p-1 mt-0.5 rounded-full size-5 bg-oats-green-100 text-oats-neutral-700 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <p className="leading-normal whitespace-normal break-words">
                        <span className="">
                          {"Org-wide notification that Granola is being used"}
                        </span>
                        <span className="inline-block px-1.5 py-0.5 ml-2 text-[10px] font-semibold leading-none text-oats-neutral-700 uppercase tracking-wide rounded-sm bg-oats-green-100">
                          {"pilot"}
                        </span>
                      </p>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 text-content-secondary text-center">
            <span>
              {"Granola contributes 1.5% of your subscription to remove CO₂ from the atmosphere through "}
              <a href="#" title="Stripe Climate" className="underline" target="_blank">
                {"Stripe Climate"}
              </a>
              {"."}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
