import { useAppSelector } from "@/redux/hooks";
import StarRating from "../StarRating";

const ProductTitle = () => {
  const { product } = useAppSelector((state) => state.product);

  return (
    <div className="product-title-wrapper">
      <div className="product-title">{product.productTitle}</div>
      <StarRating rating={5} comment={23} />
    </div>
  );
};

export default ProductTitle;
