import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { findAvailableVariants } from "@/utils/findAvailableVariants";
import Button from "@/components/Button";

const BasicOption = ({
  title,
  values,
  selectedVariant,
  setSelectedVariant,
}: {
  title: string;
  values: string[];
  selectedVariant: any;
  setSelectedVariant: Function;
}) => {
  const { product } = useAppSelector((state) => state.product);
  const [availableVariants, setAvailableVariants] = useState<string[]>([]);

  const handleOptionSelect = (title: string, value: string) => {
    if (title === "Renk") {
      setSelectedVariant((prev: any) => ({ ...prev, color: value }));
    } else if (title === "Beden") {
      setSelectedVariant((prev: any) => ({ ...prev, size: value }));
    }
  };

  useEffect(() => {
    setAvailableVariants([]);
    const variants = findAvailableVariants(
      title,
      selectedVariant.color,
      product
    );
    setAvailableVariants(variants);
    console.log(availableVariants);
  }, [selectedVariant.color]);

  return (
    <div className="basic-option">
      <div className="title-wrapper">
        <div>{title}</div>
        <div>:</div>
      </div>
      <div className="options-wrapper">
        {values.map((value, index) => (
          <Button
            variant={`option-box ${
              title === "Renk" && selectedVariant.color === value
                ? "active"
                : title === "Beden" && selectedVariant.size === value
                ? "active"
                : selectedVariant.color == "Siyah" &&
                  (value == "M" || value == "XL")
                ? "passive"
                : ""
            }`}
            label={value}
            key={index}
            onClick={() => {
              handleOptionSelect(title, value);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BasicOption;
