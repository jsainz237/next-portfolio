import { useEffect, useState } from 'react';
import { theme, Breakpoint } from 'styles/theme';

type ScreenSizeMap = {
    [key in Breakpoint]?: any;
} & {
    default: any;
};

export const useScreenSize = (map: ScreenSizeMap) => {
    const [val, set] = useState<any>(map.default);
    
    useEffect(() => {
        calculateBreakpoint();
        window.addEventListener('resize', calculateBreakpoint)
    });

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
    }

    return val;
}