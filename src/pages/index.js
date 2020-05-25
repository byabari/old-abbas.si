import React from "react"
import styled from 'styled-components'

import Layout from '../components/layout'

const P = styled.p`
    font-size: 3rem;
    font-weight: 900;
    padding: 10px 0;
`

const IndexPage = () => {
    return (
        <Layout>
            <P>Hi, my name is Bari</P>
            <P>I'm a Product-Minded Software Engineer.</P>
        </Layout>
    )
}

export default IndexPage
