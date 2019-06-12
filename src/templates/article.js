import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  const Wrap = styled.div`
    margin: 1em auto;
    max-width: 48em;
    display: grid;
    grid-template-rows: auto 6em 1fr;
    align-items: center;
  `
  const Breadcrumb = styled.div`
    text-transform: uppercase;
  `

  return (
    <Layout>
      <Wrap>
        <Breadcrumb>
          <Link to={`/${frontmatter.category}`}>{frontmatter.category}</Link>
        </Breadcrumb>
        <div>
          <h1>{frontmatter.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Wrap>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        title
      }
    }
  }
`
