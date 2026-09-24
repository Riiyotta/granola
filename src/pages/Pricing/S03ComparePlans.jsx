export default function S03ComparePlans() {
  return (
    <section id="compare-plans" className="flex overflow-visible relative flex-col gap-8 lg:gap-16 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl">
      <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
          {"Compare plans"}
        </h2>
      </div>
      <div className="w-full">
        <table role="table" className="w-full max-w-none! overflow-visible! whitespace-normal! border-separate border-spacing-0 rounded-2xl border border-stroke bg-white text-left max-lg:block! lg:table!">
          <thead role="rowgroup" className="sticky top-14 z-30 max-lg:block md:top-16">
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="col" role="columnheader" className="rounded-tl-2xl border-b border-stroke bg-white px-6 py-5 align-top text-base font-medium text-content-secondary max-lg:hidden lg:min-w-64">
                {"Features"}
              </th>
              <th scope="col" role="columnheader" className="border-b border-l border-stroke bg-white px-2 py-3 text-center align-top last:rounded-tr-2xl max-lg:nth-2:rounded-tl-2xl max-lg:nth-2:border-l-0 lg:min-w-52 lg:px-4 lg:py-5 lg:text-left">
                <div className="flex flex-col items-center gap-1 lg:flex-row lg:justify-between">
                  <span className="text-base font-medium text-content-primary lg:text-lg">
                    {"Basic"}
                  </span>
                  <a aria-label="Get started with Basic" className="inline-flex items-center gap-0.5 text-sm font-medium text-content-secondary underline-offset-4 transition-colors hover:text-content-primary hover:underline lg:text-lg" href="#">
                    {"Get started"}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4 lg:size-5">
                      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" role="columnheader" className="border-b border-l border-stroke bg-white px-2 py-3 text-center align-top last:rounded-tr-2xl max-lg:nth-2:rounded-tl-2xl max-lg:nth-2:border-l-0 lg:min-w-52 lg:px-4 lg:py-5 lg:text-left">
                <div className="flex flex-col items-center gap-1 lg:flex-row lg:justify-between">
                  <span className="text-base font-medium text-content-primary lg:text-lg">
                    {"Business"}
                  </span>
                  <a aria-label="Get started with Business" className="inline-flex items-center gap-0.5 text-sm font-medium text-content-secondary underline-offset-4 transition-colors hover:text-content-primary hover:underline lg:text-lg" href="#">
                    {"Get started"}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4 lg:size-5">
                      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" role="columnheader" className="border-b border-l border-stroke bg-white px-2 py-3 text-center align-top last:rounded-tr-2xl max-lg:nth-2:rounded-tl-2xl max-lg:nth-2:border-l-0 lg:min-w-52 lg:px-4 lg:py-5 lg:text-left">
                <div className="flex flex-col items-center gap-1 lg:flex-row lg:justify-between">
                  <span className="text-base font-medium text-content-primary lg:text-lg">
                    {"Enterprise"}
                  </span>
                  <a aria-label="Learn more about Enterprise" className="inline-flex items-center gap-0.5 text-sm font-medium text-content-secondary underline-offset-4 transition-colors hover:text-content-primary hover:underline lg:text-lg" href="/enterprise">
                    {"Learn more"}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-4 lg:size-5">
                      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="max-lg:block">
            <tr role="row" className="max-lg:block">
              <th scope="rowgroup" role="columnheader" colSpan="4" className=" border-stroke bg-oats-neutral-100 px-4 py-3 text-sm font-medium uppercase tracking-wide text-content-secondary max-lg:block lg:px-6">
                {"Capture & Notes"}
              </th>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"AI meeting notes"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Bot-free, device-audio capture"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Desktop, iOS, Android & Apple Watch apps"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Speaker tagging"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Customized note templates"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Multi-language support"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Recipes"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Pre-meeting briefs"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Follow-up emails"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Workspace-wide dictionary"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Let people know you’re using Granola"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Per user"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Per user"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Admin-enforceable"}
                </span>
              </td>
            </tr>
          </tbody>
          <tbody role="rowgroup" className="max-lg:block">
            <tr role="row" className="max-lg:block">
              <th scope="rowgroup" role="columnheader" colSpan="4" className="border-t border-stroke bg-oats-neutral-100 px-4 py-3 text-sm font-medium uppercase tracking-wide text-content-secondary max-lg:block lg:px-6">
                {"History & Search"}
              </th>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Meeting history"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"30 days"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Unlimited"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Unlimited"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"AI chat across meetings"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Auto only"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Auto + model selection"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Auto + model selection"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Workspace usage analytics"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
          </tbody>
          <tbody role="rowgroup" className="max-lg:block">
            <tr role="row" className="max-lg:block">
              <th scope="rowgroup" role="columnheader" colSpan="4" className="border-t border-stroke bg-oats-neutral-100 px-4 py-3 text-sm font-medium uppercase tracking-wide text-content-secondary max-lg:block lg:px-6">
                {"Collaboration & Integrations"}
              </th>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Shared folders"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Integrations with Slack"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Integrations (Notion, Zapier, HubSpot & more)"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Advanced integrations (e.g. Salesforce)"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"MCP (Claude, ChatGPT, etc.)"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Personal notes from the last 30 days"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Personal and public workspace notes"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Admin-configurable personal and public workspace notes"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"API access"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Admin controls for MCP, API & integrations"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Centralized billing & user management"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
          </tbody>
          <tbody role="rowgroup" className="max-lg:block">
            <tr role="row" className="max-lg:block">
              <th scope="rowgroup" role="columnheader" colSpan="4" className="border-t border-stroke bg-oats-neutral-100 px-4 py-3 text-sm font-medium uppercase tracking-wide text-content-secondary max-lg:block lg:px-6">
                {"Trust & Control"}
              </th>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Configurable transcript retention & auto-deletion"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Per user"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Per user"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Workspace-wide admin policy"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Workspace-wide sharing settings"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Model training opt-out"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Per user"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Per user"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Workspace-wide"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Audio deleted after transcription"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"SOC 2 Type II certified"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"HIPAA-compliant workspaces"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"DPA available"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Single sign-on (SSO)"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"SCIM group provisioning"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"MDM/Intune app wrapping (iOS)"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Audit API"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span aria-hidden="true" className="text-content-secondary">
                  {"–"}
                </span>
                <span className="sr-only">
                  {"Not included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
          </tbody>
          <tbody role="rowgroup" className="max-lg:block">
            <tr role="row" className="max-lg:block">
              <th scope="rowgroup" role="columnheader" colSpan="4" className="border-t border-stroke bg-oats-neutral-100 px-4 py-3 text-sm font-medium uppercase tracking-wide text-content-secondary max-lg:block lg:px-6">
                {"Support"}
              </th>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Join Labs (early access)"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="mx-auto size-6 rounded-full bg-oats-green-100 p-1 text-oats-neutral-700">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">
                  {"Included"}
                </span>
              </td>
            </tr>
            <tr role="row" className="max-lg:grid max-lg:grid-cols-3">
              <th scope="row" role="rowheader" className="border-t border-stroke px-4 pb-1 pt-3 text-sm font-medium text-content-primary max-lg:col-span-3 lg:px-6 lg:py-4 lg:text-base">
                {"Support level"}
              </th>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Standard"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Standard"}
                </span>
              </td>
              <td role="cell" className="flex items-center justify-center text-pretty border-stroke px-2 pb-3 pt-1 text-center text-sm text-content-secondary lg:table-cell lg:border-l lg:border-t lg:px-4 lg:py-4 lg:text-base">
                <span>
                  {"Dedicated"}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
