import { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../types/Product";

interface IListProductProvider {
  children: React.ReactNode;
}

interface IListProductContext {
  product: IProduct[];
  priceTotal: number;
  isOpen: boolean;
  setItem: (item: IProduct) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  setIsOpen: (value: boolean) => void;
  clear: () => void;
}

export const ListProductContext = createContext({} as IListProductContext);

export function ListProductProvider({ children }: IListProductProvider) {
  const [items, setItems] = useState<IProduct[]>([]);
  const [price, setPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const newPrice = items?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.Quantidade * currentValue.Preco;
    }, 0);

    setPrice(newPrice || 0);
  }, [items]);

  function increase(id: number) {
    if (!items) return;

    const SearchItem = items.findIndex((e) => e.Id === id);

    if (SearchItem > -1) {
      items[SearchItem].Quantidade++;
      setItems([...items]);
    }
  }
  function decrease(id: number) {
    if (!items) return;

    const SearchItem = items.findIndex((e) => e.Id === id);

    if (SearchItem > -1) {
      items[SearchItem].Quantidade--;

      if (items[SearchItem].Quantidade === 0) {
        const newItems = items.filter((e) => e.Id !== id);
        setItems([...newItems]);
        return;
      }

      setItems([...items]);
    }
  }

  function setItem(item: IProduct) {
    if (!items) {
      setItems([item]);

      return;
    }

    const SearchItem = items.findIndex((e) => e.Id === item.Id);
    if (SearchItem > -1) {
      items[SearchItem].Quantidade++;
      setItems([...items]);
      return;
    }

    setItems([...items, item]);
  }

  function clear() {
    setItems([]);
  }

  return (
    <ListProductContext.Provider
      value={{
        setIsOpen,
        isOpen,
        priceTotal: price,
        product: items,
        setItem,
        decrease,
        increase,
        clear,
      }}
    >
      {children}
    </ListProductContext.Provider>
  );
}
