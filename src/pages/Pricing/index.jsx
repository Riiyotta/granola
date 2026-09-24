import S01GranolaHowYou from './S01GranolaHowYou.jsx'
import S02Block from './S02Block.jsx'
import S03ComparePlans from './S03ComparePlans.jsx'
import S04ThingsWorthNoting from './S04ThingsWorthNoting.jsx'
import S05Resources from './S05Resources.jsx'
import S06WhatPeopleAre from './S06WhatPeopleAre.jsx'
import S07HelpingTheWorld from './S07HelpingTheWorld.jsx'

export default function PricingPage() {
  return (
    <main className="flex-1 w-full lg:mx-auto">
      <div className="flex flex-col gap-28 lg:gap-48 py-16 md:py-24 lg:py-32">
        <S01GranolaHowYou />
        <S02Block />
        <S03ComparePlans />
        <S04ThingsWorthNoting />
        <S05Resources />
        <S06WhatPeopleAre />
        <S07HelpingTheWorld />
      </div>
    </main>
  )
}
