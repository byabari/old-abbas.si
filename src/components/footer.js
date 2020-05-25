import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    lex-wrap: wrap;
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const A = styled.a`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 22px;
    margin: 10px;
    text-decoration: none;
    color: white;
    border-radius: 35px;
    &:hover{
        background-color: #1636c7;
    }
    &:active{
        background-color: #4564f5;
    }
`

const Footer = () => {
    return (
        <Container>
            <List>
                <A href='https://github.com/bariabbassi' target="_blank">Github</A>
                <A href='https://linkedin.com/in/bariabbassi' target="_blank">LinkedIn</A>
                <A href='https://twitter.com/bariabbassi' target="_blank">Twitter</A>
                <A href='https://instagram.com/bariabbassi' target="_blank">Instagram</A>
            </List>
        </Container>
    )
}

export default Footer