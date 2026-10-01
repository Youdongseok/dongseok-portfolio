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

      <h1 className="hero-title text-[36.5px] font-normal uppercase leading-[1.24] tracking-[-0.3px] [font-family:var(--display)] max-[720px]:text-[30px]">
        <span className="row flex items-center gap-2 whitespace-nowrap" data-a>
          FRONTEND{' '}
        </span>
        <span className="row flex items-center gap-2 whitespace-nowrap" data-a>
          DEVELOPER
          <span className="twin ml-1 inline-flex shrink-0 items-center">
            <i
              className="block size-[30px] shrink-0 rounded-full border-[1.5px] border-[var(--indigo)]"
              data-a
            />
            <i
              className="-ml-3.5 block size-[30px] shrink-0 rounded-full border-2 border-[var(--card)] bg-[var(--art-bg)]"
              data-a
            />
          </span>
        </span>
        <span className="row flex items-center gap-2 whitespace-nowrap" data-a>
          유동석
        </span>
      </h1>

      <div
        className="divider my-4 mt-[26px] h-px origin-left [background:linear-gradient(90deg,var(--indigo)_0%,var(--line)_45%)]"
        data-a
      />
      <div className="lead-title mb-2 text-[var(--indigo)]">
        <span className="block" data-a>
          개발은 결과물이 아니라
        </span>
        <span className="block" data-a>
          과정 그 자체의 즐거움입니다.
        </span>
      </div>
      <p className="lead max-w-[240px] text-[12.5px] leading-[1.38] text-[var(--text-2)]" data-a>
단순히 만드는 것에 그치지 않고, 과정의 의미와 결과의 가치를 중요하게 생각합니다.
주인의식을 가지고 끝까지 책임지며, 더 나은 개발자가 되기 위해 꾸준히 배우고 만들어갑니다.
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
          <div
            className="promo-img relative h-[70px] w-[175px] rounded-lg bg-[var(--art-bg)]"
            data-a
          >
            <span
              className="absolute -right-px -top-px z-[1] h-6 w-[34px] rounded-bl-[10px] bg-[var(--card)]"
              aria-hidden="true"
            />
          </div>
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
