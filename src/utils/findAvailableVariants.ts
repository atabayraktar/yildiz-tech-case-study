import { product, productVariantAttributes } from "@/entities/product";

export function findAvailableVariants(
  selectedAttribute: string,
  selectedValue: string,
  productData: product
): string[] {
  const matchingVariants = productData.productVariants.filter((variant) =>
    variant.attributes.some(
      (attribute: productVariantAttributes) =>
        attribute.name === selectedAttribute &&
        attribute.value === selectedValue
    )
  );

  const otherAttribute = selectedAttribute === "Renk" ? "Beden" : "Renk";

  const availableValues = matchingVariants
    .map((variant) =>
      variant.attributes.find(
        (attribute: productVariantAttributes) =>
          attribute.name === otherAttribute
      )
    )
    .filter(Boolean)
    .map((attribute: productVariantAttributes | undefined) =>
      attribute ? attribute.value : ""
    );

  return Array.from(new Set(availableValues));
}
