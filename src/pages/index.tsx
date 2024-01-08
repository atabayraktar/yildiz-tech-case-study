import ImageGallery from "@/components/ImageGallery";
import ProductTitle from "@/components/ProductTitle";
import ProductPrice from "@/components/ProductPrice";
import ProductOptions from "@/components/ProductOptions";
import AddToCart from "@/components/AddToCart";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProduct } from "@/redux/product/product.slice";
import findProductVariantId from "@/utils/findProductVariantId";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const [selectedBarem, setSelectedBarem] = useState(120);
  const [selectedVariant, setSelectedVariant] = useState({
    color: "",
    size: "",
  });
  const [addToCardActive, setAddToCardActive] = useState(false);

  useEffect(() => {
    if (dispatch) {
      dispatch(getProduct());
    }
  }, []);

  useEffect(() => {
    if (
      selectedBarem !== 0 &&
      selectedVariant.color !== "" &&
      selectedVariant.size !== ""
    ) {
      setAddToCardActive(true);
    }
  }, [selectedBarem, selectedVariant.color, selectedVariant.size]);

  useEffect(() => {
    if (addToCardActive) {
      console.log(
        "Selected Product Variant ID:",
        findProductVariantId(product, "Siyah", "L")
      );
    }
  }, [addToCardActive]);

  const { product } = useAppSelector((state) => state.product);

  return (
    <div className="page-wrapper">
      <div className="image-section">
        <ImageGallery selectedVariant={selectedVariant} />
      </div>
      <div className="detail-section">
        <ProductTitle />
        <ProductPrice barem={selectedBarem} />
        <ProductOptions
          selectedBarem={selectedBarem}
          setSelectedBarem={setSelectedBarem}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
        />
        <AddToCart addToCardActive={addToCardActive} barem={selectedBarem} />
      </div>
    </div>
  );
};

export default ProductDetail;
