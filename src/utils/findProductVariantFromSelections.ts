//finds product id from selected variant attributes
import { product } from "../entities/product";

export default function findProductVariantId(
  productData: product,
  selectedColor: string,
  selectedSize: string
) {
  const matchingVariant = productData.productVariants.find((variant) => {
    const colorAttribute = variant.attributes.find(
      (attribute) => attribute.name === "Renk"
    );
    const sizeAttribute = variant.attributes.find(
      (attribute) => attribute.name === "Beden"
    );

    return (
      colorAttribute?.value === selectedColor &&
      sizeAttribute?.value === selectedSize
    );
  });

  return matchingVariant ? matchingVariant.id : null;
}
