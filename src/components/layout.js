import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import { rave } from "../themes"
import Header from "../components/header"
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
  const MainContent = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 98vh;
  `
  const Content = styled.div`
    display: grid;
  `

  return (
    <ThemeProvider theme={rave}>
      <StyledLayout>
        <MainContent>
          <Header />
          <Content>{children}</Content>
        </MainContent>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
