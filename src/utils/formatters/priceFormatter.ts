import { formatNumber } from "./numberFormatter";

export const priceFormatter = (value: number | null | undefined) =>
  formatNumber(value, {
    style: "currency",
    currency: "RSD",
  });
