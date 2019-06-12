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

  const markdown = graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { category: { in: ["people", "places"] } } }
      ) {
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
          path: `/${category}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            category: category,
          },
        })

        categories.push(category)
      }
    })
  })

  const pcs = graphql(`
    {
      pcs: allFile(filter: { sourceInstanceName: { eq: "pcs" } }) {
        edges {
          node {
            id
            childPlayerCharactersJson {
              name
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.pcs.edges.forEach(({ node }) => {
      const { name, slug } = node.childPlayerCharactersJson

      createPage({
        path: `/pc/${slug}`,
        component: path.resolve(`./src/templates/pc.js`),
        context: {
          id: node.id,
          name,
        },
      })
    })
  })

  return Promise.all([markdown, pcs])
}
