/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

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
  const StyledLayout = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: calc(100vh + 3.5em);
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
            <Header siteTitle={data.site.siteMetadata.title} />
            <Content>{children}</Content>
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
