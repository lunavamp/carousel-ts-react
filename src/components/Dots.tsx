export interface DotsProps {
  total: number;
  currentIndex: number;
  slidesPerView: number;
  onDotClick: (newIndex: number) => void;
}

export const Dots: React.FC<DotsProps> = ({
  total,
  currentIndex,
  slidesPerView,
  onDotClick,
}) => (
  <div className="carousel-dots">
    {Array.from({ length: total }).map((_, page) => (
      <button
        key={page}
        className={`dot ${
          currentIndex - slidesPerView === page ? "active" : ""
        }`}
        onClick={() => onDotClick(page + slidesPerView)}
        aria-label={`Go to slide ${page + 1}`}
      />
    ))}
  </div>
);

export default Dots;
