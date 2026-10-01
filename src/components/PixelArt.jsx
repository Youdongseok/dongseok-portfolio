import { createElement, useEffect, useRef } from 'react';
import { createPixelArtController } from '../utils/pixelArt.js';

export default function PixelArt({ type, className = '', as = 'div', ...props }) {
  const hostRef = useRef(null);

  useEffect(() => {
    if (!hostRef.current) return undefined;
    return createPixelArtController(hostRef.current, type);
  }, [type]);

  return createElement(as, {
    ref: hostRef,
    className: `overflow-hidden bg-[var(--art-bg)] ${className}`.trim(),
    'data-art': type,
    ...props,
  });
}
