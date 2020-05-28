import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <p>
            My name is Bari Abbassi. I'm a Product-Minded Software Engineer.
        </p>
        <p>
            I was born in Amsterdam, grew up in Tangier, and studied Computer Science in Paris.
        </p>
        <p>
            I enjoy building stuff using Software. Python, Go, and React are among my favorite tools.
        </p>
        <p>
            You can also find me taking pictures of friends or random interesting things. For a sneak peek, check out my Instagram.
        </p>
        <p>
            Cycling is both my favorite transportation method and physical activity. I used to do a lot of races a few years back.
        </p>
        <p>
            Feel free to drop me an email at:<a href="mailto:bari@abbas.si">bari@abbas.si</a>
        </p>
    </Layout>
)

export default AboutPage