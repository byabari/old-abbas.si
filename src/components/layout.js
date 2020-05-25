import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Footer from './footer'
import Header from './header'
import '../styles/global.css'

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
    margin: 0 30px;
`

const Layout = (props) => {
    return (
        <Container>
            <Header />
            <Content>
                <div>{props.children}</div>
            </Content>
            <Footer />
        </Container>
    )
}

export default Layout