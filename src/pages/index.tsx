import ImageGallery from "@/components/ImageGallery";
import ProductTitle from "@/components/ProductTitle";
import ProductPrice from "@/components/ProductPrice";
import ProductOptions from "@/components/ProductOptions";
import AddToCart from "@/components/AddToCart";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProduct } from "@/redux/product/product.slice";
import findProductVariantId from "@/utils/findProductVariantFromSelections";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const [selectedBarem, setSelectedBarem] = useState(120);

  useEffect(() => {
    if (dispatch) {
      dispatch(getProduct());
    }
  }, []);

  const { product } = useAppSelector((state) => state.product);

  console.log(
    "Selected Product Variant",
    findProductVariantId(product, "Siyah", "L")
  );

  return (
    <div className="page-wrapper">
      <div className="image-section">
        <ImageGallery />
      </div>
      <div className="detail-section">
        <ProductTitle />
        <ProductPrice barem={selectedBarem} />
        <ProductOptions
          selectedBarem={selectedBarem}
          setSelectedBarem={setSelectedBarem}
        />
        <AddToCart barem={selectedBarem} />
      </div>
    </div>
  );
};

export default ProductDetail;
