const breakpts = {
    xs: 451,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
}

export type Breakpoint = keyof typeof breakpts;

const utils = {
    up: (bp: Breakpoint) => `@media(min-width: ${breakpts[bp]}px)`,
    down: (bp: Breakpoint) => `@media(max-width: ${breakpts[bp]}px)`,
}

const colors = {
    bg: "#0C0C0C",
    primary: "#A9B4BF",
    secondary: "#1E262F",

    alerts: {
        success: "#198754",
        danger: "#dc3545",
    },
}

export const theme = {
    ...colors,
    breakpts,
    utils,
}

export type ITheme = typeof theme;