import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => {
  const StyledHeader = styled.header(({ theme }) => {
    const { header, space } = theme
    return `
      background: ${header.background || "none"};
      color: ${header.color || "inherit"};
      display: grid;
      font-family: ${header.titleFontFamily};
      grid-gap: ${space.lg};
      grid-template-columns: repeat(2, auto);
      justify-content: start;
    `
  })
  const NavLink = styled.div`
    display: grid;
  `
  const Title = styled(NavLink)(({ theme }) => {
    const { font } = theme
    return `
      font-size: ${font.size.xl};
    `
  })

  const StyledLink = styled(Link)(({ theme }) => {
    const { space } = theme
    return `
      color: inherit;
      cursor: pointer;
      display: grid;
      align-content: center;
      padding: ${space.sm};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    `
  })

  return (
    <StyledHeader>
      <Title>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
      <NavLink>
        <StyledLink to="/articles/">Articles</StyledLink>
      </NavLink>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
