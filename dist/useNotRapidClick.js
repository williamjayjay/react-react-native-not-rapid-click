import { useCallback, useState } from "react";
// Hook para evitar múltiplos cliques rápidos (debounce)
var useNotRapidClick = function (fn, delay) {
    var _a = useState(false), isDebounced = _a[0], setIsDebounced = _a[1];
    var debouncedFunction = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isDebounced)
            return; // Se já foi chamada recentemente, não faz nada.
        setIsDebounced(true);
        fn.apply(void 0, args); // Executa a função original com os argumentos passados.
        setTimeout(function () {
            setIsDebounced(false);
        }, delay);
    }, [fn, delay, isDebounced]);
    return debouncedFunction;
};
export { useNotRapidClick };
