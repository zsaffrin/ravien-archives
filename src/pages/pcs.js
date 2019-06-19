import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const pcsPage = ({ data }) => {
  const PageLayout = styled.div(({ theme }) => {
    const { space } = theme
    return `
      display: grid;
      grid-gap: ${space.xl};
      grid-auto-rows: min-content;
      grid-template-columns: minmax(auto, 44em);
      justify-content: center;
      padding: ${space.xl};
    `
  })

  const List = styled.ul`
    list-style: none;
    margin: 0;
  `

  return (
    <Layout>
      <SEO title="PCs" />
      <PageLayout>
        <h1>PCs</h1>
        <List>
          {data.pcs.edges.map(({ node }) => {
            const { name, slug } = node.childPlayerCharactersJson
            return (
              <li key={slug}>
                <Link to={`/pc/${slug}`}>{name}</Link>
              </li>
            )
          })}
        </List>
      </PageLayout>
    </Layout>
  )
}

export const query = graphql`
  query {
    pcs: allFile(filter: { sourceInstanceName: { eq: "pcs" } }) {
      edges {
        node {
          childPlayerCharactersJson {
            name
            slug
          }
        }
      }
    }
  }
`

export default pcsPage
