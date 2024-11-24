import { ProductCardProps } from "@/components/LandingPage/ProductCard";

export const handleTeleportToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function chunkArray(array: ProductCardProps[], size: number) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result; // [[a, a, ..., a], [a, a, ..., a], ...]
}
