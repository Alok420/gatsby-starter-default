import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello everyone! this is alok here</h1>
    <p>Welcome to your new demo site.</p>
    <p>We gonna buiuld something great.</p>
    <StaticImage
      src="../images/swasoftech_horizontal.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gswasoftech"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
