import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Category = ({ data, pageContext }) => {
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
  const PageTitle = styled.h1`
    margin: 0;
    text-transform: capitalize;
  `
  const List = styled.ul`
    list-style: none;
    margin: 0;
  `

  return (
    <Layout>
      <SEO title="Category" />
      <PageLayout>
        <PageTitle>{pageContext.category}</PageTitle>
        <List>
          {data.articles.nodes.map(({ fields, frontmatter }) => {
            const { title } = frontmatter
            return (
              <li key={title}>
                <Link to={fields.slug}>{title}</Link>
              </li>
            )
          })}
        </List>
      </PageLayout>
    </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
    articles: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          category
        }
        html
      }
    }
  }
`

export default Category
