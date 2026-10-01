import ArrowIcon from './ArrowIcon.jsx';
import PixelArt from './PixelArt.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const bars = [40, 57, 74, 60, 85];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

function PlanRow({ label, value, dot = 'var(--indigo)' }) {
  return (
    <div className="plan mb-[11px] flex items-center justify-between" data-a>
      <span className="inline-flex h-[22px] items-center gap-[7px] rounded-full bg-[var(--soft)] py-0 pl-2.5 pr-3 text-[11px]">
        <i className="size-[7px] rounded-full" style={{ background: dot }} aria-hidden="true" />
        {label}
      </span>
      <span className="ml-auto mr-2.5 text-[11px] text-[var(--muted)] [font-family:var(--display)]">
        {value}
      </span>
      <button className="grid size-5 place-items-center rounded-full bg-[var(--ink)] text-[13px] leading-none text-[var(--on-ink)] transition-colors duration-300 hover:bg-[var(--indigo)]">
        +
      </button>
    </div>
  );
}

function OrbitTag({ className, dot, children }) {
  return (
    <span
      className={`tag absolute flex items-center gap-2 text-right text-[10.5px] leading-[1.2] ${className}`}
      data-a
    >
      {children}
      <i
        className="size-[7px] shrink-0 rounded-full shadow-[0_0_0_3px_var(--card)]"
        style={{ background: dot }}
        aria-hidden="true"
      />
    </span>
  );
}

export default function RightPanel() {
  return (
    <section className="right flex flex-col">
      <div className="flex items-center gap-2.5">
        <label
          className="search flex h-[30px] min-w-0 flex-1 origin-right items-center justify-between rounded-full bg-[var(--soft)] px-3 text-[11.5px] [font-family:var(--display)]"
          data-a
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            className="ml-2 min-w-0 flex-1 border-0 bg-transparent outline-none [font:inherit]"
            type="text"
            aria-label="Search"
          />
          <span className="font-medium text-[var(--indigo)]">GO</span>
        </label>
        <ThemeToggle />
        <img
          className="avatar size-8 shrink-0 rounded-full bg-[var(--indigo-soft)] object-cover object-top shadow-[0_0_0_2px_var(--card),0_0_0_3px_var(--indigo-soft)]"
          src="/images/profile.jpg"
          alt="프로필"
          data-a
        />
      </div>

      <div className="plans mt-[34px] grid">
        <PlanRow label="Starter plan" value="From $500" />

        <div className="plan-body -mt-0.5 mb-[18px] flex items-start justify-between" data-a>
          <div>
            <p className="max-w-[100px] text-[10.5px] leading-[1.25] text-[var(--muted)]">
              Begin investing with a low entry and zero lock-in!
            </p>
            <a
              href="#"
              className="mt-[7px] inline-flex items-center gap-1 text-[10.5px] text-[var(--indigo)]"
            >
              Invest <ArrowIcon size={9} stroke="currentColor" strokeWidth={1.3} />
            </a>
          </div>
          <PixelArt type="ticker" className="pic relative h-[54px] w-24 rounded-[9px]">
            <span
              className="absolute -left-px -top-px z-[1] size-4 rounded-br-lg bg-[var(--card)]"
              aria-hidden="true"
            />
          </PixelArt>
        </div>

        <PlanRow label="Growth plan" value="8.4% avg p.a." dot="var(--mauve)" />
        <PlanRow label="Wealth plan" value="Private advisor" dot="var(--orange)" />
      </div>

      <div className="stats mb-8 mt-5 rounded-[14px] bg-[var(--soft)] py-3 pl-[18px] pr-4" data-a>
        <header className="flex items-center justify-between text-[11.5px]">
          <span>Portfolio growth</span>
          <svg width="13" height="13" viewBox="0 0 24 24" className="fill-[var(--indigo)]">
            <path d="M12 2a5 5 0 0 1 5 5H7a5 5 0 0 1 5-5zM22 12a5 5 0 0 1-5 5V7a5 5 0 0 1 5 5zM12 22a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5zM2 12a5 5 0 0 1 5-5v10a5 5 0 0 1-5-5z" />
          </svg>
        </header>
        <div className="chart mt-2.5 grid grid-cols-[28px_repeat(5,1fr)]">
          <div className="grid content-end gap-[3px] pb-5 text-[10px] text-[var(--muted)] [font-family:var(--display)]">
            {['20%', '15%', '10%', '5%'].map(value => (
              <span className="h-[13.5px]" key={value}>
                {value}
              </span>
            ))}
          </div>
          {bars.map((height, index) => (
            <div className="col flex flex-col items-center gap-1.5 text-[10px]" key={months[index]}>
              <span className="bar flex h-[66px] w-[13px] items-end overflow-hidden rounded-full bg-[var(--surface)]">
                <i
                  className="block w-full rounded-full"
                  data-height={height}
                  style={{
                    height: `${height}%`,
                    background:
                      'linear-gradient(180deg, var(--indigo) 0%, #9a6fb8 55%, var(--orange) 100%)',
                  }}
                />
              </span>
              {months[index]}
            </div>
          ))}
        </div>
      </div>

      <div className="orbit relative mt-auto h-[170px] max-[1100px]:mt-10">
        <div
          className="ring absolute right-0 top-0 size-[158px] rounded-full border border-[var(--line)]"
          data-a
        >
          <span
            className="absolute -inset-px rotate-[10deg] rounded-full border-[1.5px] border-transparent border-b-[rgba(249,126,86,.6)] border-l-[var(--indigo)]"
            aria-hidden="true"
          />
        </div>
        <PixelArt
          type="globe"
          className="pic absolute right-5 top-5 size-[118px] rounded-full shadow-[0_14px_30px_-10px_rgba(249,126,86,.45)]"
          data-a
        />
        <OrbitTag className="right-[118px] top-0" dot="var(--indigo)">
          98% client
          <br />
          retention
        </OrbitTag>
        <OrbitTag className="right-[150px] top-[38px]" dot="var(--mauve)">
          Tracking markets
          <br />
          around the clock
        </OrbitTag>
        <OrbitTag className="right-[148px] top-[88px]" dot="var(--orange)">
          Top-rated
          <br />
          fund manager
        </OrbitTag>
      </div>
    </section>
  );
}
