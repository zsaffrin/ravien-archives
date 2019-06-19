import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  const PageLayout = styled.div(({ theme }) => {
    const { space } = theme
    return `
      display: grid;
      grid-template-columns: minmax(auto, 44em);
      grid-template-rows: auto auto 1fr;
      grid-gap: ${space.xl};
      justify-content: center;
      padding: ${space.xl};
    `
  })
  const Breadcrumb = styled.div`
    text-transform: uppercase;
  `

  return (
    <Layout>
      <PageLayout>
        <Breadcrumb>
          <Link to={`/${frontmatter.category}`}>{frontmatter.category}</Link>
        </Breadcrumb>
        <div>
          <h1>{frontmatter.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PageLayout>
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
