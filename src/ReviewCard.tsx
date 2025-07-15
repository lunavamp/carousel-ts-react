export interface Review {
  imgSrc: string;
  text: string;
  author: string;
  position: React.ReactNode;
  avatarSrc: string;
}

type Props = {
  review: Review;
};

export const ReviewCard: React.FC<Props> = ({ review }) => (
  <div className="review-card flex-cl">
    <div className="review-img-container">
      <img
        className="review-img"
        src={review.imgSrc}
        alt={`${review.author} company`}
      />
    </div>
    <blockquote className="review-text">{review.text}</blockquote>
    <p className="quote">&rdquo;</p>
    <div className="review-author flex">
      <img
        className="author-avatar"
        src={review.avatarSrc}
        alt={review.author}
      />
      <div className="author-info">
        <p className="author-name">{review.author}</p>
        <p className="author-position">{review.position}</p>
      </div>
    </div>
  </div>
);
