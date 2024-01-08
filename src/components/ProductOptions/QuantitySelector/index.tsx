import { useAppSelector } from "@/redux/hooks";
import isBetween from "@/utils/isBetween";

const QuantitySelector = ({
  selectedBarem,
  setSelectedBarem,
}: {
  selectedBarem: any;
  setSelectedBarem: Function;
}) => {
  const { product } = useAppSelector((state) => state.product);
  return (
    <div className="quantity-selector">
      <div className="title-wrapper">
        <div className="title-start">
          <div>Toptan Fiyat (Adet)</div>
          <div>:</div>
        </div>
        {product.baremList.map((barem) => (
          <div className="info">
            <div
              className={`info-box ${
                isBetween(
                  selectedBarem,
                  barem.minimumQuantity,
                  barem.maximumQuantity
                )
                  ? "active"
                  : ""
              }`}
            >
              <div>
                {barem.minimumQuantity}-{barem.maximumQuantity}
              </div>
              <div>
                {barem.price.toLocaleString("de-DE", {
                  minimumFractionDigits: 2,
                })}
                &ensp;TL
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="title-wrapper">
        <div className="title">
          <div>Adet</div>
          <div>:</div>
        </div>
        <div className="input">
          <input
            type="number"
            value={selectedBarem}
            onChange={(e) => setSelectedBarem(e.target.value)}
          />
          <span>&nbsp;&nbsp;Adet</span>
          <div className="stock-info">
            Stok Adedi:{" "}
            {product.baremList[product.baremList.length - 1].maximumQuantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
