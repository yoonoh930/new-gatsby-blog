import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import WikiNodes from "../templates/wiki-index"

class WikiIndex extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMdx.edges

        return(
            <Layout location={this.props.location} title="Yoon's Wiki">
                <SEO title="Yoon's Wiki"/>
                <WikiNodes wikiNodes={posts}/>
            </Layout>
        )
    }
}

export default WikiIndex

export const wikiQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }, 
      filter: {frontmatter: {category: {in: ["Wiki","wiki"]}}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`