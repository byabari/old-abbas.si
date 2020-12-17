import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={[`developer`, `amsterdam`, `software`]} />
        <h1>About</h1>
        <Image />
        <p>
            My name is Bari Abbassi. I'm a Product-Minded Software Engineer.
        </p>
        <p>
            I was born in Amsterdam, grew up in Tangier, and studied Computer Science in Paris.
        </p>
        <p>
            I enjoy building stuff using code. React, Next.js, and Firebase are among my favorite tools.
        </p>
        
        <p>
            You can also find me taking pictures of friends and random interesting things. For a sneak peek, check out my Instagram.
        </p>
        <p>
            Cycling is both my favorite transportation method and my favorite physical activity. I used to do a lot of races a few years back.
        </p>
        <p>
            You can contact me at<a href="mailto:bari@abbas.si">bari@abbas.si</a>
        </p>
    </Layout>
)

export default AboutPage