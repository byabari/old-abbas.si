import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2px 0;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledLink = styled(Link)`
    color: white;
    font-size: 1.7rem;
    font-weight: 700;
    padding: 22px;
    margin: 5px;
    text-decoration: none;
    border-radius: 35px;
    &:hover{
        background-color: #1636c7;
    }
    &:active{
        background-color: #4564f5;
    }
`

const HomeLink = styled(StyledLink)`
    font-size: 1.9rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <Nav>
        <Container>
            <HomeLink to='/'>{siteTitle}</HomeLink>
        </Container>
        <Container>
            <StyledLink to='/projects'>Projects</StyledLink>
            <a href='resume.pdf' target="_blank" rel="noreferrer">Resume</a>
            <StyledLink to='/about'>About</StyledLink>
        </Container>
    </Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
