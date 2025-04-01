import { useEffect, useRef } from "react";

type Item = {
  imageRef: React.RefObject<HTMLImageElement | null>;
  infoRef: React.RefObject<HTMLDivElement | null>;
}

export function useImagesAnimation(
  parentRef: React.RefObject<HTMLDivElement | null>,
  items: Item[]
) {
  const frame = useRef<number | null>(null);
  useEffect(() => {
    const animate = () => {
      items.forEach((item, i) => {
        const parent = parentRef?.current;
        const { imageRef, infoRef } = item;
        const image = imageRef?.current;
        const info = infoRef?.current;
        if (!image || !info || !parent) return;
        const parentTop = parent.offsetTop;
        const imageTop = image.offsetTop;
        const infoCenter = info.offsetTop + info.clientHeight / 2;
        console.log(`${i}: `, {
          parentTop,
          imageTop,
          infoCenter,
        });

      });
      requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [items]);
}
