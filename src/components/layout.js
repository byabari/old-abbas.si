import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

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
  align-item: center;
  margin: 0 30px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
          <div>{children}</div>
      </Content>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
