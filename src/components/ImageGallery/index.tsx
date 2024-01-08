import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { productVariantImages } from "@/utils/productVariantImages";
import findSelectedProductVariant from "@/utils/findSelectedProductVariant";
type selectedVariant = {
  color: string;
  size: string;
};

const ImageGallery = ({
  selectedVariant,
}: {
  selectedVariant: selectedVariant;
}) => {
  const [selectedImage, setSelectedImage] = useState("");
  const { product } = useAppSelector((state) => state.product);
  const allVariantImages = productVariantImages(product.productVariants);

  useEffect(() => {
    if (selectedVariant.color !== "" && selectedVariant.size !== "") {
      setSelectedImage(
        findSelectedProductVariant(
          product,
          selectedVariant.color,
          selectedVariant.size
        )[0]
      );
    }
  }, [selectedVariant.color, selectedVariant.size]);

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={selectedImage !== "" ? selectedImage : allVariantImages[0]} />
      </div>
      <div className="images">
        {selectedVariant.color !== "" && selectedVariant.size !== ""
          ? findSelectedProductVariant(
              product,
              selectedVariant.color,
              selectedVariant.size
            ).map((image, index) => (
              <div
                className={`image ${selectedImage !== image ? "" : "active"}`}
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} />
              </div>
            ))
          : allVariantImages.map((image, index) => (
              <div
                className={`image ${selectedImage !== image ? "" : "active"}`}
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ImageGallery;
