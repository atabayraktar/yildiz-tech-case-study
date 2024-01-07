import { useAppSelector } from "@/redux/hooks";
import findBaremPrice from "@/utils/findBaremPrice";

const ProductPrice = ({ barem }: { barem: number }) => {
  const { product } = useAppSelector((state) => state.product);

  return (
    <div className="product-price">
      {findBaremPrice(barem, product?.baremList).toLocaleString("de-DE", {
        minimumFractionDigits: 2,
      })}
      &ensp;TL
      <div className="info-inline"> &ensp;/ Adet</div>
      <div className="info">
        {product.baremList[0].minimumQuantity} Adet (Minimum Sipariş Adedi)
      </div>
    </div>
  );
};

export default ProductPrice;
