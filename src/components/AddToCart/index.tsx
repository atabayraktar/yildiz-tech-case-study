import { useAppSelector } from "@/redux/hooks";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";
import findBaremPrice from "@/utils/findBaremPrice";
import Button from "@/components/Button";

const AddToCart = ({
  barem,
  addToCardActive,
}: {
  barem: number;
  addToCardActive: boolean;
}) => {
  const { product } = useAppSelector((state) => state.product);

  return (
    <div className="add-to-cart">
      <div className="title-wrapper">
        <div>Toplam</div>
        <div>:</div>
      </div>
      <div className="options-wrapper">
        <div className="price">
          {calculateTotalPrice(
            findBaremPrice(barem, product.baremList),
            barem
          ).toLocaleString("de-DE", {
            minimumFractionDigits: 2,
          })}
          &ensp;TL
        </div>
        <div className="cargo">
          <img src="/images/truck-icon.svg" />
          Kargo Ücreti: <span>Alıcı Öder</span>
        </div>
        <div className="buton-section">
          <Button
            variant={`add-to-cart ${addToCardActive ? "" : "disabled"}`}
            label="SEPETE EKLE"
          />
          <span>Ödeme Seçenekleri</span>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
