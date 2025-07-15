import React, { useState, useEffect, useCallback } from "react";
import Arrow from "./Arrow";

type CarouselProps<T> = {
  items: T[];
  children: (item: T, index: number) => React.ReactNode;
};

export function Carousel<T>({ items, children }: CarouselProps<T>) {
  const total = items.length;
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const onResize = () => setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const visible = Array.from(
    { length: slidesPerView },
    (_, i) => items[(index + i) % total]
  );

  return (
    <div className="carousel container">
      <div className="carousel-inner">
        <Arrow direction="left" onClick={prev} />

        <div className="carousel-track">
          {visible.map((item, i) => (
            <React.Fragment key={i}>
              {children(item, (index + i) % total)}
            </React.Fragment>
          ))}
        </div>

        <Arrow direction="right" onClick={next} />
      </div>

      <div className="carousel-dots">
        {items.map((_, page) => (
          <button
            key={page}
            className={`dot ${index === page ? "active" : ""}`}
            onClick={() => setIndex(page)}
            aria-label={`Go to the next slide ${page + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
