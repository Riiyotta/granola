import S01Block from './S01Block.jsx'
import S02ReadyForCalmer from './S02ReadyForCalmer.jsx'
import S03Block from './S03Block.jsx'

export default function FooterCta() {
  return (
    <div className="bg-oats-green-300 rounded-lg p-2 sm:p-4 md:p-12 lg:p-16 !pb-0 w-full border-oats-neutral-200 border">
      <div className="bg-white rounded-t-lg px-1 sm:px-8 md:px-16 py-12 pt-16 md:py-24 flex flex-col gap-8 relative">
        <S01Block />
        <S02ReadyForCalmer />
        <S03Block />
      </div>
    </div>
  )
}
