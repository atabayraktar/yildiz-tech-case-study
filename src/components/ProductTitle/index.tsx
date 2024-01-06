import StarRating from "../StarRating";

const ProductTitle = ({ title }: { title: string }) => {
  return (
    <div className="product-title-wrapper">
      <div className="product-title">{title}</div>
      <StarRating rating={5} comment={23} />
    </div>
  );
};

export default ProductTitle;
