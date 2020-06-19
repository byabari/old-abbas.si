import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`software`, `engineer`, `developer`, `amsterdam`]} />
    <h1>Hi, my name is Bari Abbassi</h1>
    <h2>I'm a Product-Minded Software Engineer</h2>
  </Layout>
)

export default IndexPage