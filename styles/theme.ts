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

export const theme = {
    bg:         "#0a0a0a",
    offsetBg:   "#e7e7e7",
    dkBg:       "#424B54",
    mdBg:       "#5e5c6c",

    primary:    "#2F9C95",
    secondary:  "#E85D75",

    textColor:  "#a4aebd",

    breakpts,
    utils,
}

export type ITheme = typeof theme;