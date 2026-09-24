import { useRef } from 'react'
import { useBlogType, useBlogListFilter, chipClass, chipTextClass } from '../../motion/blog-filter.js'

export default function S01Blog() {
  const [type, onChip] = useBlogType()
  const listRef = useRef(null)
  useBlogListFilter(listRef, type)
  return (
    <section className="px-6 pt-40 mx-auto w-full max-w-2xl min-h-[80vh]">
      <h1 className="mb-8 text-6xl font-quadrant tracking-tight text-primary">
        {type === 'press' ? "Press" : "Blog"}
      </h1>
      <div className="flex flex-wrap gap-2 -mx-1">
        <a className={chipClass(type !== 'blog' && type !== 'press')} href="/blog" onClick={onChip}>
          <div className="flex-none rounded-full text-oats-neutral-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-5">
              <path d="M3.75 6.95C3.75 5.8299 3.75 5.26984 3.96799 4.84202C4.15973 4.46569 4.46569 4.15973 4.84202 3.96799C5.26984 3.75 5.8299 3.75 6.95 3.75H10.25V10.25H3.75V6.95Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.75 3.75H17.05C18.1701 3.75 18.7302 3.75 19.158 3.96799C19.5343 4.15973 19.8403 4.46569 20.032 4.84202C20.25 5.26984 20.25 5.8299 20.25 6.95V10.25H13.75V3.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.75 13.75H10.25V20.25H6.95C5.8299 20.25 5.26984 20.25 4.84202 20.032C4.46569 19.8403 4.15973 19.5343 3.96799 19.158C3.75 18.7302 3.75 18.1701 3.75 17.05V13.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.75 13.75H20.25V17.05C20.25 18.1701 20.25 18.7302 20.032 19.158C19.8403 19.5343 19.5343 19.8403 19.158 20.032C18.7302 20.25 18.1701 20.25 17.05 20.25H13.75V13.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className={chipTextClass(type !== 'blog' && type !== 'press')}>
            {"All"}
          </p>
        </a>
        <a className={chipClass(type === 'blog')} href="/blog?type=blog" onClick={onChip}>
          <div className="flex-none rounded-full text-oats-green-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-5">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className={chipTextClass(type === 'blog')}>
            {"Blog"}
          </p>
        </a>
        <a className="flex gap-1 items-center py-1.5 pr-3 pl-2.5 rounded-full border transition-colors border-stroke hover:bg-oats-neutral-100" href="#">
          <div className="flex-none rounded-full text-oats-purple-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-5">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-base font-medium text-oats-neutral-700">
            {"Announcements"}
          </p>
        </a>
        <a className={chipClass(type === 'press')} href="/blog?type=press" onClick={onChip}>
          <div className="flex-none rounded-full text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-5">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <p className={chipTextClass(type === 'press')}>
            {"Press"}
          </p>
        </a>
      </div>
      <div ref={listRef} className="relative mt-8 mb-24 -ml-1">
        <div className="hidden absolute inset-y-2 left-4 w-px bg-stroke md:block" />
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"How sales teams use Granola"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Bardia Shahali" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/bardia-shahali.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Bardia Shahali"}
                  </p>
                </div>
                <span className="text-content-secondary select-none" aria-hidden="true">
                  {"·"}
                </span>
                <div className="flex items-center cursor-pointer">
                  <img alt="Camilla Bier" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/camilla-bier.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Camilla Bier"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"August 17"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="/blog/granola-for-apple-watch">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Granola for Apple Watch"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jack" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jack.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jack"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"July 28"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Granola for Android is here!"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jack" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jack.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jack"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"July 1"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"Why Granola doesn't use a bot"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Chris Pedregal" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/chris.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Chris Pedregal"}
                  </p>
                </div>
                <span className="text-content-secondary select-none" aria-hidden="true">
                  {"·"}
                </span>
                <div className="flex items-center cursor-pointer">
                  <img alt="Sam Stephenson" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/sam.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Sam Stephenson"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"June 1"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"New: Briefs prepare you for your next meeting as you join"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jack" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jack.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jack"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"May 20"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"--dangerously-skip-permissions is the only safe mode"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jim Fisher" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jim.avif" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jim Fisher"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"May 11"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"How Granola thinks about designing agents"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Toby" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/toby.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Toby"}
                  </p>
                </div>
                <span className="text-content-secondary select-none" aria-hidden="true">
                  {"·"}
                </span>
                <div className="flex items-center cursor-pointer">
                  <img alt="Robert" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/robert.jpeg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Robert"}
                  </p>
                </div>
                <span className="text-content-secondary select-none" aria-hidden="true">
                  {"·"}
                </span>
                <div className="flex items-center cursor-pointer">
                  <img alt="Xiuting" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/xiuting.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Xiuting"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"May 6"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"How I shipped Granola’s San Francisco office in one 14-day trip"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Ursula Wild" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/blogImages/ursula%20SF%20post/ursula.jpeg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Ursula Wild"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"April 27"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Granola Chat just got smarter"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jack" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jack.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jack"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"April 21"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Granola raises $125M to put your company's context to work"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Chris Pedregal" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/chris.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Chris Pedregal"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"March 25"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"How to Take Good Meeting Notes: 7 Strategies That Work"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"BestReviews"}
              </span>
              <p className="text-content-secondary">
                {"February 26"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"So, you think it's easy to change an app icon?"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Dante" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/dante.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Dante"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"February 9"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Granola MCP: Connect your meeting notes to Claude, ChatGPT, and Cursor"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jack" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jack.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jack"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"February 4"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Meet the new look Granola"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Sam Stephenson" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/sam.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Sam Stephenson"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"February 2"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"I Spent 10 Years Taking Bad Notes. This AI Changed Everything"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Feisworld"}
              </span>
              <p className="text-content-secondary">
                {"January 13"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"How we wrote the prompts behind Granola's Crunched 2025"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jo Barrow" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jo.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jo Barrow"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"December 17, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Introducing Recipes, in the all-new Granola Chat"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Chris Pedregal" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/chris.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Chris Pedregal"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"September 30, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"When back becomes broken: how we found a tiny navigation bug "}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="nick" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/nick.png" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"nick"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"July 7, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Granola 2.0: A second brain for your team"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Chris Pedregal" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/chris.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Chris Pedregal"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"May 14, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"Start with a dot-plot"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jim Fisher" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jim.avif" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jim Fisher"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"May 10, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"Can Granola's AI meeting notes eat bigger apps for breakfast?"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Upstarts Media"}
              </span>
              <p className="text-content-secondary">
                {"April 2, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"Sam Stephenson – the journey of designing an AI startup"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Dive Club"}
              </span>
              <p className="text-content-secondary">
                {"March 28, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"Chris Pedregal — building Granola"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Invest Like the Best"}
              </span>
              <p className="text-content-secondary">
                {"February 25, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"Don't animate height!"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jim Fisher" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jim.avif" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jim Fisher"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"January 29, 2025"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"How to build a truly useful AI product"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Every"}
              </span>
              <p className="text-content-secondary">
                {"December 9, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"Our biggest stories and favorite things of 2024"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"The Verge"}
              </span>
              <p className="text-content-secondary">
                {"December 5, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"A recipe for everyday AI"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Digital Frontier"}
              </span>
              <p className="text-content-secondary">
                {"December 3, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"Using AI to be more present and effective in your meetings thanks to Granola"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Alex Rainert"}
              </span>
              <p className="text-content-secondary">
                {"November 22, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"Granola raises $20M to build the AI notepad that makes you smarter"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Chris Pedregal" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/chris.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Chris Pedregal"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"October 23, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"VCs love using the AI meeting notepad Granola, so they gave it $20M"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"TechCrunch"}
              </span>
              <p className="text-content-secondary">
                {"October 23, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"Chris Pedregal: Revolutionizing meetings with AI"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Lightspeed Venture Partners"}
              </span>
              <p className="text-content-secondary">
                {"October 23, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"How to evolve a product"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jim Fisher" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jim.avif" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jim Fisher"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"June 25, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="press" className="flex gap-2 px-4 py-3 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group" target="_blank" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-2 text-oats-blue-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6">
              <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3C14.2091 3 16 7.02944 16 12C16 16.9706 14.2091 21 12 21Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
              <path d="M21 12H3" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="square" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-quadrant leading-tight tracking-[-0.015em] text-primary">
              {"The best AI note-taking tools for meetings"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="inline-flex ml-1.5 align-middle size-4 text-content-secondary relative -top-[1px]">
                <path d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <div className="flex items-center space-x-2 text-base">
              <span className="font-medium text-secondary">
                {"Time"}
              </span>
              <p className="text-content-secondary">
                {"June 12, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group py-3" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-green-300">
              <path d="M16.25 12V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V17.75C2.75 19.1307 3.86929 20.25 5.25 20.25H18.5M16.25 12V17.75C16.25 19.1307 17.3693 20.25 18.75 20.25C20.1307 20.25 21.25 19.1307 21.25 17.75V14C21.25 12.8954 20.3546 12 19.25 12H16.25ZM6.75 15.75H12.25M6.75 7.75H12.25V12.25H6.75V7.75Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            <h2 className="text-primary font-sans font-normal text-lg leading-tight">
              {"How to Get the Best Out of Granola: Your Ultimate Guide"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Jo Barrow" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/jo.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Jo Barrow"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"May 24, 2024"}
              </p>
            </div>
          </div>
        </a>
        <a data-kind="post" className="flex gap-2 px-4 -mx-4 mb-8 rounded-lg hover:bg-oats-neutral-100 group pt-3 pb-4" href="#">
          <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-oats-neutral-100 hidden md:grid -mt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"--icon-stroke-width": "1.875"}} className="flex-none size-6 text-oats-purple-200">
              <path d="M2.75 20.25C2.75 20.8023 3.19771 21.25 3.75 21.25H4.80556C5.94081 21.25 6.86111 20.3297 6.86111 19.1945C6.86111 18.0592 5.94081 17.1389 4.80556 17.1389C3.6703 17.1389 2.75 18.0592 2.75 19.1945V20.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.4469 13.25H4.93454C4.17548 13.25 3.69317 12.4375 4.05665 11.7711L5.68148 8.7923C6.03194 8.14977 6.70538 7.75 7.43727 7.75H10.7893C11.0696 7.75 11.3364 7.63145 11.5293 7.42807C14.039 4.78199 16.7697 3.06408 20.2504 2.78892C20.801 2.7454 21.2546 3.199 21.2111 3.74957C20.9359 7.23025 19.218 9.961 16.5719 12.4707C16.3685 12.6636 16.25 12.9304 16.25 13.2107V16.5627C16.25 17.2946 15.8502 17.9681 15.2077 18.3185L12.2289 19.9434C11.5625 20.3068 10.75 19.8245 10.75 19.0655V17.5531C10.75 17.2879 10.6446 17.0335 10.4571 16.846L7.154 13.5429C6.96647 13.3554 6.71211 13.25 6.4469 13.25Z" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M6.85938 13.25L11.2274 7.75" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
              <path d="M16.25 12.7709L10.75 17.1389" stroke="currentColor" strokeWidth="var(--icon-stroke-width)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-quadrant text-2xl leading-tighter tracking-[-0.015em] ">
              {"Introducing Granola: the AI-powered notepad for meetings"}
            </h2>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center cursor-pointer">
                  <img alt="Chris Pedregal" loading="lazy" width="24" height="24" decoding="async" className="rounded-sm size-6" style={{"color": "transparent"}} src="/team/chris.jpg" />
                  <p className="mt-0 mb-0 ml-2 font-medium">
                    {"Chris Pedregal"}
                  </p>
                </div>
              </div>
              <p className="text-content-secondary">
                {"May 22, 2024"}
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
