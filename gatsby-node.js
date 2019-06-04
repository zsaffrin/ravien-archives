const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const categories = []

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.fields
      const { category } = node.frontmatter

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          slug: slug,
        },
      })

      if (!categories.includes(category)) {
        createPage({
          path: `/articles/${category}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            category: category,
          },
        })

        categories.push(category)
      }
    })
  })
}
