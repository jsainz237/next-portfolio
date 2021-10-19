import { useEffect, useState } from "react";

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
const clamp = (a: number, min: number = 0, max: number = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x: number, y: number, a: number) => clamp((a - x) / (y - x));
const range = (input: [number, number], output: [number, number], a: number) => lerp(...output, invlerp(...input, a));

export function useInterpolateScroll(inputRange: [number, number], outputRange: [number, number]): [number];
export function useInterpolateScroll(outputRange: [number, number]): [number];

export function useInterpolateScroll(range1: [number, number], range2?: [number, number]): [number] {
    const maxScrollY = document.body.offsetHeight;
    const inputRange: [number, number] = range2 ? range1 : [0, maxScrollY];
    const outputRange: [number, number] = range2 ?? range1;

    console.log({ inputRange, outputRange });

    const [y, set] = useState<number>(outputRange[0]);

    useEffect(() => {
        window.addEventListener('scroll', interpolateScroll);
        return () => window.removeEventListener('scroll', interpolateScroll);
    }, []);

    const interpolateScroll = () => {
        const yVal = range(inputRange, outputRange, window.scrollY);
        set(clamp(yVal, ...outputRange));
    }

    return [ y ];
}
