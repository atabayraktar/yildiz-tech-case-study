//takes all images from product variants and create a unique valued array
import type { productVariant } from "@/entities/product";

export function productVariantImages(productVariants: productVariant[]) {
  const uniqueImageUrls = new Set<string>();
  productVariants.forEach((variant: any) => {
    variant.images.forEach((image: any) => uniqueImageUrls.add(image));
  });
  console.log(Array.from(uniqueImageUrls));
  return Array.from(uniqueImageUrls);
}
