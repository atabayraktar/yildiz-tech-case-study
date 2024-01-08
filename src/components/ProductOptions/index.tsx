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
      <BasicOption
        title={product?.selectableAttributes[0]?.name}
        values={product?.selectableAttributes[0]?.values}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />
      <BasicOption
        title={product?.selectableAttributes[1]?.name}
        values={product?.selectableAttributes[1]?.values}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />

      <QuantitySelector
        selectedBarem={selectedBarem}
        setSelectedBarem={setSelectedBarem}
      />
    </div>
  );
};

export default ProductOptions;
