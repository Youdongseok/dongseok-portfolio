import { useLayoutEffect } from 'react';
import { animate, stagger } from 'motion';

export function useIntroAnimation(scopeRef) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const $ = selector => scope.querySelector(selector);
    const $$ = selector => [...scope.querySelectorAll(selector)];
    const ease = [0.16, 1, 0.3, 1];
    const pop = { type: 'spring', stiffness: 260, damping: 18 };
    const controls = [];
    const run = (...args) => {
      const control = animate(...args);
      controls.push(control);
      return control;
    };

    $$('[data-a]').forEach(el => {
      el.style.opacity = 0;
    });

    run(scope, { opacity: [0, 1], y: [24, 0], scale: [0.985, 1] }, { duration: 0.8, ease });
    run(
      $('.hero-media'),
      {
        opacity: [0, 1],
        clipPath: ['inset(100% 0% 0% 0% round 24px)', 'inset(0% 0% 0% 0% round 24px)'],
      },
      { duration: 1.2, delay: 0.15, ease }
    );
    run(
      $('.hero-img'),
      { scale: [1.25, 1], filter: ['blur(10px)', 'blur(0px)'] },
      { duration: 1.8, delay: 0.15, ease }
    );

    run($('.logo'), { opacity: [0, 1], x: [-16, 0] }, { duration: 0.7, delay: 0.3, ease });
    run($('.menu'), { opacity: [0, 1], x: [16, 0] }, { duration: 0.7, delay: 0.35, ease });

    run(
      $$('.hero-title .row'),
      { opacity: [0, 1], y: [28, 0], filter: ['blur(8px)', 'blur(0px)'] },
      { duration: 0.9, delay: stagger(0.1, { startDelay: 0.4 }), ease }
    );
    run(
      $('.hero-title .hl'),
      { opacity: [0, 1], scale: [0.6, 1], rotate: [10, -3] },
      { ...pop, delay: 0.8 }
    );

    const [ringA, ringB] = $$('.twin i, .twin [data-art]');
    if (ringA) run(ringA, { opacity: [0, 1], x: [-12, 0] }, { duration: 0.7, delay: 0.95, ease });
    if (ringB) run(ringB, { opacity: [0, 1], x: [18, 0], scale: [0.5, 1] }, { ...pop, delay: 1.0 });

    run($('.divider'), { opacity: [0, 1], scaleX: [0, 1] }, { duration: 1, delay: 0.75, ease });
    run($('.lead'), { opacity: [0, 1], y: [12, 0] }, { duration: 0.8, delay: 0.9, ease });
    run(
      $$('.cta .btn'),
      { opacity: [0, 1], y: [14, 0], scale: [0.85, 1] },
      { ...pop, delay: stagger(0.08, { startDelay: 1.05 }) }
    );

    run($('.promo p'), { opacity: [0, 1], y: [10, 0] }, { duration: 0.7, delay: 1.15, ease });
    run(
      $('.promo-img'),
      {
        opacity: [0, 1],
        clipPath: ['inset(0% 100% 0% 0% round 8px)', 'inset(0% 0% 0% 0% round 8px)'],
      },
      { duration: 1, delay: 1.2, ease }
    );
    run(
      $('.promo-nav .go'),
      { opacity: [0, 1], scale: [0, 1], rotate: [-90, 0] },
      { ...pop, delay: 1.35 }
    );
    run(
      $$('.promo-nav .half'),
      { opacity: [0, 1], x: [-30, 0] },
      { duration: 0.7, delay: stagger(0.08, { startDelay: 1.45 }), ease }
    );

    run($('.tab'), { opacity: [0, 1], y: [-36, 0] }, { duration: 0.8, delay: 0.9, ease });
    run(
      $$('.corner-icons span'),
      { opacity: [0, 1], scale: [0, 1], rotate: [-120, 0] },
      { ...pop, delay: stagger(0.1, { startDelay: 1.05 }) }
    );

    $$('.spot').forEach((spot, index) => {
      const delay = 1.25 + index * 0.18;
      const fromX = spot.classList.contains('rev') ? 14 : -14;
      const startClip = spot.classList.contains('rev')
        ? 'inset(0% 0% 0% 100% round 999px)'
        : 'inset(0% 100% 0% 0% round 999px)';
      run(spot.querySelector('.pin'), { opacity: [0, 1], scale: [0, 1] }, { ...pop, delay });
      run(
        spot.querySelector('.label'),
        { opacity: [0, 1], x: [fromX, 0], clipPath: [startClip, 'inset(0% 0% 0% 0% round 999px)'] },
        { duration: 0.7, delay: delay + 0.15, ease }
      );
    });

    run(
      $('.trust'),
      { opacity: [0, 1], x: [-40, 0], filter: ['blur(6px)', 'blur(0px)'] },
      { duration: 0.9, delay: 1.35, ease }
    );
    run(
      $('.safe'),
      { opacity: [0, 1], y: [36, 0], filter: ['blur(6px)', 'blur(0px)'] },
      { duration: 0.9, delay: 1.5, ease }
    );
    run(
      $$('.safe li'),
      { opacity: [0, 1], x: [12, 0] },
      { duration: 0.6, delay: stagger(0.08, { startDelay: 1.75 }), ease }
    );

    run($('.search'), { opacity: [0, 1], scaleX: [0.4, 1] }, { duration: 0.9, delay: 0.35, ease });
    run($('.avatar'), { opacity: [0, 1], scale: [0, 1] }, { ...pop, delay: 0.5 });
    run(
      $('.theme-toggle'),
      { opacity: [0, 1], scale: [0, 1], rotate: [-180, 0] },
      { ...pop, delay: 0.45 }
    );
    run(
      $$('.plans > [data-a]'),
      { opacity: [0, 1], x: [26, 0] },
      { duration: 0.7, delay: stagger(0.08, { startDelay: 0.6 }), ease }
    );

    run($('.stats'), { opacity: [0, 1], y: [22, 0] }, { duration: 0.8, delay: 0.9, ease });
    $$('.bar i').forEach((bar, index) => {
      const targetHeight = `${bar.dataset.height}%`;
      run(
        bar,
        { height: ['0%', targetHeight] },
        { type: 'spring', stiffness: 120, damping: 14, delay: 1.15 + index * 0.08 }
      );
    });

    run(
      $('.orbit .ring'),
      { opacity: [0, 1], rotate: [-140, 0], scale: [0.8, 1] },
      { duration: 1.3, delay: 1.2, ease }
    );
    run($('.orbit .pic'), { opacity: [0, 1], scale: [0.5, 1] }, { ...pop, delay: 1.4 });
    run(
      $$('.orbit .tag'),
      { opacity: [0, 1], x: [14, 0] },
      { duration: 0.6, delay: stagger(0.12, { startDelay: 1.6 }), ease }
    );

    $$('[data-count]').forEach(el => {
      const to = Number.parseFloat(el.dataset.count);
      const decimals = Number(el.dataset.decimals || 0);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      run(0, to, {
        duration: 1.6,
        delay: 1.45,
        ease,
        onUpdate: value => {
          el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
        },
      });
    });

    return () => controls.forEach(control => control?.cancel?.());
  }, [scopeRef]);
}
