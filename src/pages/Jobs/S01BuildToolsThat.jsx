import { PLACEHOLDER_TWEETS } from './placeholder-tweets.js'
import HeroCollage from './HeroCollage.jsx'
import TeamSection from './TeamSection.jsx'
import LifeGallery from './LifeGallery.jsx'
import PreviewableImage from './PreviewableImage.jsx'

export default function S01BuildToolsThat() {
  return (
    <section className="overflow-x-visible overflow-y-clip flex-1 px-6 pt-24 md:pt-[60vh] mx-auto w-full max-w-6xl min-h-[80vh]">
      <div className="absolute inset-x-0 top-0 h-[60vh]">
        <HeroCollage />
      </div>
      <div className="pb-8 tracking-tight md:mb-4 border-0 md:border-b-[0.5px] border-stroke text-content-primary">
        <h1 className="w-full max-w-3xl text-4xl md:text-5xl lg:text-[68px] font-quadrant tracking-[-0.015em] text-balance">
          {"Build tools that help humans "}
          <span className="relative inline-block">
            <span className="sr-only">
              {"think"}
            </span>
            <img alt="" aria-hidden="true" loading="lazy" width="400" height="200" decoding="async" className="inline-block h-[1.2em] w-auto -translate-y-[0.2em]" style={{"color": "transparent"}} src="/handwriting/handwriting-think.svg" />
          </span>
          {" better"}
        </h1>
        <p className="mt-6 w-full text-xl lg:text-2xl text-balance font-light text-content-secondary">
          {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length."}
        </p>
      </div>
      <div className="flex flex-col grid-cols-5 gap-16 antialiased md:gap-16 lg:gap-24 md:grid">
        <aside className="relative col-span-2 col-start-4 self-start md:-top-[22px] md:-mb-[22px] lg:-top-[30px] lg:-mb-[30px]">
          <div className="md:top-32 md:sticky">
            <div className="@container top-0 p-4 py-5 w-full rounded-lg border-[0.5px] border-stroke bg-white">
              <div className="@sm:grid grid-cols-2">
                <div className="">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary ">
                    {"Design"}
                  </h3>
                  <ul className="grid ">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🧑‍🎨"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Designer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="@sm:col-span-2">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary mt-4">
                    {"Engineering"}
                  </h3>
                  <ul className="grid @sm:grid-cols-2 gap-x-2">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"📈"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Growth Engineer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🔊"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Engineer (Transcription)"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🔐"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Security Engineer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🪟"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Engineer (Windows)"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"⚙️"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Engineer (Backend)"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🧩"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Engineer (Full Stack)"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🤖"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"AI Engineer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="@sm:col-span-2">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary mt-4">
                    {"Operations"}
                  </h3>
                  <ul className="grid @sm:grid-cols-2 gap-x-2">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🧑‍💻"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Operations Generalist"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🤖"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Revenue Operations Lead - US"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="@sm:col-span-2">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary mt-4">
                    {"Sales"}
                  </h3>
                  <ul className="grid @sm:grid-cols-2 gap-x-2">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Sales Development Representative"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Sales Development Representative"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🌟"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Customer Success Manager"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Account Executive, High Velocity"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Account Executive, Enterprise"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Account Executive, Mid Market"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary mt-4">
                    {"Tech"}
                  </h3>
                  <ul className="grid ">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"👩‍🍳"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Design Engineer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mx-auto mt-4 max-w-md text-sm md:px-6 md:text-center text-content-secondary text-balance">
              {"Interested but don't see a match? We're always interested in hearing from passionate folks:  "}
              <a href="#" title="Join our talent pool" className="underline hover:text-content-primary">
                {"Join our talent pool"}
              </a>
            </p>
          </div>
        </aside>
        <div className="flex flex-col col-span-3 col-start-1 row-start-1 gap-4 -mt-4 text-lg md:mt-0 md:pt-8 text-content-primary">
          <h2 className="text-2xl md:text-3xl text-content-primary font-quadrant tracking-[-0.015em]">
            {"Make our dent in the universe"}
          </h2>
          <p className="leading-relaxed">
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar places. Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original."}
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl text-content-primary font-quadrant tracking-[-0.015em]">
            {"We're humans, building for humans"}
          </h2>
          <p className="leading-relaxed">
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar places. Placeholder copy for this block. Replace it with your own words to keep the."}
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl text-content-primary font-quadrant tracking-[-0.015em]">
            {"Designed in London, built for the world"}
          </h2>
          {" "}
          <p className="leading-relaxed">
            {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar places. Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph."}
          </p>
        </div>
        <div className="col-span-5 h-px bg-stroke" />
        <div className="col-span-2 text-xl leading-tight text-content-secondary">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-quadrant tracking-[-0.015em] text-balance text-content-primary">
            {"Momentum"}
          </h2>
          <p className="mt-4 text-xl lg:text-2xl text-balance text-oats-neutral-700 font-light">
            {"Now is a great time to be joining Granola. Here are a few things that have us excited."}
          </p>
        </div>
        <div className="flex flex-col col-span-3 gap-12 mt-2">
          <div className="flex gap-6 w-full items-start">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-yellow-200 size-8">
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Investors"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"We've raised a $125M Series C at a $1.5bn valuation, led by Index Ventures and Kleiner Perkins. Our investors include:"}
                </span>
              </p>
              <ul className="ml-4 text-base list-disc text-content-secondary">
                <li>
                  {"Top tier VC funds: Index Ventures, Kleiner Perkins, Lightspeed, Spark, NFDG"}
                </li>
                <li>
                  {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its length so line breaks land in similar places. Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the."}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-6 w-full items-start">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-red-200 size-8">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches."}
              </p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="flex h-16 w-full items-center justify-center rounded-lg border-[0.5px] border-stroke px-5 py-3">
                  <span role="img" aria-label="Vanta" className="inline-block max-w-full bg-ink-primary " style={{"width": "85px", "aspectRatio": "85 / 21.25", "maskImage": "url(\"/homepageAssets/logoWall/vanta.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/vanta.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                </div>
                <div className="flex h-16 w-full items-center justify-center rounded-lg border-[0.5px] border-stroke px-5 py-3">
                  <span role="img" aria-label="Cursor" className="inline-block max-w-full bg-ink-primary " style={{"width": "108.75px", "aspectRatio": "108.75 / 26.25", "maskImage": "url(\"/homepageAssets/logoWall/cursor.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/cursor.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                </div>
                <div className="flex h-16 w-full items-center justify-center rounded-lg border-[0.5px] border-stroke px-5 py-3">
                  <span role="img" aria-label="Lovable" className="inline-block max-w-full bg-ink-primary " style={{"width": "117px", "aspectRatio": "117 / 20", "maskImage": "url(\"/homepageAssets/logoWall/lovable.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/lovable.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                </div>
                <div className="flex h-16 w-full items-center justify-center rounded-lg border-[0.5px] border-stroke px-5 py-3">
                  <span role="img" aria-label="Linear" className="inline-block max-w-full bg-ink-primary " style={{"width": "101.25px", "aspectRatio": "101.25 / 25", "maskImage": "url(\"/homepageAssets/logoWall/linear.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/linear.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                </div>
                <div className="flex h-16 w-full items-center justify-center rounded-lg border-[0.5px] border-stroke px-5 py-3">
                  <span role="img" aria-label="Replit" className="inline-block max-w-full bg-ink-primary " style={{"width": "112.5px", "aspectRatio": "112.5 / 26.25", "maskImage": "url(\"/homepageAssets/logoWall/replit.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/replit.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                </div>
                <div className="flex h-16 w-full items-center justify-center rounded-lg border-[0.5px] border-stroke px-5 py-3">
                  <span role="img" aria-label="PostHog" className="inline-block max-w-full bg-ink-primary " style={{"width": "122.5px", "aspectRatio": "122.5 / 21.25", "maskImage": "url(\"/homepageAssets/logoWall/posthog.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/posthog.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                </div>
                <div className="flex h-16 w-full items-center justify-center rounded-lg border-[0.5px] border-stroke px-5 py-3">
                  <span role="img" aria-label="Intercom" className="inline-block max-w-full bg-ink-primary " style={{"width": "131.25px", "aspectRatio": "131.25 / 21.25", "maskImage": "url(\"/homepageAssets/logoWall/intercom.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/intercom.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                </div>
                <div className="flex h-16 w-full items-center justify-center rounded-lg border-[0.5px] border-stroke px-5 py-3">
                  <span role="img" aria-label="Brex" className="inline-block max-w-full bg-ink-primary " style={{"width": "95px", "aspectRatio": "95 / 25", "maskImage": "url(\"/homepageAssets/logoWall/brex.svg\")", "WebkitMaskImage": "url(\"/homepageAssets/logoWall/brex.svg\")", "maskRepeat": "no-repeat", "WebkitMaskRepeat": "no-repeat", "maskPosition": "center", "WebkitMaskPosition": "center", "maskSize": "contain", "WebkitMaskSize": "contain"}} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-green-300 size-8">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and."}
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-purple-200 size-8">
                <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly."}
              </p>
            </div>
          </div>
        </div>
        <TeamSection />
        <div className="col-span-5 h-[0.5px] bg-stroke" />
        <div className="col-span-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-quadrant tracking-[-0.015em] text-balance text-content-primary">
            {"Benefits & Perks"}
          </h2>
        </div>
        <div className="flex flex-col col-span-3 gap-12 mt-2">
          <div className="flex gap-6 w-full items-start">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-yellow-200 size-8">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly matches its."}
              </p>
              <ul className="flex flex-wrap gap-4 py-2">
                <PreviewableImage src="/jobsPage/casa1.png">
                  <div className="relative border-[0.5px] border-stroke rounded-lg box-border overflow-hidden w-28 hover:scale-105 transition-all cursor-pointer -rotate-2 hover:-rotate-3" style={{"aspectRatio": "3/2"}}>
                    <img alt="Casa Granola" loading="lazy" decoding="async" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="100vw" src="/jobsPage/casa1.png" />
                  </div>
                </PreviewableImage>
                <PreviewableImage src="/jobsPage/casa3.png">
                  <div className="relative border-[0.5px] border-stroke rounded-lg box-border overflow-hidden w-28 hover:scale-105 transition-all cursor-pointer rotate-2 hover:rotate-3" style={{"aspectRatio": "3/2"}}>
                    <img alt="Casa Granola" loading="lazy" decoding="async" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="100vw" src="/jobsPage/casa3.png" />
                  </div>
                </PreviewableImage>
                <PreviewableImage src="/jobsPage/casa4.png">
                  <div className="relative border-[0.5px] border-stroke rounded-lg box-border overflow-hidden w-28 hover:scale-105 transition-all cursor-pointer -rotate-2 hover:-rotate-3" style={{"aspectRatio": "3/2"}}>
                    <img alt="Casa Granola" loading="lazy" decoding="async" style={{"position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent"}} sizes="100vw" src="/jobsPage/casa4.png" />
                  </div>
                </PreviewableImage>
              </ul>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-blue-200 size-8">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Parental Leave"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"20 weeks for primary caregivers, 12 weeks for secondary — fully paid."}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-green-300 size-8">
                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original."}
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-blue-200 size-8">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Health Insurance"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"UK: Bupa cover for you and your family. US: Medical, dental and vision through Aetna/Kaiser."}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-green-300 size-8">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and roughly."}
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-red-200 size-8">
                <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Gym Boost"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"A monthly contribution toward your gym membership."}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-purple-200 size-8">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"L&D Budget"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"An annual budget for courses, books, conferences — whatever helps you grow."}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-red-200 size-8">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Life Insurance"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"UK: 4× your annual salary for your dependants. US: 2× up to $750k — just in case."}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-purple-200 size-8">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Income Protection"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"UK: 75% of your salary if you're out of action long-term. US: 60% up to $12k/month."}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-blue-200 size-8">
                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM20.57 16.476c-.223.082-.448.161-.674.238L7.319 4.137A6.75 6.75 0 0 1 18.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206Z" />
                <path fillRule="evenodd" d="M5.25 9c0-.184.007-.366.022-.546l10.384 10.384a3.751 3.751 0 0 1-7.396-1.119 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Time Off"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"UK: 25 days plus bank holidays. US: Unlimited PTO."}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-pink-200 size-8">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Daily Lunch"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"Fresh lunch delivered to the office every weekday, on us."}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-full items-center">
            <div className="grid flex-none place-items-center rounded-lg border border-stroke size-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="text-oats-yellow-200 size-8">
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-col gap-2 text-lg">
              <p>
                <span className="font-medium text-content-primary">
                  {"Flex Perks"}
                </span>
                <span className="text-content-secondary ml-2">
                  {"Work late? Dinner's on us. Remote up to four weeks a year. Office-first, with flexibility built in."}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-5 columns-1 sm:columns-2 lg:columns-3">
          <div className="flex flex-col items-center md:block w-full md:w-full gap-0 md:gap-0">
            {PLACEHOLDER_TWEETS.map((t, i) => (
              <div key={i} data-theme="light" className={t.className} dangerouslySetInnerHTML={{ __html: t.html }} />
            ))}
          </div>
        </div>
        <div className="col-span-5 h-[0.5px] bg-stroke" />
        <h2 className="col-span-5 text-3xl md:text-4xl lg:text-5xl font-quadrant tracking-[-0.015em] text-center text-balance text-content-primary">
          {"Life at Granola"}
        </h2>
        <LifeGallery />
        <h2 className="col-span-5 text-3xl md:text-4xl lg:text-5xl font-quadrant tracking-[-0.015em] text-center text-balance text-content-primary">
          {"Join us"}
        </h2>
        <div className="flex relative flex-col col-span-5 gap-0 items-center pb-16">
          <div className="w-full max-w-3xl">
            <div className="@container top-0 p-4 py-5 w-full rounded-lg border-[0.5px] border-stroke bg-white">
              <div className="@sm:grid grid-cols-2">
                <div className="">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary ">
                    {"Design"}
                  </h3>
                  <ul className="grid ">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🧑‍🎨"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Designer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="@sm:col-span-2">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary mt-4">
                    {"Engineering"}
                  </h3>
                  <ul className="grid @sm:grid-cols-2 gap-x-2">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"📈"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Growth Engineer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🔊"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Engineer (Transcription)"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🔐"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Security Engineer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🪟"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Engineer (Windows)"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"⚙️"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Engineer (Backend)"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🧩"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Product Engineer (Full Stack)"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🤖"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"AI Engineer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="@sm:col-span-2">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary mt-4">
                    {"Operations"}
                  </h3>
                  <ul className="grid @sm:grid-cols-2 gap-x-2">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🧑‍💻"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Operations Generalist"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🤖"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Revenue Operations Lead - US"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="@sm:col-span-2">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary mt-4">
                    {"Sales"}
                  </h3>
                  <ul className="grid @sm:grid-cols-2 gap-x-2">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Sales Development Representative"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Sales Development Representative"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"🌟"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Customer Success Manager"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Account Executive, High Velocity"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Account Executive, Enterprise"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"💰"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Account Executive, Mid Market"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"San Francisco Office "}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
                <div className="">
                  <h3 className="px-2 mb-2 text-sm font-medium text-content-secondary mt-4">
                    {"Tech"}
                  </h3>
                  <ul className="grid ">
                    <a className="flex relative gap-4 items-center p-2 rounded-lg cursor-pointer hover:bg-oats-neutral-100 group" href="#">
                      <div className="grid flex-none place-items-center text-2xl rounded-sm border-[0.5px] border-stroke size-10">
                        {"👩‍🍳"}
                      </div>
                      <div className="flex-1">
                        <p className="flex-1 font-medium leading-tight text-content-primary">
                          {"Design Engineer"}
                        </p>
                        <p className="text-sm text-content-secondary">
                          {"London"}
                        </p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="hidden absolute right-2 top-1/2 flex-none -translate-y-1/2 size-5 group-hover:block text-content-secondary group-hover:text-content-primary">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mx-auto mt-4 max-w-md text-sm md:px-6 md:text-center text-content-secondary text-balance">
              {"Interested but don't see a match? We're always interested in hearing from passionate folks:  "}
              <a href="#" title="Join our talent pool" className="underline hover:text-content-primary">
                {"Join our talent pool"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
