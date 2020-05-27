import React from "react"
import { H1 } from "../styles/h1"
import { A } from "../styles/a"
import SEO from "../components/seo"
import styled from "styled-components"

const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const ProjectsPage = () => (
  <>
    <SEO title="Projects" />
    <H1>Projects</H1>
    <List>
        <A href='https://github.com/bariabbassi/currency-converter' target="_blank">
            <span role="img" aria-label="Currency Exchange">💱</span> Currency Converter
        </A>
        <A href='https://github.com/bariabbassi/alien-invasion' target="_blank">
            <span role="img" aria-label="Alien">👽</span> Alien Invasion
        </A>
        <A href='https://github.com/bariabbassi/rolling-hash' target="_blank">
            <span role="img" aria-label="Recycling">♻️</span> Rolling Hash
        </A>
        <A href='https://github.com/bariabbassi/tcp-chat' target="_blank">
            <span role="img" aria-label="Speech Balloon">💬</span> TCP Chat
        </A>
        <A href='https://github.com/bariabbassi/employees-wise' target="_blank">
            <span role="img" aria-label="Money With Wings">💸</span> EmployeesWise
        </A>
        <A href='https://github.com/bariabbassi/best-sort' target="_blank">
            <span role="img" aria-label="Shuffle Tracks">🔀</span> Best Sort
        </A>
        <A href='https://github.com/bariabbassi/pokemon-data' target="_blank">
            <span role="img" aria-label="Cat Face">🐱</span> Pokemon Data
        </A>
    </List>
  </>
)

export default ProjectsPage