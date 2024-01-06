import ImageGallery from "@/components/ImageGallery";
import ProductTitle from "@/components/ProductTitle";
import ProductPrice from "@/components/ProductPrice";
import ProductOptions from "@/components/ProductOptions";
import AddToCart from "@/components/AddToCart";

const ProductDetail = () => {
  const images = [
    "https://n11scdn.akamaized.net/a1/500/09/07/31/43/20981291.jpg",
    "https://n11scdn.akamaized.net/a1/500/06/23/25/42/85867976.jpg",
    "https://n11scdn.akamaized.net/a1/500/02/80/22/52/07135903.jpg",
    "https://n11scdn.akamaized.net/a1/500/08/01/96/70/10729119.jpg",
  ];
  return (
    <div className="page-wrapper">
      <div className="image-section">
        <ImageGallery images={images} />
      </div>
      <div className="detail-section">
        <ProductTitle title="Apple iPhone 6s Rose Gold Front Pane" />
        <ProductPrice price={1300} minQuantity={100} />
        <ProductOptions />
        <AddToCart totalPrice={3000} />
      </div>
    </div>
  );
};

export default ProductDetail;
