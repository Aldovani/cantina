import { useContext } from "react";
import { ListProductContext } from "../context/ListProductContext";

export const useListProduct = () => {
  const {
    product,
    priceTotal,
    setItem,
    decrease,
    increase,
    clear,
    isOpen,
    setIsOpen,
  } = useContext(ListProductContext);

  return {
    isOpen,
    setIsOpen,
    product,
    priceTotal,
    setItem,
    increase,
    clear,
    decrease,
  };
};
