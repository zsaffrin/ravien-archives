import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const sortIntoCategories = items =>
  items.reduce((acc, item) => {
    const category = item.frontmatter.category
    if (!(category in acc)) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {})

const ArticlesPage = ({ data }) => {
  const articles = sortIntoCategories(data.articles.nodes)

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
  const Section = styled.div(({ theme }) => {
    const { space } = theme
    return `
      display: grid;
      grid-gap: ${space.lg};
    `
  })
  const CategoryHeader = styled.h2`
    margin: 0;
    text-transform: capitalize;
  `
  const List = styled.ul`
    list-style: none;
    margin: 0;
  `

  return (
    <Layout>
      <SEO title="Articles" />
      <PageLayout>
        <h1>Articles</h1>
        {Object.keys(articles).map(key => (
          <Section key={key}>
            <CategoryHeader>{key}</CategoryHeader>
            <List>
              {articles[key].map(article => {
                const { slug } = article.fields
                const { title } = article.frontmatter
                return (
                  <li key={title}>
                    <Link to={slug}>{title}</Link>
                  </li>
                )
              })}
            </List>
          </Section>
        ))}
      </PageLayout>
    </Layout>
  )
}

export const query = graphql`
  query {
    articles: allMarkdownRemark(
      filter: { frontmatter: { category: { in: ["people", "places"] } } }
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

export default ArticlesPage
