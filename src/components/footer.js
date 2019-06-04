import React from "react"
import styled from "styled-components"

const Footer = () => {
  const StyledFooter = styled.footer(({ theme }) => {
    const { text, footer, space } = theme
    return `
      background: ${footer.background || "none"};
      color: ${footer.color || "inherit"};
      font-size: ${text.size.md || "inherit"};
      padding: ${space.md};
    `
  })

  return (
    <StyledFooter>
      <p>Site built by Zach Saffrin</p>
      <p>
        This is a personal project for our gaming group at this time. If you
        have found this page accidentally, it just might not make much sense,
        but you&apos;re more than welcome to explore!
      </p>
    </StyledFooter>
  )
}

export default Footer
