import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const MainContent = styled.div`
    background: center / cover no-repeat
      url("https://images.unsplash.com/photo-1556610626-9976884aae5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80");
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr 1fr;
  `
  const HeroTitle = styled.h1`
    color: #cab3ab;
    font-size: 4em;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    word-spacing: 0.25em;
    text-align: center;
  `

  return (
    <Layout>
      <SEO title="Home" />
      <MainContent>
        <HeroTitle>The Ravien Archives</HeroTitle>
      </MainContent>
    </Layout>
  )
}

export default IndexPage
