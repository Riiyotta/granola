import ChatDownloadCta from '../../components/DownloadCta.jsx'
import { useHeroTyping, useHeroTilt, useWaveBars } from '../../motion/chatpage-hero.js'

// Live module 38257: each tile's waveform runs its own 200ms interval.
function WaveBars() {
  const bars = useWaveBars(true)
  return (
    <div className="flex justify-center items-center w-6 h-6 gap-[3px]">
      {bars.map((h, i) => (
        <div key={i} className="rounded-full transition-all duration-300 ease-in-out w-[3px] bg-oats-green-200" style={{ height: `${h}%` }} />
      ))}
    </div>
  )
}

// Isolated so the 50-100ms typing ticks only re-render this text node.
function TypedPrompt() {
  return useHeroTyping()
}

export default function S01AiChatThat() {
  const tilt = useHeroTilt()
  return (
    <section className="flex relative flex-col gap-4 justify-center items-center pb-32 md:pb-48 lg:pb-80 w-full overflow-hidden h-[700px] md:h-auto border-b border-stroke">
      <div className="flex flex-col gap-4 justify-center items-center px-6 pt-28 pb-12 lg:pb-16 lg:gap-8 md:pt-56 lg:pt-56">
        <h1 className="text-4xl md:text-5xl lg:text-[68px] font-quadrant tracking-[-0.015em] text-center leading-[0.9] text-primary max-w-4xl mx-auto">
          {"AI chat that actually understands your work"}
        </h1>
        <h2 className="md:px-14 w-full md:max-w-4xl text-xl lg:text-2xl text-center text-content-secondary font-light">
          {"Granola Chat combines instant work context with the world's best AI models. So you can be ready for anything."}
        </h2>
        <ChatDownloadCta placement="hero" />
      </div>
      <div className="absolute top-[400px] lg:top-[530px] left-0 right-0 h-[550px] overflow-hidden pointer-events-none" style={{"perspective": "1000px", "perspectiveOrigin": "center bottom"}}>
        <div className="absolute left-1/2 top-[22%] md:top-[17%] lg:top-[27%] z-10" style={{"transform": `translateX(-50%) rotateX(${tilt}deg)`, "transformOrigin": "center top"}}>
          <div className="scale-[45%] md:scale-75 lg:scale-100">
            <div className="p-6 pl-10 w-[700px] text-primary bg-white rounded-full shadow-[0_75px_50px_-12px_rgb(0_0_0_/_0.15),_-8px_-8px_10px_0_#FFF_inset] whitespace-nowrap border border-stroke backdrop-blur-md flex items-center justify-between gap-3 relative z-10">
              <div className="font-basic text-4xl font-normal flex-1 text-left relative -top-2">
                <TypedPrompt />
                <div className="animate-pulse bg-oats-neutral-700 inline-block h-12 relative top-2.5 w-0.5 ml-1 rounded-full" />
              </div>
              <div className="bg-oats-green-100 rounded-full w-16 h-16 flex flex-none items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                    <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative gap-4 opacity-80" style={{"transform": `rotateX(${tilt}deg)`, "transformOrigin": "center top"}}>
          <div className="flex animate-marquee-seamless" style={{"gap": "24px", "transform": `rotateX(${tilt}deg)`, "transformOrigin": "center top"}}>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 min-w-max w-[500px] h-[500px]">
              <div className="col-span-2 row-span-2 bg-white/40 rounded-xl border border-stroke relative p-8 w-[340px] overflow-y-hidden">
                <div className="absolute top-3 left-3 flex gap-2 opacity-50">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-oats-green-500 rounded-full" />
                </div>
                <div className="text-gray-800 text-xs leading-relaxed opacity-50 px-2 py-4">
                  <div className="text-sm font-quadrant">
                    {"Website Redesign Sync"}
                  </div>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Project Status"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Homepage and product pages 80% complete"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Mobile responsive design in progress"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Current Issues"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Page load times need optimization"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Image compression not working correctly"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Blog migration taking longer than expected"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Next Steps"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Complete accessibility audit by end of month"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Set up A/B testing infrastructure"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Schedule final stakeholder review for next week"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-5 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Upstart Health"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"AllFound"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Luna Logic"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Pineapple"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/tikhon-avatar.png" alt="Tikhon's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Page feedback"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Tikhon"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/jack-avatar.png" alt="Jack's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Analytics sync"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Jack"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-content-secondary">
                    {"Design team"}
                  </span>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-1 pl-4">
                  <WaveBars />
                  <span className="text-sm font-medium text-content-secondary">
                    {"Sam/Chris 1:1"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"CX Weekly"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Vicky"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"25"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Marketing Q2"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Engineering docs"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Product specs"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Meeting notes"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Sales calls"}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 min-w-max w-[500px] h-[500px] max-w-[500px]">
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-content-secondary">
                    {"Sales calls"}
                  </span>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center justify-center gap-1">
                  <WaveBars />
                  <span className="text-sm font-medium text-content-secondary">
                    {"Team standup "}
                  </span>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"25"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"Product sync"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"26"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"Team retro"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"26"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"AllFound intro"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"28"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Sales weekly"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"CX Weekly"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Vicky"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 bg-white/40 rounded-xl border border-stroke relative p-8 w-[340px] overflow-y-hidden">
                <div className="absolute top-3 left-3 flex gap-2 opacity-50">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-oats-green-500 rounded-full" />
                </div>
                <div className="text-gray-800 text-xs leading-relaxed opacity-50 px-2 py-4">
                  <div className="text-sm font-quadrant">
                    {"Intro call: AllFound"}
                  </div>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"AllFound Overview"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"100 employees, adding 20 more next quarter"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Office in San Francisco and Austin"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Current Provider (Tuesday.ai)"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Data input is too manual"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Too complex for non-technical team members"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"$180 per employee per year (\"too expensive\")"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Their Requirements"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Finding a better employee engagement tool is \"a priority for Q2\""}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Need secure information sharing capabilities"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"One-way or two-way data sharing required, contingent on internal approval"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Upstart Health"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"AllFound"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Luna Logic"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Pineapple"}
                  </span>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/tikhon-avatar.png" alt="Tikhon's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Tikhon"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/jack-avatar.png" alt="Jack's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Jack"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Vicky"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/sam-avatar.png" alt="Sam's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Sam"}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 min-w-max w-[500px] h-[500px]">
              <div className="col-span-2 row-span-2 bg-white/40 rounded-xl border border-stroke relative p-8 w-[340px] overflow-y-hidden">
                <div className="absolute top-3 left-3 flex gap-2 opacity-50">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-oats-green-500 rounded-full" />
                </div>
                <div className="text-gray-800 text-xs leading-relaxed opacity-50 px-2 py-4">
                  <div className="text-sm font-quadrant">
                    {"Website Redesign Sync"}
                  </div>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Project Status"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Homepage and product pages 80% complete"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Mobile responsive design in progress"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Current Issues"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Page load times need optimization"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Image compression not working correctly"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Blog migration taking longer than expected"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Next Steps"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Complete accessibility audit by end of month"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Set up A/B testing infrastructure"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Schedule final stakeholder review for next week"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-5 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Upstart Health"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"AllFound"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Luna Logic"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Pineapple"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/tikhon-avatar.png" alt="Tikhon's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Page feedback"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Tikhon"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/jack-avatar.png" alt="Jack's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Analytics sync"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Jack"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-content-secondary">
                    {"Design team"}
                  </span>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-1 pl-4">
                  <WaveBars />
                  <span className="text-sm font-medium text-content-secondary">
                    {"Sam/Chris 1:1"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"CX Weekly"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Vicky"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"25"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Marketing Q2"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Engineering docs"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Product specs"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Meeting notes"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Sales calls"}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 min-w-max w-[500px] h-[500px] max-w-[500px]">
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-content-secondary">
                    {"Sales calls"}
                  </span>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center justify-center gap-1">
                  <WaveBars />
                  <span className="text-sm font-medium text-content-secondary">
                    {"Team standup "}
                  </span>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"25"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"Product sync"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"26"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"Team retro"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"26"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"AllFound intro"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"28"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Sales weekly"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"CX Weekly"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Vicky"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 bg-white/40 rounded-xl border border-stroke relative p-8 w-[340px] overflow-y-hidden">
                <div className="absolute top-3 left-3 flex gap-2 opacity-50">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-oats-green-500 rounded-full" />
                </div>
                <div className="text-gray-800 text-xs leading-relaxed opacity-50 px-2 py-4">
                  <div className="text-sm font-quadrant">
                    {"Intro call: AllFound"}
                  </div>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"AllFound Overview"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"100 employees, adding 20 more next quarter"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Office in San Francisco and Austin"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Current Provider (Tuesday.ai)"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Data input is too manual"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Too complex for non-technical team members"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"$180 per employee per year (\"too expensive\")"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Their Requirements"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Finding a better employee engagement tool is \"a priority for Q2\""}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Need secure information sharing capabilities"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"One-way or two-way data sharing required, contingent on internal approval"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Upstart Health"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"AllFound"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Luna Logic"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Pineapple"}
                  </span>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/tikhon-avatar.png" alt="Tikhon's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Tikhon"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/jack-avatar.png" alt="Jack's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Jack"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Vicky"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/sam-avatar.png" alt="Sam's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Sam"}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 min-w-max w-[500px] h-[500px]">
              <div className="col-span-2 row-span-2 bg-white/40 rounded-xl border border-stroke relative p-8 w-[340px] overflow-y-hidden">
                <div className="absolute top-3 left-3 flex gap-2 opacity-50">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-oats-green-500 rounded-full" />
                </div>
                <div className="text-gray-800 text-xs leading-relaxed opacity-50 px-2 py-4">
                  <div className="text-sm font-quadrant">
                    {"Website Redesign Sync"}
                  </div>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Project Status"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Homepage and product pages 80% complete"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Mobile responsive design in progress"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Current Issues"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Page load times need optimization"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Image compression not working correctly"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Blog migration taking longer than expected"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Next Steps"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Complete accessibility audit by end of month"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Set up A/B testing infrastructure"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Schedule final stakeholder review for next week"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-5 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Upstart Health"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"AllFound"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Luna Logic"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Pineapple"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/tikhon-avatar.png" alt="Tikhon's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Page feedback"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Tikhon"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/jack-avatar.png" alt="Jack's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Analytics sync"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Jack"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-content-secondary">
                    {"Design team"}
                  </span>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-1 pl-4">
                  <WaveBars />
                  <span className="text-sm font-medium text-content-secondary">
                    {"Sam/Chris 1:1"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"CX Weekly"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Vicky"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"25"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Marketing Q2"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Engineering docs"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Product specs"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Meeting notes"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Sales calls"}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 min-w-max w-[500px] h-[500px] max-w-[500px]">
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="#FFB265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-content-secondary">
                    {"Sales calls"}
                  </span>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center justify-center gap-1">
                  <WaveBars />
                  <span className="text-sm font-medium text-content-secondary">
                    {"Team standup "}
                  </span>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"25"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"Product sync"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"26"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"Team retro"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"26"}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-secondary truncate">
                    {"AllFound intro"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-7 h-7 bg-black/5 rounded-sm flex flex-col items-center justify-center shrink-0">
                    <span className="text-[6px] font-bold text-black/50 leading-none">
                      {"SEPT"}
                    </span>
                    <span className="text-xs font-bold text-black/50 leading-none">
                      {"28"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"Sales weekly"}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white/40 rounded-xl border border-stroke flex items-center gap-2 pl-4">
                  <div className="w-5 h-5 flex items-center justify-center opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-content-secondary">
                      {"CX Weekly"}
                    </span>
                    <span className="text-xs font-normal text-content-secondary/50">
                      {"Shared by Vicky"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-2 bg-white/40 rounded-xl border border-stroke relative p-8 w-[340px] overflow-y-hidden">
                <div className="absolute top-3 left-3 flex gap-2 opacity-50">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-oats-green-500 rounded-full" />
                </div>
                <div className="text-gray-800 text-xs leading-relaxed opacity-50 px-2 py-4">
                  <div className="text-sm font-quadrant">
                    {"Intro call: AllFound"}
                  </div>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"AllFound Overview"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"100 employees, adding 20 more next quarter"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Office in San Francisco and Austin"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Current Provider (Tuesday.ai)"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Data input is too manual"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Too complex for non-technical team members"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"$180 per employee per year (\"too expensive\")"}
                    </li>
                  </ul>
                  <div className="text-xs mb-2 mt-3 font-quadrant">
                    {"Their Requirements"}
                  </div>
                  <ul className="space-y-1 ">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Finding a better employee engagement tool is \"a priority for Q2\""}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"Need secure information sharing capabilities"}
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2 shrink-0" />
                      {"One-way or two-way data sharing required, contingent on internal approval"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Upstart Health"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"AllFound"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Luna Logic"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 opacity-70" style={{"background": "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)"}} />
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Pineapple"}
                  </span>
                </div>
              </div>
              <div className="bg-white/40 rounded-xl border border-stroke flex flex-col gap-4 p-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/tikhon-avatar.png" alt="Tikhon's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Tikhon"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/jack-avatar.png" alt="Jack's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Jack"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/vicky-avatar.png" alt="Vicky's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Vicky"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 opacity-50">
                    <img src="/chat-page/sam-avatar.png" alt="Sam's avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-content-secondary truncate">
                    {"Sam"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
