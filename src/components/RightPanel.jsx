import ArrowIcon from './ArrowIcon.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const skills = [
  { name: 'React', mark: '⚛', level: 92 },
  { name: 'Vite', mark: 'ϟ', level: 88 },
  { name: 'JavaScript', mark: 'JS', level: 90 },
  { name: 'Tailwind CSS', mark: '≈', level: 86 },
  { name: 'Zustand', mark: 'Z', level: 82 },
  { name: 'TanStack Query', mark: 'TQ', level: 78 },
];

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

function OrbitTag({ className, dot, title, subtitle }) {
  return (
    <span
      className={`tag absolute flex items-center gap-2 text-right text-[10.5px] leading-[1.2] ${className}`}
      data-a
    >
      <span>
        <b className="block font-medium text-[var(--text-2)]">{title}</b>
        <small className="block text-[9px] text-[var(--muted)]">{subtitle}</small>
      </span>
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
      </div>

      <div className="orbit relative mb-6 mt-5 h-[170px] shrink-0 max-[1100px]:mt-6">
        <div
          className="ring absolute right-0 top-0 size-[158px] rounded-full border border-[var(--line)]"
          data-a
        >
          <span
            className="absolute -inset-px rotate-[10deg] rounded-full border-[1.5px] border-transparent border-b-[rgba(249,126,86,.6)] border-l-[var(--indigo)]"
            aria-hidden="true"
          />
        </div>
        <img
          className="pic absolute right-5 top-5 size-[118px] rounded-full object-cover object-top"
          src="/images/profile.jpg"
          alt="프로필 사진"
          data-a
        />
        <OrbitTag
          className="right-[118px] top-0"
          dot="var(--indigo)"
          title="Frontend Developer"
          subtitle="Web · Product · Service"
        />
        <OrbitTag
          className="right-[150px] top-[43px]"
          dot="var(--mauve)"
          title="UI × Interaction"
          subtitle="Design to Code"
        />
        <OrbitTag
          className="right-[148px] top-[91px]"
          dot="var(--orange)"
          title="React / JavaScript"
          subtitle="Always Learning"
        />
      </div>

      <div className="plans grid">
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
          <div className="pic relative h-[54px] w-24 rounded-[9px] bg-[var(--art-bg)]">
            <span
              className="absolute -left-px -top-px z-[1] size-4 rounded-br-lg bg-[var(--card)]"
              aria-hidden="true"
            />
          </div>
        </div>

        <PlanRow label="Growth plan" value="8.4% avg p.a." dot="var(--mauve)" />
        <PlanRow label="Wealth plan" value="Private advisor" dot="var(--orange)" />
      </div>

      <div className="stats mt-5 rounded-[14px] bg-[var(--soft)] px-3.5 pb-3 pt-3" data-a>
        <header className="flex items-center justify-between text-[11.5px] [font-family:var(--display)]">
          <span className="flex items-center gap-2 font-medium tracking-[0.02em]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--indigo)"
              strokeWidth="1.8"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
              <path d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" />
            </svg>
            CORE STACK
          </span>
        </header>
        <div className="chart mt-3 grid grid-cols-6 gap-1">
          {skills.map(skill => (
            <div className="col flex min-w-0 flex-col items-center text-center" key={skill.name}>
              <span className="mb-1.5 grid size-6 place-items-center rounded-lg bg-[var(--surface)] text-[9px] font-semibold text-[var(--indigo)] shadow-[0_4px_10px_var(--glow)]">
                {skill.mark}
              </span>
              <span className="bar flex h-[62px] w-3.5 items-end overflow-hidden rounded-full bg-[var(--surface)]">
                <i
                  className="block w-full rounded-full"
                  data-height={skill.level}
                  style={{
                    height: `${skill.level}%`,
                    background:
                      'linear-gradient(180deg, var(--indigo) 0%, #9a6fb8 55%, var(--orange) 100%)',
                  }}
                />
              </span>
              <span className="mt-1.5 min-h-5 text-[7.5px] leading-[1.15] text-[var(--text-2)]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
