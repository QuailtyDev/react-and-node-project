import React from 'react'
import { graphql } from 'gatsby'
import { ProjectSingle } from 'components/Projects'

export default function Template ({ data }) {
  if (!data.markdownRemark) return null
  return <ProjectSingle data={data} />
}

export const projectQuery = graphql`
  query ProjectPostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        path
        title
        date
        tags
        description
        category
        repo
        url
        image {
          childImageSharp {
            sizes(maxWidth: 1300, quality: 75) {
              ...GatsbyImageSharpSizes
            }
          }
          publicURL
        }
      }
    }
  }
`
