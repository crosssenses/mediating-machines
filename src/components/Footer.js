import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
//import ReactMarkdown from 'react-markdown'


const Footer = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return(
    <footer className="footer has-background-black has-text-white-ter">
      <div className="container has-background-black has-text-white-ter">
        <div className="columns">
          <div className="column">
            <h3>{frontmatter.footer.imprint.heading}</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
  }),
}

export default Footer;

export const pageQuery = graphql`
  query Footer {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        footer {
          imprint {
            heading
            text
          }
          disclaimer {
            heading
            text
          }
          privacy {
            heading
            text
          }
        }
      }
    }
  }
`
