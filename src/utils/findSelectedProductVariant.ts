//finds product id from selected variant attributes
import { product } from "../entities/product";

export default function findSelectedProductVariant(
  productData: product,
  selectedColor: string,
  selectedSize: string
) {
  for (const variant of productData.productVariants) {
    const colorAttribute = variant.attributes.find(
      (attribute) =>
        attribute.name === "Renk" && attribute.value === selectedColor
    );
    const sizeAttribute = variant.attributes.find(
      (attribute) =>
        attribute.name === "Beden" && attribute.value === selectedSize
    );

    if (colorAttribute && sizeAttribute) {
      return variant.images;
    }
  }

  return [];
}
