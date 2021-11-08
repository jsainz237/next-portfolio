import { useEffect, useState } from 'react';
import { theme, Breakpoint } from 'styles/theme';

type ScreenSizeMap = {
    [key in Breakpoint]?: any;
} & {
    default?: any;
};

export const useScreenSize = (map: ScreenSizeMap): [any, Breakpoint] => {
    const [val, set] = useState<any>(map.default);
    const [bp, setBp] = useState<Breakpoint>('xxl');
    
    useEffect(() => {
        calculateBreakpoint();
        window.addEventListener('resize', calculateBreakpoint);
        return () => window.removeEventListener('resize', calculateBreakpoint);
    }, []);

    const calculateBreakpoint = () => {
        const screen = document.body.clientWidth;
        
        let breakpoint: Breakpoint = 'xxl';
        for(const [bpKey, bpVal] of Object.entries(theme.breakpts)) {
            if(screen <= bpVal) {
                breakpoint = bpKey as Breakpoint;
                break;
            }
        }
        
        set(map[breakpoint] ?? map.default);
        setBp(breakpoint);
    }

    return [val, bp];
}