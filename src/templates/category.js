import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Category = ({ data }) => {
  return (
    <Layout>
      <SEO title="Category" />
      <div>
        {data.articles.nodes.map(({ fields, frontmatter }) => {
          const { title } = frontmatter
          return (
            <div key={title}>
              <Link to={fields.slug}>{title}</Link>
            </div>
          )
        })}
      </div>
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
