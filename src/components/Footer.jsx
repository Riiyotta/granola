import { openMobileDialog } from './MobileDialog.jsx'
import FooterCta from './footer-cta/index.jsx'
// Footer markup ported 1:1 from the original site. The link grid and bottom row are shared
// with the mobile nav menu (which renders them without the "Features" column),
// exactly as the live site does.

export function FooterLinkGrid({ withFeatures = true }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:justify-between">
      {withFeatures && (
        <div className="flex flex-col gap-1.5 items-start">
          <div className="mb-2 py-1 font-quadrant text-2xl leading-[0.95] tracking-[-0.01em] text-ink-primary">
            {"Features"}
          </div>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="/">
            {"Notepad"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="/chat">
            {"Chat"}
          </a>
          <button type="button" className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance text-left bg-transparent border-0 cursor-pointer p-0 font-inherit" aria-haspopup="dialog" aria-expanded="false" data-state="closed" onClick={(e) => { e.preventDefault(); openMobileDialog() }}>
            {"Mobile"}
          </button>
        </div>
      )}
      <div className="contents md:flex md:justify-end md:gap-x-12 lg:gap-x-20">
        <div className="flex flex-col gap-1.5 items-start">
          <div className="mb-2 py-1 font-quadrant text-2xl leading-[0.95] tracking-[-0.01em] text-ink-primary">
            {"Product"}
          </div>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="/pricing">
            {"Pricing"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="/enterprise">
            {"Enterprise"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Integrations"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"AI notepad vs notetaker"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"For sales"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"For product management"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"MCP"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Explore more…"}
          </a>
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="mb-2 py-1 font-quadrant text-2xl leading-[0.95] tracking-[-0.01em] text-ink-primary">
            {"Company"}
          </div>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Customers"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="/jobs">
            {"Careers"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Press"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Events"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Startup program"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Student program"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Nonprofit program"}
          </a>
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <div className="mb-2 py-1 font-quadrant text-2xl leading-[0.95] tracking-[-0.01em] text-ink-primary">
            {"Resources"}
          </div>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="/blog">
            {"Blog"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Security"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Transparency"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Help Center"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Status"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Affiliates"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Contact us"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Terms"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"Privacy"}
          </a>
          <a className="flex min-h-6 items-center py-2 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0.5 text-balance" href="#">
            {"License"}
          </a>
        </div>
      </div>
    </div>
  )
}

export function FooterBottomRow() {
  return (
    <div className="mt-8 md:mt-16 pb-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="flex gap-4 items-center text-content-secondary">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-content-primary transition-colors" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-content-primary transition-colors" aria-label="X (Twitter)">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-content-primary transition-colors" aria-label="YouTube">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>
      <div className="flex items-center justify-start md:justify-end">
        <div className="grid-pile group relative text-right">
          <div className="text-content-secondary md:transition-transform md:duration-700 md:ease-in-out-expo md:translate-x-0 md:group-hover:-translate-x-[24ch] md:pointer-events-none">
            {"© Granola, Inc. 2026"}
          </div>
          <div className="text-content-secondary transition-[clip-path] duration-500 group-hover:delay-100 ease-in-out-expo [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0_0_0_0)] hidden md:block">
            {"Made with ♥ in Shoreditch"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Footer({ cta = false }) {
  return (
    <footer className="mt-16">
      <section id="footer" className="flex overflow-visible relative flex-col w-full items-center px-4 md:px-10 2xl:px-0 lg:max-w-7xl justify-center !pb-0 mx-auto text-center gap-16 md:gap-20 lg:gap-28">
        {cta && <FooterCta />}
        <div className="w-full text-left text-ink-primary text-base leading-[0.95] tracking-[0.02em]">
          <FooterLinkGrid />
          <FooterBottomRow />
          <div className="flex justify-center pointer-events-none pb-20 md:pt-10 md:pb-12" aria-hidden="true">
            <svg viewBox="0 0 1498 316" className="w-full h-auto text-fill-primary" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M275.501 267.161C268.571 274.811 262.634 279.443 259.362 281.657C257.823 282.664 256.861 284.072 255.514 285.279C248.392 291.318 240.673 293.115 235.284 297.342C227.969 302.979 200.644 309.68 192.879 312.03C179.74 314.968 164.958 316.028 148.789 315.424C145.291 315.424 142.055 315.423 139.082 315.196C137.874 315.103 136.664 315.409 135.452 315.424C135.404 315.424 135.359 315.424 135.317 315.424C135.188 315.424 134.974 315.334 134.673 315.154C134.332 314.95 133.947 314.82 133.548 314.82C133.443 314.82 133.338 314.81 133.235 314.797C131.605 314.577 130.739 315.14 130.112 315.452C129.637 315.689 129.121 315.491 128.671 315.21C127.25 314.322 124.078 312.327 122.999 312.003C121.935 311.685 121.83 312.12 121.265 312.218C120.886 312.283 120.492 312.152 120.207 311.898C119.888 311.614 119.547 311.204 118.764 310.794C117.324 310.041 116.557 311.752 114.417 309.837C114.106 309.559 113.924 309.012 113.504 308.986C113.399 308.98 113.323 308.973 113.22 308.954C111.065 308.542 107.151 307.754 104.52 306.969C101.44 306.163 102.4 305.561 101.053 304.957C82.9594 298.314 57.1683 285.228 47.7366 275.969C44.2721 272.546 40.2303 264.695 37.7278 262.682C35.8029 261.071 31.9524 257.851 30.9899 256.241C30.2201 254.831 30.9885 252.216 29.6417 250.404C27.9093 248.189 24.4439 246.981 21.1717 241.948C17.5146 236.312 15.3975 228.864 11.7405 221.215C8.66074 214.572 7.34331e-05 192.83 0 153.174C0 126.602 12.5115 89.7617 17.9012 84.7293C21.3647 81.508 20.9795 74.4637 23.481 71.0416C52.0367 31.9888 102.016 3.25771 161.494 0.238034C163.911 0.116039 166.33 0.0399637 168.749 0.0121784C183.424 -0.156335 198.13 1.42267 212.391 4.84415C226.64 8.2626 240.261 13.597 253.538 19.6612C253.538 19.6612 255.115 19.7841 255.531 19.9849C256.223 20.3199 256.516 20.93 257.208 21.2655C257.901 21.6005 258.902 21.3163 259.659 21.4687C262.153 21.971 262.601 23.4279 263.06 24.0084C263.618 24.7132 264.289 24.9825 265.557 25.3407C268.866 26.2748 269.301 27.3503 269.751 27.8455C270.11 28.2415 270.266 28.7548 270.446 29.2148C270.628 29.6826 270.99 30.1097 271.497 30.2266C272.593 30.4793 274.084 31.7993 274.392 33.6C274.593 34.774 275.884 35.2798 275.531 37.482C275.417 38.1953 276.189 39.2498 272.132 43.1847C268.075 47.1197 259.561 49.6001 254.378 47.6456C236.461 40.8891 233.804 39.5887 226.606 37.6577C213.467 34.1326 202.272 31.7374 188.636 31.9899C166.885 32.3925 149.752 34.4057 129.156 41.4513C120.128 44.5984 103.084 53.1622 94.5314 59.8307C85.979 66.4992 73.5968 75.7099 68.4865 84.2361C66.697 87.2217 64.683 90.0735 60.4486 94.7032C54.2893 101.346 47.1599 120.561 44.8497 129.821C44.2721 131.834 45.8096 134.049 45.04 136.062C44.27 138.276 40.6126 139.285 40.2276 141.097C38.688 147.538 39.073 155.791 39.073 162.836C39.073 166.66 40.2286 171.893 41.5759 174.913C42.5381 176.926 45.6194 178.336 46.0043 180.349C46.1966 181.757 44.2742 183.367 44.2725 184.575C44.2725 185.581 46.003 199.273 46.9655 201.286C48.3135 203.701 52.5486 206.72 53.7035 209.538C54.4731 211.551 52.3538 213.565 53.8937 215.578C54.856 216.786 57.9383 216.785 59.0933 218.395C60.6328 220.408 63.9039 226.244 65.4442 228.057C66.5991 229.466 68.7167 230.072 69.6789 230.676C72.5654 232.689 70.0653 234.499 72.7594 237.518C81.2286 246.979 94.3182 258.657 106.83 263.891C108.76 264.698 128.566 272.138 129.733 272.143C157.642 276.192 189.031 275.812 216.172 260.916C222.525 257.493 258.509 232.889 264.476 203.701C265.823 197.864 267.556 183.77 266.786 178.134C263.705 157.198 250.592 127.085 226.555 115.933C213.75 109.992 204.034 110.095 201.532 110.497C194.218 111.906 191.715 107.679 184.979 108.282C164.383 109.893 144.172 115.53 128.389 131.836C113.952 146.933 111.062 166.259 118.377 178.538C119.147 180.148 118.762 182.162 117.222 183.169C116.549 183.571 115.923 184.074 115.635 184.603C115.06 185.654 116.721 186.215 117.865 186.609C125.872 189.365 128.759 202.654 139.358 202.091H141.667C141.667 202.091 146.096 202.09 147.828 200.077C149.252 198.422 149.246 196.496 148.236 195.639C147.786 195.257 147.217 195.028 147.085 194.458C146.94 193.829 146.867 193.002 146.867 192.63C146.867 192.227 147.444 192.024 147.444 191.621C147.443 190.414 146.097 189.407 146.29 188.2C146.413 187.557 147.32 186.668 147.96 186.004C148.446 185.5 148.453 184.858 148.135 184.237C148.124 184.215 148.112 184.192 148.101 184.169C147.793 183.546 147.735 182.807 147.945 182.145C148.066 181.765 148.212 181.359 148.212 180.953C148.404 179.142 147.637 178.336 147.444 176.928C147.444 176.43 150.186 175.249 151.153 174.51C151.438 174.293 151.468 173.929 151.374 173.586C151.174 172.855 150.909 172.629 150.909 171.292C150.909 170.97 151.185 170.52 151.516 170.096C152.185 169.241 152.8 168.329 153.102 167.292L153.634 165.466C153.856 164.702 154.446 164.094 155.212 163.842C156.538 163.403 155.923 161.276 157.186 160.683C157.554 160.511 158.477 160.73 159.956 160.42C163.034 159.817 160.918 158.81 161.494 157.2C161.763 156.214 162.598 156.312 163.405 156.39C164.052 156.454 164.682 156.245 165.147 155.799C165.605 155.36 166.067 154.845 166.69 154.584C167.471 154.257 169.518 154.194 170.982 154.183C171.585 154.177 172.184 154.093 172.782 154.023C174.417 153.834 176.737 153.946 177.857 153.779C179.204 153.577 179.973 152.369 181.127 152.369C182.09 152.369 183.439 153.979 184.401 153.979C185.364 153.979 186.326 153.174 187.288 153.174C187.865 153.174 188.058 154.179 189.02 154.18H189.404C189.404 154.18 198.26 154.38 207.499 160.016C213.851 163.841 218.472 173.102 218.472 173.102C222.898 180.55 217.987 188.208 217.987 195.052C217.987 197.87 218.948 200.286 218.371 202.903C217.986 204.915 216.446 206.527 215.868 208.138C215.291 209.547 215.292 211.359 213.369 213.974C211.829 216.188 211.057 216.188 210.672 216.59C210.094 217.194 205.11 224.609 201.838 227.427C193.176 235.077 185.17 237.317 173.428 237.518C168.232 237.72 167.654 238.727 166.884 238.727C164.189 238.929 151.873 238.326 148.022 237.722C148.022 237.722 130.891 234.501 124.153 231.281C120.496 229.67 96.434 212.156 91.0443 202.292C74.298 171.291 78.1491 138.277 95.4728 116.134C107.984 100.029 128.579 79.0937 177.47 75.0672C202.301 73.0542 224.439 76.2761 241.763 84.3283C266.208 95.6015 284.109 115.53 295.273 139.082C314.328 179.343 313.228 224.887 275.501 267.161ZM540.425 66.1333C545.319 66.1333 547.169 68.3906 547.169 73.2279V220.283C546.654 247.165 542.111 277.479 512.677 298.303C491.275 313.46 454.371 319.495 422.993 312.999C407.328 309.774 386.324 301.989 375.178 283.491C371.759 277.272 369.394 267.413 369.979 263.244C370.331 260.733 371.01 259.374 375.763 259.374H414.704C418.872 259.374 418.568 259.604 420.324 262.668C423.298 268.358 427.911 272.273 434.374 274.623L435.825 275.107C451.374 279.967 465.822 278.101 476.523 269.786C487.364 261.378 492.961 247.442 491.907 231.547L491.696 228.507L489.144 230.211C485.14 232.607 475.188 239.333 460.295 242.282C427.934 248.663 399.554 240.554 380.072 217.865C356.796 190.752 350.966 147.954 365.647 111.374C374.522 89.2371 391.991 73.0668 414.821 65.8567C438.448 58.3705 464.089 61.8257 485.14 75.2781C487.926 77.0057 490.174 77.2362 491.743 76.4069C492.937 75.7848 493.851 74.7944 494.412 71.3391C495.162 67.1927 497.34 66.1576 505.442 66.1576H540.425V66.1333ZM482.119 190.545C496.637 173.615 499.447 142.679 488.324 121.625C480.199 106.214 466.243 98.5894 449.032 100.202C423.836 102.528 412.456 124.343 410.232 143.992C406.79 174.444 421.565 195.728 437.933 201.026C443.389 202.8 448.658 203.675 453.645 203.675C464.885 203.675 474.696 199.229 482.119 190.568V190.545ZM676.287 67.0099C676.287 64.3609 674.624 63.9002 672.001 63.4625C669.496 63.0479 664.766 62.6102 661.23 62.6102C647.578 62.6102 630.134 66.8024 619.76 74.358C618.449 75.1182 617.934 75.3714 616.599 75.1182C615.358 74.8877 614.445 73.7132 613.696 72.2388C611.822 68.53 611.19 66.1576 607.233 66.1576L570.631 66.1576C567.088 66.1576 564.215 68.9834 564.215 72.4693V245.324C564.215 248.81 567.088 251.636 570.631 251.636H608.005C611.549 251.636 614.422 248.81 614.422 245.324V150.581C614.422 116.466 635.191 111.352 647.579 111.352C650.828 111.352 666.292 111.352 673.08 111.352C674.852 111.352 676.287 109.939 676.287 108.196V67.0099ZM687.782 114.945V114.899C688.321 110.96 689.374 105.224 691.506 100.502C697.313 90.8273 703.517 82.4884 712.298 76.7068C728.996 65.6959 752.06 59.9833 777.301 60.6745C821.677 61.8491 846.402 80.8072 850.877 116.995C851.439 121.51 850.994 206.831 850.994 217.75C850.994 226.78 851.907 233.875 852.586 239.057C853.288 244.678 853.802 248.732 852.492 250.206C851.624 251.174 849.493 251.636 845.983 251.636H807.274C805.263 251.636 804.7 250.598 803.972 245.553L803.904 245.07C803.67 242.927 802.289 242.282 800.697 242.282C800.017 242.259 799.361 242.467 798.776 242.858C775.475 259.098 738.222 260.78 712.041 246.774C693.823 237.008 682.163 218.234 681.624 197.825C681.132 178.844 690.219 162.282 706.562 152.4C722.532 142.771 740.094 139.961 757.071 137.243C767.795 135.538 778.871 133.765 789.41 130.286C795.637 128.213 799.244 123.929 799.244 118.492C799.289 111.559 793.599 104.556 785.708 101.884C781.916 100.571 776.671 99.834 771.143 99.834C761.52 99.834 751.052 102.091 745.807 107.712C743.068 110.637 742.109 113.678 741.43 115.912C740.494 118.976 740.211 119.644 737.682 119.644C736.09 119.644 733.162 119.69 729.509 119.759C720.566 119.944 701.506 120.243 692.114 119.944C689.468 119.874 687.479 117.571 687.808 114.945H687.782ZM800.905 166.336C800.859 165.138 800.108 164.079 799.712 163.756C798.587 162.789 797.135 162.927 796.127 163.088C788.286 164.355 764.682 169.976 759.882 171.496C749.437 174.79 733.724 179.812 733.724 195.798C733.724 207.937 743.535 216.161 759.294 217.243C760.396 217.312 761.497 217.359 762.622 217.359C779.878 217.359 798.587 208.283 800.882 192.32C801.912 185.34 800.931 167.073 800.882 166.336H800.905ZM1035.65 145.629C1035.65 147.357 1035.6 149.061 1035.6 150.743V245.324C1035.6 248.81 1032.75 251.636 1029.24 251.636H990.049C986.536 251.636 983.688 248.81 983.688 245.324V134.25C983.688 114.785 971.895 103.613 951.302 103.613C930.706 103.613 917.985 119.669 917.985 142.634V245.324C917.985 248.81 915.137 251.636 911.624 251.636H874.568C871.055 251.636 868.207 248.81 868.207 245.324V72.4693C868.207 68.9834 871.055 66.1576 874.568 66.1576H909.07C911.996 66.1576 913.11 67.264 914.083 70.2816C915.92 75.9942 918.775 73.4833 920.773 72.4469C929.827 67.7477 939.113 64.3155 946.566 62.726C962.538 59.3628 1002.03 55.4009 1020.9 82.1908C1035.95 103.475 1035.76 126.855 1035.65 145.629ZM1331.65 114.945C1331.32 117.571 1333.31 119.874 1335.96 119.944C1345.35 120.243 1364.41 119.944 1373.35 119.759C1377 119.69 1379.93 119.644 1381.53 119.644C1384.05 119.644 1384.34 118.976 1385.27 115.912C1385.95 113.678 1386.91 110.637 1389.65 107.712C1394.9 102.091 1405.36 99.834 1414.99 99.834C1420.51 99.834 1425.76 100.571 1429.55 101.884C1437.44 104.556 1443.13 111.559 1443.09 118.492C1443.09 123.929 1439.48 128.213 1433.25 130.286C1422.71 133.765 1411.64 135.538 1400.91 137.243C1383.94 139.961 1366.37 142.771 1350.41 152.4C1334.06 162.282 1324.98 178.844 1325.47 197.825C1326.01 218.234 1337.67 237.008 1355.88 246.774C1382.06 260.78 1419.32 259.098 1442.62 242.858C1443.2 242.467 1443.86 242.259 1444.54 242.282C1446.13 242.282 1447.51 242.927 1447.75 245.07L1447.82 245.553C1448.54 250.598 1449.11 251.636 1451.12 251.636H1489.83C1493.34 251.636 1495.47 251.174 1496.34 250.206C1497.64 248.732 1497.13 244.678 1496.43 239.057C1495.75 233.875 1494.84 226.78 1494.84 217.75C1494.84 206.831 1495.28 121.51 1494.72 116.995C1490.24 80.8072 1465.52 61.8491 1421.14 60.6745C1401.83 60.1457 1381.42 63.1577 1364.11 71.9783C1348.91 79.7243 1332.06 96.3788 1331.63 114.307C1331.63 114.504 1331.62 114.701 1331.62 114.899V114.945H1331.65ZM1444.72 166.336C1444.77 167.073 1445.75 185.34 1444.72 192.32C1442.43 208.283 1423.72 217.359 1406.46 217.359C1405.34 217.359 1404.24 217.312 1403.14 217.243C1387.38 216.161 1377.57 207.937 1377.57 195.798C1377.57 179.812 1393.28 174.79 1403.72 171.496C1408.53 169.976 1432.13 164.355 1439.97 163.088C1440.98 162.927 1442.43 162.789 1443.55 163.756C1443.95 164.079 1444.7 165.138 1444.75 166.336H1444.72ZM1305.46 251.636H1268.08C1264.54 251.636 1261.67 248.81 1261.67 245.324V6.31175C1261.67 2.82587 1264.54 0 1268.08 0L1305.46 0C1309 0 1311.87 2.82587 1311.87 6.31175V245.324C1311.87 248.81 1309 251.636 1305.46 251.636ZM1215.31 85.5623C1197.46 69.2159 1176.67 60.2063 1148.67 60.2063C1120.67 60.2063 1099.87 69.2159 1082.02 85.5623C1043.65 120.705 1039.59 187.011 1074.26 225.839C1092.65 246.425 1120.24 257.62 1148.67 257.62C1177.09 257.62 1204.69 246.425 1223.07 225.839C1257.74 187.011 1253.68 120.705 1215.31 85.5623ZM1194.32 159.718C1194.19 173.16 1191.16 186.922 1183.33 197.941C1175.6 208.827 1164.75 216.149 1148.67 216.149C1132.59 216.149 1121.74 208.827 1114 197.941C1106.18 186.922 1103.15 173.16 1103.01 159.718C1102.87 146.028 1105.72 131.949 1113.55 120.631C1121.38 109.313 1133.4 101.834 1148.67 101.834C1163.93 101.834 1175.96 109.313 1183.79 120.631C1191.62 131.949 1194.47 146.028 1194.32 159.718Z" />
            </svg>
          </div>
        </div>
      </section>
    </footer>
  )
}
