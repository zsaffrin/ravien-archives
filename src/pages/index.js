import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const Struck = styled.li`
    text-decoration: line-through;
  `
  return (
    <Layout>
      <SEO title="Home" />
      Stuff to make
      <ul>
        <Struck>Player Characters</Struck>
        <Struck>Locations</Struck>
        <li>Lore / background</li>
        <Struck>People / groups</Struck>
        <li>Missions / quests</li>
        <li>Session log</li>
        <li>Loot claimer</li>
        <li>Map</li>
      </ul>
    </Layout>
  )
}

export default IndexPage
