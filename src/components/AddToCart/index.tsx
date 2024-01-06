import Button from "@/components/Button";

const AddToCart = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="add-to-cart">
      <div className="title-wrapper">
        <div>Toplam</div>
        <div>:</div>
      </div>
      <div className="options-wrapper">
        <div className="price">
          {totalPrice.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
          &ensp;TL
        </div>
        <div className="cargo">
          <img src="/images/truck-icon.svg" />
          Kargo Ücreti: <span>Alıcı Öder</span>
        </div>
        <div className="buton-section">
          <Button variant="add-to-cart" label="SEPETE EKLE" />
          <span>Ödeme Seçenekleri</span>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
