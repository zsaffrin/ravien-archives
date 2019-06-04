const color = {
  black: "#202020",

  primary: "#4a148c",

  darkGray: "#433c4d",
  lightGray: "#e1e0e3",

  white: "#f9f9fa",
}

const font = {
  body: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    weight: {
      thin: 100,
      light: 300,
      normal: 400,
      bold: 700,
      black: 900,
    },
  },
}

const rave = {
  color,
  header: {
    background: color.primary,
    color: color.white,
    titleFont: font.body.family,
    titleWeight: font.body.weight.bold,
  },
  content: {
    background: color.white,
  },
  font,
  footer: {
    background: color.darkGray,
    color: color.lightGray,
  },
}

export default rave
