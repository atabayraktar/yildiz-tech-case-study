import BasicOption from "./BasicOption";
import QuantitySelector from "./QuantitySelector";

const ProductOptions = () => {
  const values = ["Siyah", "Lacivert", "Lacivert"];
  return (
    <div className="product-options">
      <BasicOption title="Renk" values={values} />
      <BasicOption title="Renk" values={values} />
      <QuantitySelector />
    </div>
  );
};

export default ProductOptions;
