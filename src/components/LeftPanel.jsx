import PixelArt from './PixelArt.jsx';

export default function LeftPanel() {
  return (
    <section className="left flex flex-col pt-0.5">
      <div className="flex items-center justify-between">
        

        {/* <button
          className="menu flex items-center gap-2 rounded-full border-[1.5px] border-[var(--ink)] bg-[var(--surface)] py-0.5 pl-0.5 pr-3 text-[13px]"
          data-a
        >
          <span className="grid size-[26px] place-items-center rounded-full bg-[var(--ink)]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
              className="text-[var(--on-ink)]"
            >
              <circle cx="4" cy="4" r="2.6" />
              <circle cx="10" cy="4" r="2.6" />
              <circle cx="4" cy="10" r="2.6" />
              <circle cx="10" cy="10" r="2.6" fill="#f97e56" />
            </svg>
          </span>
          Menu
        </button> */}
      </div>

      <h1 className="hero-title mt-[110px] text-[36.5px] font-normal uppercase leading-[1.24] tracking-[-0.3px] [font-family:var(--display)] max-[1100px]:mt-14 max-[720px]:text-[30px]">
        <span className="row flex items-center gap-2 whitespace-nowrap" data-a>
          Grow{' '}
          <span
            className="hl ml-0.5 inline-block rotate-[-3deg] rounded-[22px] px-3 pl-2.5 [background:linear-gradient(100deg,var(--indigo-soft)_0%,var(--blush)_55%,var(--peach)_100%)]"
            data-a
          >
            Your
          </span>
        </span>
        <span className="row flex items-center gap-2 whitespace-nowrap" data-a>
          Money with{' '}
          <span className="twin ml-1 inline-flex shrink-0 items-center">
            <i
              className="block size-[30px] shrink-0 rounded-full border-[1.5px] border-[var(--indigo)]"
              data-a
            />
            <PixelArt
              type="mosaic"
              as="i"
              className="relative -ml-3.5 block size-[30px] shrink-0 rounded-full border-2 border-[var(--card)]"
              data-a
            />
          </span>
        </span>
        <span className="row flex items-center gap-2 whitespace-nowrap" data-a>
          Conviction
        </span>
      </h1>

      <div
        className="divider my-4 mt-[26px] h-px origin-left [background:linear-gradient(90deg,var(--indigo)_0%,var(--line)_45%)]"
        data-a
      />

      <p className="lead max-w-[240px] text-[12.5px] leading-[1.38] text-[var(--text-2)]" data-a>
        <span className="text-[var(--indigo)]">• //</span>
        With research-driven portfolios and disciplined risk management, your capital is built to
        compound
      </p>

      <div className="cta mt-[38px] flex gap-4">
        <a
          href="#"
          className="btn flex h-[33px] w-[120px] items-center justify-center gap-[7px] rounded-full bg-[var(--ink)] text-[13px] text-[var(--on-ink)] transition-[box-shadow,background] duration-300 hover:shadow-[0_8px_22px_-6px_rgba(68,83,196,.6)]"
          data-a
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--orange)"
            strokeWidth="2"
            strokeLinejoin="round"
          >
            <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
          </svg>
          Invest
        </a>
        <a
          href="#"
          className="btn flex h-[33px] w-[120px] items-center justify-center gap-[7px] rounded-full border-[1.5px] border-[var(--ink)] text-[13px] transition-[box-shadow,background] duration-300 hover:bg-[var(--indigo-soft)]"
          data-a
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          Explore
        </a>
      </div>

      <div className="promo mt-auto max-[1100px]:mt-10">
        <p className="mb-2 max-w-[150px] text-[11.5px] leading-[1.28]" data-a>
          Start building your portfolio with PillarCap today
        </p>
        <div className="flex items-center gap-3">
          <PixelArt
            type="columns"
            className="promo-img relative h-[70px] w-[175px] rounded-lg"
            data-a
          >
            <span
              className="absolute -right-px -top-px z-[1] h-6 w-[34px] rounded-bl-[10px] bg-[var(--card)]"
              aria-hidden="true"
            />
          </PixelArt>
          <div className="promo-nav flex items-center">
            <a
              href="#"
              className="go relative z-[2] grid size-[34px] place-items-center rounded-full bg-[var(--ink)] text-[var(--on-ink)]"
              data-a
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M0 6h14M9 1l5 5-5 5" />
              </svg>
            </a>
            <span
              className="half -ml-px h-[34px] w-[17px] rounded-r-[17px] border-[1.5px] border-l-0 border-[var(--indigo)]"
              data-a
            />
            <span
              className="half h-[34px] w-[17px] rounded-r-[17px] border-[1.5px] border-l-0 border-[var(--orange)]"
              data-a
            />
          </div>
        </div>
      </div>
    </section>
  );
}
