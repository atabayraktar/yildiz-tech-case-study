export type productSelectableAttributes = {
  name: string;
  values: string[];
};
export type productVariantAttributes = {
  name: string;
  selectable: boolean;
  value: string;
};
export type productVariant = {
  id: string;
  attributes: productVariantAttributes[];
  images: string[];
};
export type producBaremList = {
  minimumQuantity: number;
  maximumQuantity: number;
  price: number;
};

export type product = {
  productTitle: string;
  selectableAttributes: productSelectableAttributes[];
  productVariants: productVariant[];
  baremList: producBaremList[];
};
