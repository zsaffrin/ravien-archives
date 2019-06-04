const base = (defaultFontSize = 14) => ({
  text: {
    size: {
      xs: `${defaultFontSize * 0.65}px`,
      sm: `${defaultFontSize * 0.8}px`,
      md: `${defaultFontSize * 0.9}px`,
      normal: `${defaultFontSize}px`,
      lg: `${defaultFontSize * 1.35}px`,
      xl: `${defaultFontSize * 2}px`,
    },
  },
  space: {
    thin: "2px",
    sm: `${defaultFontSize / 4}px`,
    md: `${defaultFontSize / 2}px`,
    lg: `${defaultFontSize}px`,
    xl: `${defaultFontSize * 1.25}px`,
    xxl: `${defaultFontSize * 2.5}px`,
  },
})

export default base
