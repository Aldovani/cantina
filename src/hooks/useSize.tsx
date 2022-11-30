import { useState, useEffect } from "react";
import { useListProduct } from "./useListProduct";
// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number;
  height: number;
}

export function useWindowSize(): Size {
  const { setIsOpen } = useListProduct();
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      if (windowSize.width < 1550) {
        setIsOpen(false);
      }
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
