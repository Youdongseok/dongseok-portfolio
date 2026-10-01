import ArrowIcon from './ArrowIcon.jsx'
import PixelArt from './PixelArt.jsx'

const glassClass = 'border border-[var(--glass-line)] [background:var(--glass)] shadow-[0_10px_30px_-8px_rgba(68,83,196,.22)] backdrop-blur-[14px] backdrop-saturate-[1.4]'

function Hotspot({ className = '', style, reverse = false, pulseDelay = '2.4s', pulseColor = 'rgba(68,83,196,.55)', children }) {
  return (
    <div className={`spot absolute flex items-start ${reverse ? 'rev flex-row-reverse' : ''} ${className}`.trim()} style={style}>
      <span
        className="pin relative z-[2] grid size-[26px] place-items-center rounded-full bg-[var(--pin)] shadow-[0_0_0_4px_rgba(255,255,255,.9),0_0_0_9px_rgba(255,255,255,.35)]"
        data-a
      >
        <span
          className="sonar-pulse absolute -inset-[9px] rounded-full border opacity-0 animate-[sonar_2.8s_ease-out_infinite]"
          style={{ animationDelay: pulseDelay, borderColor: pulseColor }}
          aria-hidden="true"
        />
        <ArrowIcon />
      </span>
      <span
        className={`label mt-4 whitespace-nowrap rounded-full bg-[var(--surface)] px-[11px] py-[5px] text-[10.5px] shadow-[0_6px_18px_var(--glow)] max-[720px]:text-[9.5px] ${reverse ? '-mr-1' : '-ml-1'}`}
        data-a
      >
        {children}
      </span>
    </div>
  )
}

export default function HeroPanel() {
  return (
    <section className="center flex flex-col max-[1100px]:order-3 max-[1100px]:col-span-2 max-[720px]:order-0 max-[720px]:col-span-1">
      <div className="hero relative min-h-[570px] flex-1 max-[720px]:min-h-[480px]">
        <div className="hero-media absolute inset-0 overflow-hidden rounded-3xl bg-[#e3e6ea]" data-a>
          <video
            className="hero-img absolute inset-0 block h-full w-full object-cover object-[50%_45%]"
            src="/videos/hero.mp4"
            poster="/images/hero.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>

        <div className="tab absolute -top-px left-0 right-0 z-[2] mx-auto flex w-max gap-1 rounded-b-[20px] bg-[var(--card)] px-2 pb-2 pt-1" data-a>
          <span
            className="absolute -left-5 top-0 size-5"
            style={{ background: 'radial-gradient(circle at 0 100%, transparent 19.5px, var(--card) 20px)' }}
            aria-hidden="true"
          />
          <span
            className="absolute -right-5 top-0 size-5"
            style={{ background: 'radial-gradient(circle at 100% 100%, transparent 19.5px, var(--card) 20px)' }}
            aria-hidden="true"
          />
          <div className="flex gap-1 rounded-full bg-[var(--soft)] p-[3px]">
            <span
              className="h-[26px] w-14 rounded-full bg-cover [background-position:50%_48%] [background-size:260%_auto]"
              style={{ backgroundImage: 'url(/images/hero.webp)' }}
            />
            <PixelArt type="mosaic" className="relative h-[26px] w-14 rounded-full" />
            <button className="grid h-[26px] w-[58px] place-items-center rounded-full bg-[var(--surface)] text-[17px] font-light text-[var(--indigo)]">+</button>
          </div>
        </div>

        <div className="absolute right-[18px] top-[18px] flex flex-col gap-2">
          <span className="grid size-[22px] place-items-center rounded-full bg-[var(--surface)] shadow-[0_4px_12px_rgba(68,83,196,.15)]" data-a>
            <svg width="12" height="12" viewBox="0 0 24 24" className="fill-[var(--indigo)]">
              <path d="M12 2a5 5 0 0 1 5 5H7a5 5 0 0 1 5-5zM22 12a5 5 0 0 1-5 5V7a5 5 0 0 1 5 5zM12 22a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5zM2 12a5 5 0 0 1 5-5v10a5 5 0 0 1-5-5z" />
            </svg>
          </span>
          <span className="grid size-[22px] place-items-center rounded-full bg-[var(--surface)] shadow-[0_4px_12px_rgba(68,83,196,.15)]" data-a>
            <svg width="12" height="12" viewBox="0 0 24 24" className="fill-[var(--orange)]">
              <path d="M12 2a10 10 0 1 0 10 10h-4a6 6 0 1 1-6-6z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
        </div>

        <Hotspot style={{ left: 52, top: 90 }}>Diversified portfolios</Hotspot>
        <Hotspot
          reverse
          style={{ right: 52, top: 252 }}
          pulseDelay="3.3s"
          pulseColor="rgba(249,126,86,.7)"
        >
          Transparent fees
        </Hotspot>
        <Hotspot style={{ left: 52, top: 459 }} pulseDelay="4.2s">Instant withdrawals</Hotspot>

        <div className={`trust absolute left-[-32px] top-[292px] z-[2] w-[116px] rounded-[10px] px-2 py-[7px] text-[var(--ink)] max-[720px]:left-3 ${glassClass}`} data-a>
          <b className="block bg-clip-text text-[17px] font-normal leading-none text-transparent [background-image:var(--grad)] [font-family:var(--display)]">
            <span data-count="48" data-suffix="k">48k</span>
          </b>
          <small className="mt-[3px] block text-[8.5px] leading-[1.2]">investors have grown their wealth with us. Join us!</small>
          <a href="#" className="mt-[7px] ml-auto flex h-4 w-[58px] items-center justify-between rounded-full border border-[var(--ink)] py-0 pl-[9px] pr-px text-[8.5px]">
            Join
            <i className="grid size-3 place-items-center rounded-full bg-[var(--indigo)] text-[10px] not-italic leading-none text-white">+</i>
          </a>
        </div>

        <div className={`safe absolute bottom-4 right-4 w-[125px] rounded-[10px] px-1.5 pb-[7px] pt-1.5 text-[var(--ink)] ${glassClass}`} data-a>
          <p className="mb-[7px] ml-[3px] text-[10.5px] leading-[1.25]">Build long-term wealth with PillarCap today.</p>
          <ul className="grid list-none gap-[5px]">
            {[
              ['Stability', 'var(--indigo)'],
              ['Growth', 'var(--mauve)'],
              ['Discipline', 'var(--orange)'],
            ].map(([item, color]) => (
              <li key={item} className="flex h-[18px] items-center justify-between rounded-full bg-[var(--surface)] py-0 pl-[7px] pr-0.5 text-[9px]" data-a>
                {item}
                <i className="grid size-3.5 place-items-center rounded-full" style={{ background: color }}>
                  <ArrowIcon size={7} strokeWidth={1.6} />
                </i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
