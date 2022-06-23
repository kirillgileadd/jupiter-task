import {useEffect, useState} from "react";

export function useKeyPress(targetKey: string): boolean {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({ key }: any): void {
        if (key === targetKey ) {
            setKeyPressed(prev => !prev);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, []);
    return keyPressed;
}