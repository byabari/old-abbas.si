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
        &nbsp; Linkfolders
      </a>
      <a
        href="https://github.com/bariabbassi/currency-converter"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Currency Exchange">
          💱
        </span>
        &nbsp; Currency Converter
      </a>
      <a
        href="https://github.com/bariabbassi/alien-invasion"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Alien">
          👽
        </span>
        &nbsp; Alien Invasion
      </a>
      <a
        href="https://github.com/bariabbassi/rolling-hash"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Recycling">
          ♻️
        </span>
        &nbsp; Rolling Hash
      </a>
      <a
        href="https://github.com/bariabbassi/tcp-chat"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Speech Balloon">
          💬
        </span>
        &nbsp; TCP Chat
      </a>
      <a
        href="https://github.com/bariabbassi/employees-wise"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Money With Wings">
          💸
        </span>
        &nbsp; EmployeesWise
      </a>
      <a
        href="https://github.com/bariabbassi/best-sort"
        target="_blank"
        rel="noreferrer"
      >
        <span role="img" aria-label="Shuffle Tracks">
          🔀
        </span>
        &nbsp; Best Sort
      </a>
    </List>
  </Layout>
)

export default ProjectsPage
