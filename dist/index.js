import { useCallback, useState } from "react";
// Hook para evitar múltiplos cliques rápidos (debounce)
const useNotRapidClick = (fn, delay) => {
    const [isDebounced, setIsDebounced] = useState(false);
    const debouncedFunction = useCallback((...args) => {
        if (isDebounced)
            return; // Se já foi chamada recentemente, não faz nada.
        setIsDebounced(true);
        fn(...args); // Executa a função original com os argumentos passados.
        setTimeout(() => {
            setIsDebounced(false);
        }, delay);
    }, [fn, delay, isDebounced]);
    return debouncedFunction;
};
export { useNotRapidClick };
