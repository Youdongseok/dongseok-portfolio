import { useRef } from 'react';
import HeroPanel from './components/HeroPanel.jsx';
import LeftPanel from './components/LeftPanel.jsx';
import RightPanel from './components/RightPanel.jsx';
import { useIntroAnimation } from './hooks/useIntroAnimation.js';

export default function App() {
  const pageRef = useRef(null);

  useIntroAnimation(pageRef);

  return (
    <div className="grid min-h-screen w-full place-items-center px-4 py-10 text-[var(--ink)] transition-colors duration-500 [background:var(--page-bg)] [font-family:var(--body)] max-[720px]:p-0">
      <main
        ref={pageRef}
        className="page grid w-full max-w-[1280px] rounded-[16px] grid-cols-[272px_1fr_256px] gap-x-[46px] bg-[var(--card)] px-8 pb-7 pt-[22px] shadow-[0_30px_80px_-30px_var(--shadow)] max-[1100px]:grid-cols-2 max-[1100px]:gap-x-8 max-[1100px]:gap-y-10 max-[720px]:grid-cols-1 max-[720px]:px-4 max-[720px]:py-5"
      >
        <LeftPanel />
        <HeroPanel />
        <RightPanel />
      </main>
    </div>
  );
}
