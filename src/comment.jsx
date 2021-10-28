import { useEffect } from "react";
import { useRef } from "react";

export const useComment = (value) => {
    const ref = useRef(undefined);

    useEffect(() => {
        ref.current = value;
    }, [value]);
    console.log(value);
    return ref.current;
};