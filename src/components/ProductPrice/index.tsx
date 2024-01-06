const ProductPrice = ({
  price,
  minQuantity,
}: {
  price: number;
  minQuantity: number;
}) => {
  return (
    <div className="product-price">
      {price.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
      &ensp;TL
      <div className="info-inline"> &ensp;/ Adet</div>
      <div className="info">{minQuantity} Adet (Minimum Sipariş Adedi)</div>
    </div>
  );
};

export default ProductPrice;
