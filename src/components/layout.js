import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import { rave } from "../themes"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const StyledLayout = styled.div(({ theme }) => {
    const { content, font } = theme
    return `
      font-family: ${font.body.family};
      font-weight: ${font.body.weight.normal};

      & a {
        color: ${content.linkColor};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    `
  })
  const MainContentArea = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 98vh;
  `

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={rave}>
          <StyledLayout>
            <MainContentArea>
              <Header siteTitle={data.site.siteMetadata.title} />
              <Content>{children}</Content>
            </MainContentArea>
            <Footer />
          </StyledLayout>
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
