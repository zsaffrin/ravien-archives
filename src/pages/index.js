import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Stuff to make
    <ul>
      <li>Player Characters</li>
      <li>Locations</li>
      <li>Lore / background</li>
      <li>People / groups</li>
      <li>Missions / quests</li>
      <li>Session log</li>
      <li>Loot claimer</li>
      <li>Map</li>
    </ul>
  </Layout>
)

export default IndexPage
