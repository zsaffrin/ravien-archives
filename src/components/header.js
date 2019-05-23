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
      padding: ${space.sm};
    `
  })

  const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `
  return (
    <StyledHeader>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
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
