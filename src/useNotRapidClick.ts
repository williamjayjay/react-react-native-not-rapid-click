import { useCallback, useState } from "react";

// Hook para evitar múltiplos cliques rápidos (debounce)
const useNotRapidClick = (fn: Function, delay: number) => {
  const [isDebounced, setIsDebounced] = useState(false);

  const debouncedFunction = useCallback(
    (...args: any[]) => {
      if (isDebounced) return; // Se já foi chamada recentemente, não faz nada.

      setIsDebounced(true);
      fn(...args); // Executa a função original com os argumentos passados.

      setTimeout(() => {
        setIsDebounced(false);
      }, delay);
    },
    [fn, delay, isDebounced]
  );

  return debouncedFunction;
};

export { useNotRapidClick };
