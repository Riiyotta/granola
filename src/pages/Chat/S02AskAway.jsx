import ChatDownloadCta from '../../components/DownloadCta.jsx'
import { useTweetCopyLinks } from '../../motion/chatpage-tweets.js'

export default function S02AskAway() {
  const tweetsRef = useTweetCopyLinks()
  return (
    <div className="flex flex-col gap-28 lg:gap-48 py-16 md:py-24 lg:py-44 w-full">
      <section id="ask-anything" className="flex overflow-visible relative flex-col gap-8 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl lg:gap-12">
        <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
            {"Ask away"}
          </h2>
          <p className="text-xl lg:text-2xl max-w-2xl mx-auto font-light text-content-secondary text-balance">
            {"Answer questions about progress you're making, decisions you've made and pull user insights in a flash"}
          </p>
        </div>
        <div className="flex gap-6 w-full md:w-3/4 lg:w-full flex-col lg:flex-row">
          <div className="group flex-1 aspect-square bg-oats-neutral-100 rounded-lg border border-oats-neutral-200 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="md:text-base text-sm bg-white rounded-full px-4 py-2 inline-block items-center justify-start mb-4 font-semibold self-start relative z-10">
              {"During a meeting"}
            </div>
            <div className="flex-1 flex items-center justify-center absolute z-10 left-6 top-[82px] w-full h-full" style={{"backgroundImage": "url(\"/chat-page/ask-anything-1.png\")", "backgroundSize": "100% auto", "backgroundPosition": "top left", "backgroundRepeat": "no-repeat"}} />
            <div className="absolute bottom-0 left-0 w-full h-[150px] z-20 pointer-events-none bg-gradient-to-t from-oats-neutral-100/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-30">
              <img src="/chat-page/ask-anything-input-1.png" alt="What's been discussed so far?" className="w-full h-auto" />
            </div>
          </div>
          <div className="group flex-1 aspect-square bg-oats-neutral-100 rounded-lg border border-oats-neutral-200 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="md:text-base text-sm bg-white rounded-full px-4 py-2 inline-block items-center justify-start mb-4 font-semibold self-start relative z-10">
              {"In a folder"}
            </div>
            <div className="flex-1 flex items-center justify-center absolute z-10 left-6 top-[82px] w-full h-full" style={{"backgroundImage": "url(\"/chat-page/ask-anything-2.png\")", "backgroundSize": "100% auto", "backgroundPosition": "top left", "backgroundRepeat": "no-repeat"}} />
            <div className="absolute bottom-0 left-0 w-full h-[150px] z-20 pointer-events-none bg-gradient-to-t from-oats-neutral-100/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-30">
              <img src="/chat-page/ask-anything-input-2.png" alt="What are our top feature requests?" className="w-full h-auto" />
            </div>
          </div>
          <div className="group flex-1 aspect-square bg-oats-neutral-100 rounded-lg border border-oats-neutral-200 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="md:text-base text-sm bg-white rounded-full px-4 py-2 inline-block items-center justify-start mb-4 font-semibold self-start relative z-10">
              {"Across all meetings"}
            </div>
            <div className="flex-1 flex items-center justify-center absolute z-10 left-6 top-[82px] w-full h-full" style={{"backgroundImage": "url(\"/chat-page/ask-anything-3.png\")", "backgroundSize": "100% auto", "backgroundPosition": "top left", "backgroundRepeat": "no-repeat"}} />
            <div className="absolute bottom-0 left-0 w-full h-[150px] z-20 pointer-events-none bg-gradient-to-t from-oats-neutral-100/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-30">
              <img src="/chat-page/ask-anything-input-3.png" alt="Can I contribute more in meetings?" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section id="draft-anything" className="flex flex-col w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl gap-6 lg:gap-12 relative pb-0 overflow-hidden">
        <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
            {"Get anything done"}
          </h2>
          <p className="text-xl lg:text-2xl max-w-2xl mx-auto font-light text-content-secondary text-balance">
            {"Granola helps you write documents, follow-up emails or briefs — all inspired by your conversations"}
          </p>
        </div>
        <div className="h-64 relative -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="w-full max-w-6xl mx-auto py-4 overflow-hidden">
            <div className="flex flex-col gap-3 lg:gap-4">
              <div>
                <div className="flex lg:hidden gap-2">
                  <div className="flex gap-2 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex gap-4">
                  <div className="flex gap-4 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a Slack message"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product spec"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft an email"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a video script"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a proposal"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-0">
                <div className="flex lg:hidden gap-2">
                  <div className="flex gap-2 animate-marquee-reverse" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 animate-marquee-reverse" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 animate-marquee-reverse" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex gap-4">
                  <div className="flex gap-4 animate-marquee-reverse" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 animate-marquee-reverse" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 animate-marquee-reverse" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a marketing brief"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a blog post"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a newsletter"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a product update"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a presentation"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex lg:hidden gap-2">
                  <div className="flex gap-2 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-2 relative z-10">
                      <span className="text-lg font-medium flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex gap-4">
                  <div className="flex gap-4 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 animate-marquee" style={{"animationDuration": "100s"}}>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a job description"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a meeting agenda"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Draft a press release"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Write a guide"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 pl-5 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke hover:border-primary transition duration-1000 hover:shadow-lg flex items-center justify-between gap-3 relative z-10">
                      <span className="text-2xl font-normal flex-1 text-left">
                        {"Create a project plan"}
                      </span>
                      <div className="transition-all ease-out duration-500 w-0 group-hover:w-3 flex-none" />
                      <div className="bg-oats-green-100 rounded-full w-8 h-8 flex flex-none items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                            <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-l from-transparent to-white pointer-events-none" />
              <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-r from-transparent to-white pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
      <section id="useful-whenever" className="flex overflow-visible flex-col w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl relative gap-6 lg:gap-12">
        <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
            {"Chat it through"}
          </h2>
          <p className="text-xl lg:text-2xl max-w-2xl mx-auto font-light text-content-secondary text-balance">
            {"Helpful throughout your workday — get prepared before, ask questions during a meeting and make a plan for after"}
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto py-12 lg:hidden">
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-oats-gold-100 text-black px-4 py-1.5 rounded-full font-semibold mb-4 relative z-10">
              {"Before a meeting"}
            </div>
            <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10 w-[250px]">
              <span className="text-lg font-medium flex-1 text-left">
                {"Help me prep"}
              </span>
              <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                    <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-md text-content-secondary font-normal w-3/4 mt-4 text-[15.5px]">
              {"Chat with Granola to make sure you're up to speed before you join a call"}
            </p>
          </div>
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-oats-purple-100 text-black px-4 py-1.5 rounded-full font-semibold mb-4 relative z-10">
              {"During a meeting"}
            </div>
            <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10 w-[250px]">
              <span className="text-lg font-medium flex-1 text-left">
                {"Make me sound smart"}
              </span>
              <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                    <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-md text-content-secondary font-normal w-3/4 mt-4 text-[15.5px]">
              {"Use Granola in realtime to start asking better questions in every meeting"}
            </p>
          </div>
          <div className="flex flex-col items-center text-center relative">
            <div className="bg-oats-pink-100 text-black px-4 py-1.5 rounded-full font-semibold mb-4 relative z-10">
              {"After a meeting"}
            </div>
            <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10 w-[250px]">
              <span className="text-lg font-medium flex-1 text-left">
                {"What shall I do next?"}
              </span>
              <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                    <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-md text-content-secondary font-normal w-3/4 mt-4 text-[15.5px]">
              {"When your meeting's over, get help with whatever comes afterwards"}
            </p>
          </div>
        </div>
        <div className="relative w-full hidden lg:block overflow-hidden">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-screen h-0.5 top-[124px]" style={{"backgroundImage": "linear-gradient(to right, transparent 0%, rgb(212 212 212) 40%, rgb(212 212 212) 60%, transparent 100%)"}} />
          <div className="flex justify-between gap-12 items-center w-full max-w-4xl mx-auto py-12">
            <div className="flex flex-col items-center text-center relative">
              <div className="bg-oats-gold-100 text-black px-4 py-1.5 rounded-full font-semibold mb-4 relative z-10">
                {"Before a meeting"}
              </div>
              <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10 w-[250px]">
                <span className="text-lg font-medium flex-1 text-left">
                  {"Help me prep"}
                </span>
                <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                      <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-md text-content-secondary font-normal w-3/4 mt-4 text-[15.5px]">
                {"Chat with Granola to make sure you're up to speed before you join a call"}
              </p>
            </div>
            <div className="flex flex-col items-center text-center relative">
              <div className="bg-oats-purple-100 text-black px-4 py-1.5 rounded-full font-semibold mb-4 relative z-10">
                {"During a meeting"}
              </div>
              <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10 w-[250px]">
                <span className="text-lg font-medium flex-1 text-left">
                  {"Make me sound smart"}
                </span>
                <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                      <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-md text-content-secondary font-normal w-3/4 mt-4 text-[15.5px]">
                {"Use Granola in realtime to start asking better questions in every meeting"}
              </p>
            </div>
            <div className="flex flex-col items-center text-center relative">
              <div className="bg-oats-pink-100 text-black px-4 py-1.5 rounded-full font-semibold mb-4 relative z-10">
                {"After a meeting"}
              </div>
              <div className="p-2 pl-4 text-lg font-semibold text-primary bg-white rounded-full shadow-md group whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10 w-[250px]">
                <span className="text-lg font-medium flex-1 text-left">
                  {"What shall I do next?"}
                </span>
                <div className="bg-oats-green-100 rounded-full w-7 h-7 flex flex-none items-center justify-center">
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                      <path d="M5.14471 0.544922C5.16568 0.545935 5.18642 0.548611 5.20721 0.551758C5.22678 0.554574 5.24591 0.557892 5.26483 0.5625C5.27672 0.565478 5.28826 0.569545 5.29999 0.573242C5.40658 0.606123 5.50022 0.66561 5.57343 0.746094L9.86542 5.03809C10.1057 5.2787 10.1057 5.66855 9.86542 5.90918C9.62482 6.14978 9.23505 6.14958 8.99432 5.90918L5.73553 2.65039V12.0723C5.73533 12.4124 5.45941 12.6883 5.11932 12.6885C4.77905 12.6885 4.50332 12.4125 4.50311 12.0723V2.64258L1.23651 5.90918C0.995884 6.14977 0.606122 6.14964 0.365417 5.90918C0.124731 5.66849 0.124755 5.27879 0.365417 5.03809L4.67987 0.723633L4.77655 0.644531C4.84215 0.601317 4.91415 0.572169 4.98846 0.556641C4.99582 0.555058 5.00348 0.555029 5.01093 0.553711C5.03945 0.548835 5.06801 0.545763 5.09686 0.544922C5.1042 0.544663 5.11192 0.542969 5.11932 0.542969C5.12785 0.542974 5.13628 0.544574 5.14471 0.544922Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-md text-content-secondary font-normal w-3/4 mt-4 text-[15.5px]">
                {"When your meeting's over, get help with whatever comes afterwards"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="customers" className="flex overflow-visible relative flex-col gap-8 lg:gap-16 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl">
        <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
            {"Helping the world's best product teams get more out of their meetings"}
          </h2>
        </div>
        <div className="relative overflow-hidden max-w-full lg:max-w-4xl xl:max-w-7xl mx-auto">
          <div className="absolute left-0 w-1/3 h-full bg-gradient-to-l from-transparent to-white z-10 pointer-events-none" />
          <div className="absolute right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-white z-10 pointer-events-none" />
          <div className="marquee  " style={{"--gap": "1rem", "--duration": "90s"}}>
            <div className="marquee__content">
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/posthog.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/intercom.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/linear.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/index.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/brex.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/replit.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/lovable.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/posthog.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/intercom.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/linear.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/index.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/brex.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/replit.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/lovable.svg" />
              </div>
            </div>
            <div className="marquee__content">
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/posthog.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/intercom.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/linear.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/index.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/brex.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/replit.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/lovable.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/posthog.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/intercom.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/linear.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/index.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/brex.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/replit.svg" />
              </div>
              <div className="shrink-0 border border-stroke rounded-lg p-2">
                <img alt="" loading="lazy" width="240" height="120" decoding="async" className="w-40 opacity-80 md:w-48" style={{"color": "transparent"}} src="/customerLogos/lovable.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recipes" className="flex overflow-visible flex-col gap-8 w-full mx-auto items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl lg:gap-12 relative">
        <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
            {"Stop prompting, start cooking"}
          </h2>
          <p className="text-xl lg:text-2xl max-w-2xl mx-auto font-light text-content-secondary text-balance">
            {"Recipes are simple shortcuts for complex questions or your most-used prompts. Share your Recipes with others or borrow one from an expert."}
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 mt-8 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-oats-neutral-100 rounded-lg p-8 flex lg:mt-0 -mt-8">
              <blockquote className="text-2xl lg:text-left text-center lg:text-3xl font-quadrant tracking-[-0.015em] text-content-primary">
                {"\"You absolutely nailed the Coach Me recipe after a call. This is the best feature I've never asked for.\""}
              </blockquote>
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-lg border border-stroke p-6 relative overflow-hidden flex flex-col hover:-translate-y-1 [transition:transform_300ms]">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 -translate-x-[55%] opacity-0 group-hover:translate-x-full group-hover:opacity-100 group-hover:[transition:transform_1500ms_ease-out] bg-gradient-to-r from-transparent via-white/60 to-transparent w-[200%] -left-[100%] z-30 rounded-lg overflow-hidden" />
                  <div className="p-2 pr-2.5 text-lg font-semibold text-primary bg-white rounded-lg whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10">
                    <div className="bg-oats-pink-100 rounded-md w-6 h-6 flex items-center justify-center relative z-10">
                      <div className="w-3.5 h-3.5 flex items-center justify-center">
                        <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                          <path d="M6.82454 1.32976C7.05599 0.866865 7.5291 0.574463 8.04663 0.574463C9.06163 0.574463 9.72228 1.64202 9.26943 2.5504L3.02547 15.075C2.79293 15.5415 2.31657 15.8363 1.79537 15.8363C0.773598 15.8363 0.109038 14.761 0.56598 13.8471L6.82454 1.32976Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-base font-semibold flex-1 text-left relative z-10">
                      {"Coach me"}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-oats-neutral-700 mb-6 leading-tight font-normal text-lg z-10 relative flex-1">
                {"Placeholder copy for this block. Replace it with your own words to keep the layout balanced and the rhythm of the page intact. This text stands in for the original paragraph and."}
              </p>
              <div className="flex items-center gap-3">
                <img src="/chat-page/avatar-matt-mochary.jpg" alt="Matt Mochary" className="w-10 h-10 rounded-lg" />
                <div>
                  <p className="font-semibold text-black flex items-center gap-1">
                    {"Matt Mochary"}
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <g clipPath="url(#clip0_verification)">
                        <path d="M10.3302 2.0848C11.2021 1.22305 12.605 1.22305 13.4769 2.0848L15.0085 3.59849C15.3628 3.9486 15.8237 4.17055 16.3182 4.22922L18.4566 4.48288C19.674 4.62729 20.5487 5.72413 20.4186 6.94312L20.1901 9.08432C20.1372 9.57957 20.251 10.0783 20.5135 10.5016L21.6485 12.3316C22.2946 13.3734 21.9824 14.7411 20.9482 15.3994L19.1317 16.5558C18.7115 16.8232 18.3926 17.2232 18.2253 17.6923L17.5022 19.7206C17.0905 20.8753 15.8265 21.484 14.6671 21.0859L12.6304 20.3867C12.1593 20.2249 11.6478 20.2249 11.1767 20.3867L9.14006 21.0859C7.98058 21.484 6.7166 20.8753 6.30492 19.7206L5.58179 17.6923C5.41454 17.2232 5.09559 16.8232 4.67543 16.5558L2.85889 15.3994C1.82472 14.7411 1.51255 13.3734 2.15867 12.3316L3.2936 10.5016C3.5561 10.0783 3.66993 9.57956 3.61707 9.08432L3.38854 6.94312C3.25844 5.72413 4.13314 4.62729 5.35052 4.48288L7.48889 4.22922C7.98348 4.17055 8.44437 3.9486 8.79861 3.59849L10.3302 2.0848Z" fill="#D1E043" />
                        <path d="M15.5313 9.59326L10.3586 14.766L8.00732 12.4147" stroke="black" strokeWidth="1.41074" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_verification">
                          <rect width="22.3828" height="22.3828" fill="white" transform="translate(0.712158 0.529785)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <p className="text-base font-medium text-content-secondary">
                    {"CEO coach and author"}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
            <div className="bg-oats-neutral-100 rounded-lg border border-oats-neutral-200 p-6 relative overflow-hidden w-full aspect-[52/45]">
              <h3 className="text-base md:text-lg font-semibold text-content-primary mb-6">
                {"Create and share Recipes or browse our library"}
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-[150px] z-20 pointer-events-none" style={{"background": "linear-gradient(to top, #F7F7F2 20%, transparent 100%)"}} />
              <div className="flex-1 flex items-center justify-center absolute z-10 left-6 bottom-[-72px] w-full h-full" style={{"backgroundImage": "url(\"/chat-page/recipes-instructions-1.png\")", "backgroundSize": "120% auto", "backgroundPosition": "top left", "backgroundRepeat": "no-repeat"}} />
            </div>
            <div className="bg-oats-neutral-100 rounded-lg border border-oats-neutral-200 p-6 relative overflow-hidden w-full aspect-[52/45]">
              <h3 className="text-base md:text-lg font-semibold text-content-primary mb-6 z-30 relative">
                {"Hit / in chat for quick access to all your Recipes"}
              </h3>
              <div className="absolute top-0 left-0 w-full h-[300px] z-20 pointer-events-none" style={{"background": "linear-gradient(to bottom, #F7F7F2 20%, transparent 100%)"}} />
              <div className="flex-1 flex items-center justify-center absolute z-10 bottom-6 left-0 w-full h-full" style={{"backgroundImage": "url(\"/chat-page/recipes-instructions-2.png\")", "backgroundSize": "90% auto", "backgroundPosition": "bottom center", "backgroundRepeat": "no-repeat"}} />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-lg border border-stroke p-6 relative overflow-hidden flex flex-col hover:-translate-y-1 [transition:transform_300ms]">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 -translate-x-[55%] opacity-0 group-hover:translate-x-full group-hover:opacity-100 group-hover:[transition:transform_1500ms_ease-out] bg-gradient-to-r from-transparent via-white/60 to-transparent w-[200%] -left-[100%] z-30 rounded-lg overflow-hidden" />
                  <div className="p-2 pr-2.5 text-lg font-semibold text-primary bg-white rounded-lg whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10">
                    <div className="bg-oats-purple-100 rounded-md w-6 h-6 flex items-center justify-center relative z-10">
                      <div className="w-3.5 h-3.5 flex items-center justify-center">
                        <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                          <path d="M6.82454 1.32976C7.05599 0.866865 7.5291 0.574463 8.04663 0.574463C9.06163 0.574463 9.72228 1.64202 9.26943 2.5504L3.02547 15.075C2.79293 15.5415 2.31657 15.8363 1.79537 15.8363C0.773598 15.8363 0.109038 14.761 0.56598 13.8471L6.82454 1.32976Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-base font-semibold flex-1 text-left relative z-10">
                      {"Write PRD"}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-oats-neutral-700 mb-6 leading-tight font-normal text-lg z-10 relative flex-1">
                {"Fills out Lenny Rachitsky's PRD template for a feature of your choice"}
              </p>
              <div className="flex items-center gap-3">
                <img src="/chat-page/avatar-lenny.jpg" alt="Lenny Rachitsky" className="w-10 h-10 rounded-lg" />
                <div>
                  <p className="font-semibold text-black flex items-center gap-1">
                    {"Lenny Rachitsky"}
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <g clipPath="url(#clip0_verification)">
                        <path d="M10.3302 2.0848C11.2021 1.22305 12.605 1.22305 13.4769 2.0848L15.0085 3.59849C15.3628 3.9486 15.8237 4.17055 16.3182 4.22922L18.4566 4.48288C19.674 4.62729 20.5487 5.72413 20.4186 6.94312L20.1901 9.08432C20.1372 9.57957 20.251 10.0783 20.5135 10.5016L21.6485 12.3316C22.2946 13.3734 21.9824 14.7411 20.9482 15.3994L19.1317 16.5558C18.7115 16.8232 18.3926 17.2232 18.2253 17.6923L17.5022 19.7206C17.0905 20.8753 15.8265 21.484 14.6671 21.0859L12.6304 20.3867C12.1593 20.2249 11.6478 20.2249 11.1767 20.3867L9.14006 21.0859C7.98058 21.484 6.7166 20.8753 6.30492 19.7206L5.58179 17.6923C5.41454 17.2232 5.09559 16.8232 4.67543 16.5558L2.85889 15.3994C1.82472 14.7411 1.51255 13.3734 2.15867 12.3316L3.2936 10.5016C3.5561 10.0783 3.66993 9.57956 3.61707 9.08432L3.38854 6.94312C3.25844 5.72413 4.13314 4.62729 5.35052 4.48288L7.48889 4.22922C7.98348 4.17055 8.44437 3.9486 8.79861 3.59849L10.3302 2.0848Z" fill="#D1E043" />
                        <path d="M15.5313 9.59326L10.3586 14.766L8.00732 12.4147" stroke="black" strokeWidth="1.41074" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_verification">
                          <rect width="22.3828" height="22.3828" fill="white" transform="translate(0.712158 0.529785)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <p className="text-base font-medium text-content-secondary">
                    {"Lenny's Newsletter"}
                  </p>
                </div>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-lg border border-stroke p-6 relative overflow-hidden flex flex-col hover:-translate-y-1 [transition:transform_300ms]">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 -translate-x-[55%] opacity-0 group-hover:translate-x-full group-hover:opacity-100 group-hover:[transition:transform_1500ms_ease-out] bg-gradient-to-r from-transparent via-white/60 to-transparent w-[200%] -left-[100%] z-30 rounded-lg overflow-hidden" />
                  <div className="p-2 pr-2.5 text-lg font-semibold text-primary bg-white rounded-lg whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10">
                    <div className="bg-oats-red-100 rounded-md w-6 h-6 flex items-center justify-center relative z-10">
                      <div className="w-3.5 h-3.5 flex items-center justify-center">
                        <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                          <path d="M6.82454 1.32976C7.05599 0.866865 7.5291 0.574463 8.04663 0.574463C9.06163 0.574463 9.72228 1.64202 9.26943 2.5504L3.02547 15.075C2.79293 15.5415 2.31657 15.8363 1.79537 15.8363C0.773598 15.8363 0.109038 14.761 0.56598 13.8471L6.82454 1.32976Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-base font-semibold flex-1 text-left relative z-10">
                      {"Streamline my calendar"}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-oats-neutral-700 mb-6 leading-tight font-normal text-lg z-10 relative flex-1">
                {"Suggests three things to improve your week"}
              </p>
              <div className="flex items-center gap-3">
                <img src="/chat-page/avatar-peter-yang.jpg" alt="Peter Yang" className="w-10 h-10 rounded-lg" />
                <div>
                  <p className="font-semibold text-black flex items-center gap-1">
                    {"Peter Yang"}
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <g clipPath="url(#clip0_verification)">
                        <path d="M10.3302 2.0848C11.2021 1.22305 12.605 1.22305 13.4769 2.0848L15.0085 3.59849C15.3628 3.9486 15.8237 4.17055 16.3182 4.22922L18.4566 4.48288C19.674 4.62729 20.5487 5.72413 20.4186 6.94312L20.1901 9.08432C20.1372 9.57957 20.251 10.0783 20.5135 10.5016L21.6485 12.3316C22.2946 13.3734 21.9824 14.7411 20.9482 15.3994L19.1317 16.5558C18.7115 16.8232 18.3926 17.2232 18.2253 17.6923L17.5022 19.7206C17.0905 20.8753 15.8265 21.484 14.6671 21.0859L12.6304 20.3867C12.1593 20.2249 11.6478 20.2249 11.1767 20.3867L9.14006 21.0859C7.98058 21.484 6.7166 20.8753 6.30492 19.7206L5.58179 17.6923C5.41454 17.2232 5.09559 16.8232 4.67543 16.5558L2.85889 15.3994C1.82472 14.7411 1.51255 13.3734 2.15867 12.3316L3.2936 10.5016C3.5561 10.0783 3.66993 9.57956 3.61707 9.08432L3.38854 6.94312C3.25844 5.72413 4.13314 4.62729 5.35052 4.48288L7.48889 4.22922C7.98348 4.17055 8.44437 3.9486 8.79861 3.59849L10.3302 2.0848Z" fill="#D1E043" />
                        <path d="M15.5313 9.59326L10.3586 14.766L8.00732 12.4147" stroke="black" strokeWidth="1.41074" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_verification">
                          <rect width="22.3828" height="22.3828" fill="white" transform="translate(0.712158 0.529785)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <p className="text-base font-medium text-content-secondary">
                    {"Product leader & founder"}
                  </p>
                </div>
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-lg border border-stroke p-6 relative overflow-hidden flex flex-col hover:-translate-y-1 [transition:transform_300ms]">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 -translate-x-[55%] opacity-0 group-hover:translate-x-full group-hover:opacity-100 group-hover:[transition:transform_1500ms_ease-out] bg-gradient-to-r from-transparent via-white/60 to-transparent w-[200%] -left-[100%] z-30 rounded-lg overflow-hidden" />
                  <div className="p-2 pr-2.5 text-lg font-semibold text-primary bg-white rounded-lg whitespace-nowrap border border-stroke flex items-center justify-between gap-2 relative z-10">
                    <div className="bg-oats-gold-100 rounded-md w-6 h-6 flex items-center justify-center relative z-10">
                      <div className="w-3.5 h-3.5 flex items-center justify-center">
                        <svg className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                          <path d="M6.82454 1.32976C7.05599 0.866865 7.5291 0.574463 8.04663 0.574463C9.06163 0.574463 9.72228 1.64202 9.26943 2.5504L3.02547 15.075C2.79293 15.5415 2.31657 15.8363 1.79537 15.8363C0.773598 15.8363 0.109038 14.761 0.56598 13.8471L6.82454 1.32976Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-base font-semibold flex-1 text-left relative z-10">
                      {"Gather product feedback"}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-oats-neutral-700 mb-6 leading-tight font-normal text-lg z-10 relative flex-1">
                {"Analyzes customer calls to extract product-related feedback and group it into clear, actionable themes"}
              </p>
              <div className="flex items-center gap-3">
                <img src="/chat-page/avatar-ridd.jpg" alt="Ridd" className="w-10 h-10 rounded-lg" />
                <div>
                  <p className="font-semibold text-black flex items-center gap-1">
                    {"Ridd"}
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <g clipPath="url(#clip0_verification)">
                        <path d="M10.3302 2.0848C11.2021 1.22305 12.605 1.22305 13.4769 2.0848L15.0085 3.59849C15.3628 3.9486 15.8237 4.17055 16.3182 4.22922L18.4566 4.48288C19.674 4.62729 20.5487 5.72413 20.4186 6.94312L20.1901 9.08432C20.1372 9.57957 20.251 10.0783 20.5135 10.5016L21.6485 12.3316C22.2946 13.3734 21.9824 14.7411 20.9482 15.3994L19.1317 16.5558C18.7115 16.8232 18.3926 17.2232 18.2253 17.6923L17.5022 19.7206C17.0905 20.8753 15.8265 21.484 14.6671 21.0859L12.6304 20.3867C12.1593 20.2249 11.6478 20.2249 11.1767 20.3867L9.14006 21.0859C7.98058 21.484 6.7166 20.8753 6.30492 19.7206L5.58179 17.6923C5.41454 17.2232 5.09559 16.8232 4.67543 16.5558L2.85889 15.3994C1.82472 14.7411 1.51255 13.3734 2.15867 12.3316L3.2936 10.5016C3.5561 10.0783 3.66993 9.57956 3.61707 9.08432L3.38854 6.94312C3.25844 5.72413 4.13314 4.62729 5.35052 4.48288L7.48889 4.22922C7.98348 4.17055 8.44437 3.9486 8.79861 3.59849L10.3302 2.0848Z" fill="#D1E043" />
                        <path d="M15.5313 9.59326L10.3586 14.766L8.00732 12.4147" stroke="black" strokeWidth="1.41074" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_verification">
                          <rect width="22.3828" height="22.3828" fill="white" transform="translate(0.712158 0.529785)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <p className="text-base font-medium text-content-secondary">
                    {"Designer"}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center mt-6">
            <p className="text-xl font-light lg:text-2xl text-content-secondary mb-6">
              {"Get Granola to see our full range of recipes, or create and share your own"}
            </p>
            <ChatDownloadCta placement="recipes" />
          </div>
        </div>
      </section>
      <section ref={tweetsRef} id="testimonials" className="flex overflow-visible relative flex-col w-full mx-auto px-4 md:px-10 2xl:px-0 lg:max-w-7xl items-center gap-8 md:gap-6 lg:gap-12 md:!mt-[7rem] md:!-mb-[7rem] lg:!mt-0 lg:!mb-0">
        <div className="flex flex-col col-span-full gap-4 mx-auto text-center lg:gap-8 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] text-balance font-quadrant max-w-4xl mx-auto">
            {"Built for people with back-to-back meetings"}
          </h2>
        </div>
        <div className="w-full col-span-5 columns-1 sm:columns-2 lg:columns-3">
          <div className="flex flex-col items-center md:block w-full md:w-full gap-0 md:gap-0">
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block md:mt-2">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1677873294/image_normal.jpg" alt="Nat Friedman" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Nat Friedman">
                            {"Nat Friedman"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@natfriedman">
                            {"@natfriedman"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="1:55 PM · Jun 20, 2024">
                      <time dateTime="2024-06-20T13:55:47.000Z">
                        {"1:55 PM · Jun 20, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 554 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"554"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 24 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1289046130366406656/-s-fxoLn_normal.jpg" alt="Ryan Hoover" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Ryan Hoover">
                            {"Ryan Hoover"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@rrhoover">
                            {"@rrhoover"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="8:49 PM · Mar 31, 2025">
                      <time dateTime="2025-03-31T20:49:45.000Z">
                        {"8:49 PM · Mar 31, 2025"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 322 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"322"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 38 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1786076507330195456/6HobRr_a_normal.jpg" alt="Soleio" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Soleio">
                            {"Soleio"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@soleio">
                            {"@soleio"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly matches its length. Placeholder tweet text. Replace it with a."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="1:36 PM · Aug 8, 2024">
                      <time dateTime="2024-08-08T13:36:38.000Z">
                        {"1:36 PM · Aug 8, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 44 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"44"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 3 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1946219091305340928/_Ef-eDlc_normal.jpg" alt="Dan Shipper" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Dan Shipper">
                            {"Dan Shipper"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@danshipper">
                            {"@danshipper"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="9:03 PM · Jun 3, 2024">
                      <time dateTime="2024-06-03T21:03:13.000Z">
                        {"9:03 PM · Jun 3, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 37 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"37"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 4 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1783856060249595904/8TfcCN0r_normal.jpg" alt="Guillermo Rauch" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Guillermo Rauch">
                            {"Guillermo Rauch"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@rauchg">
                            {"@rauchg"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly matches its length. Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="9:14 PM · Jan 8, 2025">
                      <time dateTime="2025-01-08T21:14:13.000Z">
                        {"9:14 PM · Jan 8, 2025"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 1.6K likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"1.6K"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 68 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1886413225786232832/CjFMSLAg_normal.jpg" alt="Alex Cohen" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Alex Cohen">
                            {"Alex Cohen"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@anothercohen">
                            {"@anothercohen"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly matches its length. Placeholder tweet text. Replace it with a."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="1:09 AM · Mar 22, 2025">
                      <time dateTime="2025-03-22T01:09:41.000Z">
                        {"1:09 AM · Mar 22, 2025"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 626 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"626"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 32 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/2021618984328851456/OS1KXJNS_normal.jpg" alt="MDS" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="MDS">
                            {"MDS"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@mds">
                            {"@mds"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="5:34 PM · Sep 19, 2024">
                      <time dateTime="2024-09-19T17:34:55.000Z">
                        {"5:34 PM · Sep 19, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 24 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"24"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 7 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1923813473240203264/owJG92AC_normal.jpg" alt="Steven Tey" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Steven Tey">
                            {"Steven Tey"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@steventey">
                            {"@steventey"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <a href="#" className="tweet-in-reply-to_root__RWDgF" target="_blank" rel="noopener noreferrer">
                    {"Replying to @james406"}
                  </a>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="4:55 AM · Sep 16, 2024">
                      <time dateTime="2024-09-16T04:55:40.000Z">
                        {"4:55 AM · Sep 16, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 4 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"4"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read more on X"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1080456670684332032/7-4OAu7I_normal.jpg" alt="Des Traynor" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Des Traynor">
                            {"Des Traynor"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@destraynor">
                            {"@destraynor"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly matches its length. Placeholder tweet text. Replace it with a quote you have permission to use; this."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="9:34 PM · Apr 3, 2025">
                      <time dateTime="2025-04-03T21:34:06.000Z">
                        {"9:34 PM · Apr 3, 2025"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 364 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"364"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 34 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/2101031884977270784/ZLpuU6hH_normal.jpg" alt="Nichole Wischoff" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Nichole Wischoff">
                            {"Nichole Wischoff"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@NWischoff">
                            {"@NWischoff"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="6:41 PM · Nov 12, 2024">
                      <time dateTime="2024-11-12T18:41:52.000Z">
                        {"6:41 PM · Nov 12, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 306 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"306"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 40 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 hidden md:block">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/2016718977960120320/a3F0LOz6_normal.jpg" alt="Deedy" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Deedy">
                            {"Deedy"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@deedydas">
                            {"@deedydas"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly matches its length. Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and."}
                  </p>
                  <div className="tweet-media_root__oHtoX tweet-media_rounded__VqnSH">
                    <div className="tweet-media_mediaWrapper__XX1EE">
                      <a href="#" className="tweet-media_mediaContainer__FyqEC tweet-media_mediaLink__Zxco8" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-media_skeleton__NF4MV" style={{"paddingBottom": "76.19254119687771%"}} />
                        <img src="/external/twimg-pbs/media/Ge2tj93asAA1TWA" alt="Image" className="tweet-media_image__8Ui8X" draggable="true" />
                      </a>
                    </div>
                  </div>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="5:00 PM · Dec 15, 2024">
                      <time dateTime="2024-12-15T17:00:04.000Z">
                        {"5:00 PM · Dec 15, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 978 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"978"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 36 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 md:hidden">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1677873294/image_normal.jpg" alt="Nat Friedman" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Nat Friedman">
                            {"Nat Friedman"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@natfriedman">
                            {"@natfriedman"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="1:55 PM · Jun 20, 2024">
                      <time dateTime="2024-06-20T13:55:47.000Z">
                        {"1:55 PM · Jun 20, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 554 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"554"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 24 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 md:hidden">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1289046130366406656/-s-fxoLn_normal.jpg" alt="Ryan Hoover" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Ryan Hoover">
                            {"Ryan Hoover"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@rrhoover">
                            {"@rrhoover"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="8:49 PM · Mar 31, 2025">
                      <time dateTime="2025-03-31T20:49:45.000Z">
                        {"8:49 PM · Mar 31, 2025"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 322 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"322"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 38 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div data-theme="light" className="md:break-inside-avoid shrink-0 md:shrink w-auto max-w-xs md:max-w-none [&>div]:-mt-2 md:mb-4 md:hidden">
              <div className="react-tweet-theme tweet-container_root__VmLHz">
                <article className="tweet-container_article__GDbDF">
                  <div className="tweet-header_header__B2OkB">
                    <a href="#" className="tweet-header_avatar__PB6Aj" target="_blank" rel="noopener noreferrer">
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <img src="/external/twimg-pbs/profile_images/1786076507330195456/6HobRr_a_normal.jpg" alt="Soleio" width="48" height="48" />
                      </div>
                      <div className="tweet-header_avatarOverflow__l_yuF">
                        <div className="tweet-header_avatarShadow__jyGv_" />
                      </div>
                    </a>
                    <div className="tweet-header_author__IGM_Z">
                      <a href="#" className="tweet-header_authorLink__3zMcT" target="_blank" rel="noopener noreferrer">
                        <div className="tweet-header_authorLinkText__Nn5YU">
                          <span title="Soleio">
                            {"Soleio"}
                          </span>
                        </div>
                        <div className="tweet-header_authorVerified__BSCMK verified-badge_verifiedBlue__U8Y1R">
                          <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" className="icons_verified__4P1kZ">
                            <g>
                              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                            </g>
                          </svg>
                        </div>
                      </a>
                      <div className="tweet-header_authorMeta__xcIir">
                        <a href="#" className="tweet-header_username__SfTuK" target="_blank" rel="noopener noreferrer">
                          <span title="@soleio">
                            {"@soleio"}
                          </span>
                        </a>
                        <div className="tweet-header_authorFollow__8QcQE">
                          <span className="tweet-header_separator__kSdOS">
                            {"·"}
                          </span>
                          <a href="#" className="tweet-header_follow__SwTAx" target="_blank" rel="noopener noreferrer">
                            {"Follow"}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="tweet-header_brand__QWWAu" target="_blank" rel="noopener noreferrer" aria-label="View on Twitter">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-header_twitterIcon__90Da2">
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <p className="tweet-body_root__xyuSF" lang="en" dir="auto">
                    {"Placeholder tweet text. Replace it with a quote you have permission to use; this stands in for the original post and roughly matches its length. Placeholder tweet text. Replace it with a quote you have permission to use; this."}
                  </p>
                  <div className="tweet-info_info__DmnOZ">
                    <a className="tweet-info-created-at_root__nRn6X" href="#" target="_blank" rel="noopener noreferrer" aria-label="1:36 PM · Aug 8, 2024">
                      <time dateTime="2024-08-08T13:36:38.000Z">
                        {"1:36 PM · Aug 8, 2024"}
                      </time>
                    </a>
                    <a className="tweet-info_infoLink__XRQdD" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter for Websites, Ads Information and Privacy">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-info_infoIcon__KbdH0">
                        <g>
                          <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="tweet-actions_actions__Y7JQS">
                    <a className="tweet-actions_like__PJGKH" href="#" target="_blank" rel="noopener noreferrer" aria-label="Like. This Tweet has 44 likes">
                      <div className="tweet-actions_likeIconWrapper__DyYb_">
                        <svg viewBox="0 0 24 24" className="tweet-actions_likeIcon__eMCa6" aria-hidden="true">
                          <g>
                            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_likeCount__Xckhq">
                        {"44"}
                      </span>
                    </a>
                    <a className="tweet-actions_reply__en0IU" href="#" target="_blank" rel="noopener noreferrer" aria-label="Reply to this Tweet on Twitter">
                      <div className="tweet-actions_replyIconWrapper__eT7_V">
                        <svg viewBox="0 0 24 24" className="tweet-actions_replyIcon__1LN4U" aria-hidden="true">
                          <g>
                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_replyText__kMl0m">
                        {"Reply"}
                      </span>
                    </a>
                    <button type="button" className="tweet-actions_copy__2YVai" aria-label="Copy link">
                      <div className="tweet-actions_copyIconWrapper__bvZ3d">
                        <svg viewBox="0 0 24 24" className="tweet-actions_copyIcon__HxZq5" aria-hidden="true">
                          <g>
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" />
                          </g>
                        </svg>
                      </div>
                      <span className="tweet-actions_copyText__fz9jS">
                        {"Copy link"}
                      </span>
                    </button>
                  </div>
                  <div className="tweet-replies_replies__YvnMZ">
                    <a className="tweet-replies_link__QInlj" href="#" target="_blank" rel="noopener noreferrer">
                      <span className="tweet-replies_text__M7LC9">
                        {"Read 3 replies"}
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
