import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
    font-size: 3.5rem;
    font-weigt: 900;
    padding: 0;
`

const P = styled.div`
    font-size: 1.5rem;
    padding: 12px 0;
`

const Email = styled.div`
    font-size: 2.2rem;
    font-weight: 700;
    padding: 30px 0;
`

const AboutPage = () => {
    return (
        <Layout>
            <Title>About</Title>
            <P>
                My name is Bari Abbassi. I'm a Product-Minded Software Engineer.
            </P>
            <P>
                I was born in Amsterdam, grew up in Tangier, and studied Computer Science in Paris.
            </P>
            <P>
                I enjoy building stuff using Software. Python, Go, and React are among my favorite tools.
            </P>
            <P>
                You can also find me taking pictures of friends or random interesting things. You can find some of my pictures on Instagram.
            </P>
            <P>
                Cycling is both my favorite transportation method and physical activity. I used to do a lot of races a few years back.
            </P>
            <P>
                Feel free to drop me an email at
            </P>
            <Email>bari@abbas.si</Email>

        </Layout>
    )
}

export default AboutPage