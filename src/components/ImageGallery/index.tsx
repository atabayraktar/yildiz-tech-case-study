import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { productVariantImages } from "@/utils/productVariantImages";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const { product } = useAppSelector((state) => state.product);
  const allVariantImages = productVariantImages(product.productVariants);

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={selectedImage !== "" ? selectedImage : allVariantImages[0]} />
      </div>
      <div className="images">
        {allVariantImages.map((image, index) => (
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
