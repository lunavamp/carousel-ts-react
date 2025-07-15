import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Arrow from "./Arrow";
import Dots from "./Dots";

type CarouselProps<T> = {
  items: T[];
  children: (item: T, index: number) => React.ReactNode;
};

export function Carousel<T>({ items, children }: CarouselProps<T>) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const [current, setCurrent] = useState(slidesPerView);
  const [withTransition, setWithTransition] = useState(true);

  const total = items.length;
  const viewportRef = useRef<HTMLDivElement>(null);

  const GAP = 7;

  useLayoutEffect(() => {
    const onResize = () => {
      const spv = window.innerWidth < 980 ? 1 : 3;
      setSlidesPerView(spv);
      if (viewportRef.current) {
        const vw = viewportRef.current.clientWidth;
        const totalGaps = GAP * (spv - 1);
        setSlideWidth((vw - totalGaps) / spv);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setCurrent(slidesPerView);
  }, [slidesPerView]);

  useEffect(() => {
    if (!withTransition) {
      requestAnimationFrame(() => setWithTransition(true));
    }
  }, [withTransition]);

  const clonesBefore = items.slice(-slidesPerView);
  const clonesAfter = items.slice(0, slidesPerView);
  const extended = [...clonesBefore, ...items, ...clonesAfter];

  const prev = useCallback(() => setCurrent((c) => c - 1), []);
  const next = useCallback(() => setCurrent((c) => c + 1), []);

  const handleTransitionEnd = useCallback(() => {
    if (current < slidesPerView) {
      setWithTransition(false);
      setCurrent(total + current);
    } else if (current >= total + slidesPerView) {
      setWithTransition(false);
      setCurrent(current - total);
    }
  }, [current, slidesPerView, total]);

  const offsetPx = -current * (slideWidth + GAP);

  const isTransition = withTransition ? "transform 0.4s ease" : "none";

  return (
    <div className="carousel container">
      <div className="carousel-inner">
        <Arrow direction="left" onClick={prev} />

        <div className="carousel-viewport" ref={viewportRef}>
          <div
            className="carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(${offsetPx}px)`,
              transition: `${isTransition}`,
            }}
          >
            {extended.map((item, idx) => (
              <div
                key={idx}
                className="carousel-slide"
                style={{
                  width: `${slideWidth}px`,
                  marginRight:
                    idx < extended.length - 1 ? `${GAP}px` : undefined,
                }}
              >
                {children(item, (idx - slidesPerView + total) % total)}
              </div>
            ))}
          </div>
        </div>

        <Arrow direction="right" onClick={next} />
      </div>

      <Dots
        total={total}
        currentIndex={current}
        slidesPerView={slidesPerView}
        onDotClick={(newIndex) => setCurrent(newIndex)}
      />
    </div>
  );
}
