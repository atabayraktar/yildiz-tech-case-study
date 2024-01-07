//finds price for seletected product quantity
import type { producBaremList } from "@/entities/product";

export default function findBaremPrice(
  barem: number,
  baremList: producBaremList[]
) {
  const matchedBarem = baremList.find(
    (range: producBaremList) =>
      barem >= range.minimumQuantity && barem <= range.maximumQuantity
  );

  return matchedBarem ? matchedBarem.price : 0;
}
