import { useEffect, useRef } from "react";

const useDebounce = (callBack, delay) => {
    const timeOutIdRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeOutIdRef.current) {
                clearTimeout(timeOutIdRef.current);
            }
        };
    }, []);

    const deBounceCallback = (...args) => {
        if (timeOutIdRef.current) {
            clearTimeout(timeOutIdRef.current);
        }
        timeOutIdRef.current = setTimeout(() => {
            callBack(...args);
        }, delay);
    };

    return deBounceCallback;
};
export default useDebounce;
