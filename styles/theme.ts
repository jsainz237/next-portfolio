const breakpts = {
    xs: 451,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
}

const utils = {
    up: (bp: keyof typeof breakpts) => `@media(min-width: ${breakpts[bp]}px)`,
    down: (bp: keyof typeof breakpts) => `@media(max-width: ${breakpts[bp]}px)`,
}

const colors = {
    bg: "#0C0C0C",
    primary: "#A9B4BF",
    secondary: "#1E262F",
}

export const theme = {
    ...colors,
    breakpts,
    utils,
}

export type ITheme = typeof theme;