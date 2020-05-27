import React from "react"
import { A } from "../styles/a"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    lex-wrap: wrap;
    padding: 2px 0;
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Footer = () => (
  <footer>
    <Container>
        <List>
            <A href='https://github.com/bariabbassi' target="_blank">Github</A>
            <A href='https://linkedin.com/in/bariabbassi' target="_blank">LinkedIn</A>
            <A href='https://twitter.com/bariabbassi' target="_blank">Twitter</A>
            <A href='https://instagram.com/bariabbassi' target="_blank">Instagram</A>
        </List>
    </Container>
  </footer>
)

export default Footer