import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

export default ({ data }) => {
  const { name } = data.file.childPlayerCharactersJson

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
          <Link to={`/pcs`}>PCs</Link>
        </Breadcrumb>
        <div>
          <h1>{name}</h1>
        </div>
      </Wrap>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    file(id: { eq: $id }) {
      childPlayerCharactersJson {
        name
        slug
      }
    }
  }
`
