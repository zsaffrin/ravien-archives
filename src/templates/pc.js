import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

export default ({ data }) => {
  const { html } = data.pcDetail

  const Wrap = styled.div(({ theme }) => {
    const { space } = theme
    return `
      margin: 1em auto;
      max-width: 48em;
      display: grid;
      grid-gap: ${space.lg};
    `
  })

  return (
    <Layout>
      <Wrap>
        <div>
          <Link to={`/pcs`}>PCs</Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Wrap>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $slug: String!) {
    file(id: { eq: $id }) {
      childPlayerCharactersJson {
        name
        slug
      }
    }
    pcDetail: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
    }
  }
`
