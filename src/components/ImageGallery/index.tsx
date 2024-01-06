import { useEffect, useState } from "react";

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={images[0]} />
      </div>
      <div className="images">
        {images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
