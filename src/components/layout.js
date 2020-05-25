import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Footer from './footer'
import Header from './header'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Inter', sans-serif;
    }
    
    body {
        padding: 0;
        border: none;
        margin: 0;
        background-color: #011fa4;
        color: white;

        display: flex;
        justify-content: center;
    }
`

const Container = styled.div`
    height: 100vh;
    max-width: 850px;
    width: 95vw;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Content = styled.div`
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 35px 0 20px 35px;
`

const Layout = (props) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Header />
                <Content>
                    <div>{props.children}</div>
                </Content>
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default Layout