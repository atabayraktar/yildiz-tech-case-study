const StarRating = ({
  rating,
  comment,
}: {
  rating: number;
  comment: number;
}) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        ★
      </span>
    );
  }

  return (
    <div className="star-rating">
      {stars} {comment} Yorum
    </div>
  );
};

export default StarRating;
