import { useContext } from "react";
import { QuantityContext } from "./QuantityProvider";

export const useQuantity = () => {
  return useContext(QuantityContext);
};