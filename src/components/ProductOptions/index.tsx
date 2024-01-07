import BasicOption from "./BasicOption";
import QuantitySelector from "./QuantitySelector";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";

const ProductOptions = ({
  selectedBarem,
  setSelectedBarem,
}: {
  selectedBarem: any;
  setSelectedBarem: Function;
}) => {
  const { product } = useAppSelector((state) => state.product);
  return (
    <div className="product-options">
      {product.selectableAttributes.map((attribute) => (
        <BasicOption title={attribute.name} values={attribute.values} />
      ))}
      <QuantitySelector
        selectedBarem={selectedBarem}
        setSelectedBarem={setSelectedBarem}
      />
    </div>
  );
};

export default ProductOptions;
