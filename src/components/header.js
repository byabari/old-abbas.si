import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledLink = styled(Link)`
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

const HomeLink = styled(StyledLink)`
    font-size: 1.75rem;
`

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
            }
            }
        }
    `)

    return (
            <Nav>
                <Container>
                    <HomeLink to='/'>{data.site.siteMetadata.title}</HomeLink>
                </Container>
                <Container>
                    <StyledLink to='/projects'>Projects</StyledLink>
                    <StyledLink to='/about'>About</StyledLink>
                </Container>
            </Nav>
    )
}

export default Header