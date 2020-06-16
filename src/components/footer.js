import React from "react"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    lex-wrap: wrap;
    padding: 2px 0;
    margin-top: 35px;
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Footer = () => (
  <footer>
    <Container>
        <List>
            <a href='https://github.com/bariabbassi' target="_blank" rel="noreferrer">Github</a>
            <a href='https://linkedin.com/in/bariabbassi' target="_blank" rel="noreferrer">LinkedIn</a>
            <a href='https://twitter.com/bariabbassi' target="_blank" rel="noreferrer">Twitter</a>
            <a href='https://instagram.com/bariabbassi' target="_blank" rel="noreferrer">Instagram</a>
        </List>
    </Container>
  </footer>
)

export default Footer