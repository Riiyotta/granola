import { useRef } from 'react'
import { TWEETS } from './tweets-data.js'
import { useTweetInteractions } from '../../motion/pricing-page-tweets.js'

// Live SSRs react-tweet skeletons and fills them client-side with the rendered tweets; the final
// DOM (6 tweets in a 1/2/3-column CSS masonry at sm/lg, 3 stacked md:hidden copies on mobile) is
// reproduced from captured markup. Tweet bodies are placeholder text; swap in quotes you have permission to use.
export default function S06WhatPeopleAre() {
  const wallRef = useRef(null)
  useTweetInteractions(wallRef)
  return (
    <section id="testimonials" className="flex overflow-visible relative flex-col gap-8 lg:gap-16 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl">
      <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
          {"What people are saying about Granola"}
        </h2>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-full col-span-5 columns-1 sm:columns-2 lg:columns-3">
          <div ref={wallRef} className="flex flex-col items-center md:block w-full md:w-full gap-0 md:gap-0">
            {TWEETS.map((t, i) => (
              <div key={i} data-theme="light" className={t.className} dangerouslySetInnerHTML={{ __html: t.html }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
