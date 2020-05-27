import React from "react"
import { H1 } from "../styles/h1"
import { P } from "../styles/p"
import { A } from "../styles/a"
import SEO from "../components/seo"

const AboutPage = () => (
    <>
        <SEO title="About" />
        <H1>About</H1>
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
            You can also find me taking pictures of friends or random interesting things. For a sneak peek, check out my Instagram.
        </P>
        <P>
            Cycling is both my favorite transportation method and physical activity. I used to do a lot of races a few years back.
        </P>
        <P>
            Feel free to drop me an email at:<A href="mailto:bari@abbas.si">bari@abbas.si</A>
        </P>
    </>
)

export default AboutPage