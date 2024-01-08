import BasicOption from "./BasicOption";
import QuantitySelector from "./QuantitySelector";
import { useAppSelector } from "@/redux/hooks";

const ProductOptions = ({
  selectedBarem,
  setSelectedBarem,
  selectedVariant,
  setSelectedVariant,
}: {
  selectedBarem: any;
  setSelectedBarem: Function;
  selectedVariant: any;
  setSelectedVariant: Function;
}) => {
  const { product } = useAppSelector((state) => state.product);
  return (
    <div className="product-options">
      {product.selectableAttributes.map((attribute) => (
        <BasicOption
          title={attribute.name}
          values={attribute.values}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
        />
      ))}
      <QuantitySelector
        selectedBarem={selectedBarem}
        setSelectedBarem={setSelectedBarem}
      />
    </div>
  );
};

export default ProductOptions;
