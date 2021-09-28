import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const ProjectsPage = () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={[`software`, `engineer`, `junior`, `developer`, `amsterdam`]}
    />
    <h1>Projects</h1>
    <List>
      <a href="https://linkfolders.com" target="_blank" rel="noreferrer">
        <span role="img" aria-label="Linkfolders">
          📂
        </span>
        Linkfolders
      </a>
      <a
        href="https://github.com/bariabbassi/currency-converter"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Currency Exchange">
          💱
        </span>
        Currency Converter
      </a>
      <a
        href="https://github.com/bariabbassi/alien-invasion"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Alien">
          👽
        </span>
        Alien Invasion
      </a>
      <a
        href="https://github.com/bariabbassi/rolling-hash"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Recycling">
          ♻️
        </span>
        Rolling Hash
      </a>
      <a
        href="https://github.com/bariabbassi/tcp-chat"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Speech Balloon">
          💬
        </span>
        TCP Chat
      </a>
      <a
        href="https://github.com/bariabbassi/employees-wise"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Money With Wings">
          💸
        </span>
        EmployeesWise
      </a>
      <a
        href="https://github.com/bariabbassi/best-sort"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Shuffle Tracks">
          🔀
        </span>
        Best Sort
      </a>
      <a
        href="https://github.com/bariabbassi/pokemon-data"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Cat Face">
          🐱
        </span>
        Pokemon Data
      </a>
    </List>
  </Layout>
)

export default ProjectsPage
