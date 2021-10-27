import { useEffect, useMemo, useState } from "react";

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
const clamp = (a: number, min: number = 0, max: number = 1) => Math.min(max, Math.max(min, a));
const invclamp = (a: number, max: number = 1, min: number = 0) => Math.max(min, Math.min(max, a));
const invlerp = (x: number, y: number, a: number) => clamp((a - x) / (y - x));
const range = (input: [number, number], output: [number, number], a: number) => lerp(...output, invlerp(...input, a));

export function useInterpolateScroll(inputRange: [number, number], outputRange: [number, number]): [number];
export function useInterpolateScroll(outputRange: [number, number]): [number];

export function useInterpolateScroll(range1: [number, number], range2?: [number, number]): [number] {
    const [inputRange, outputRange] = useMemo(() => {
        const inputRange = range2 && range1;
        const outputRange = range2 ?? range1;

        return [inputRange, outputRange];
    }, [range1, range2]);

    const [y, set] = useState<number>(outputRange[0]);

    const clampFn = outputRange[0] > outputRange[1] ? invclamp : clamp;

    const interpolateScroll = () => {
        const maxScrollY = document.body.offsetHeight - window.innerHeight;
        const yVal = range(inputRange ?? [0, maxScrollY], outputRange, window.scrollY);
        set(clampFn(yVal, ...outputRange));
    }

    useEffect(() => {
        window.addEventListener('scroll', interpolateScroll);
    }, []);

    return [ y ];
}
