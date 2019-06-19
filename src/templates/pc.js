import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

export default ({ data }) => {
  const { html } = data.pcDetail

  const PageLayout = styled.div(({ theme }) => {
    const { space } = theme
    return `
      display: grid;
      grid-template-columns: minmax(auto, 44em);
      grid-template-rows: auto 1fr;
      grid-gap: ${space.xl};
      justify-content: center;
      padding: ${space.xl};
    `
  })
  const Breadcrumb = styled.div``

  return (
    <Layout>
      <PageLayout>
        <Breadcrumb>
          <Link to={`/pcs`}>PCs</Link>
        </Breadcrumb>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PageLayout>
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
