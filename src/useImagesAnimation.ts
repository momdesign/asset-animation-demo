import { useEffect, useRef } from "react";

type Item = {
  imageRef: React.RefObject<HTMLDivElement | null>;
  infoRef: React.RefObject<HTMLDivElement | null>;
}

const ANIMATION_DURATION_PX = 900;

export function useImagesAnimation(
  parentRef: React.RefObject<HTMLDivElement | null>,
  items: Item[]
) {
  const frame = useRef<number | null>(null);
  useEffect(() => {
    const parent = parentRef?.current;
    if (!parent) return;
    const animate = () => {
      const parentTop = parent.offsetTop;
      const [start, end] = [parentTop - ANIMATION_DURATION_PX, parentTop];
      items.forEach((item) => {
        const { imageRef, infoRef } = item;
        const image = imageRef?.current;
        const info = infoRef?.current;
        if (!image || !info) return;
        const imgRect = image.getBoundingClientRect();
        const imgEl = image.querySelector('img');
        if (!imgEl) return;
        const imgHeight = imgEl.clientHeight;
        const imgCenter = imgRect.top + window.scrollY + imgHeight / 2;
        const infoCenter = info.offsetTop + info.clientHeight / 2;
        const y = rangeMap(window.scrollY, start, end, 0, infoCenter - imgCenter, true);
        const scale = rangeMap(window.scrollY, start, end, 1, 0.8, true);
        imgEl.style.transform = `translateY(${y}px) scale(${scale})`;
      });
      requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
        frame.current = null;
      }
    };
  }, [items]);
}

function rangeMap(
  n: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number,
  withinBounds: boolean = false
): number {
  if (start1 === stop1) return stop2;
  const mapped = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (withinBounds && n < start1) return start2;
  if (withinBounds && n > stop1) return stop2;
  return mapped;
}
