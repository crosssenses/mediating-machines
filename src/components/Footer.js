import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import ReactMarkdown from 'react-markdown'


//const Footer = ({ data }) => {
//  const { frontmatter } = data.markdownRemark

//  return(
//    <footer className="footer has-background-black has-text-white-ter">
//      <div className="container has-background-black has-text-white-ter">
//        <div className="columns">
//          <div className="column">
//            <h3>{frontmatter.footer.imprint.heading}</h3>
//          </div>
//        </div>
//      </div>
//    </footer>
//  )

//const Footer = () => {
//
//  return(
//    <p>Test</p>
//  )
//}

class Footer extends React.Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter.footer
//    const { edges: posts } = data.allMarkdownRemark

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div className="columns">
            <div className="column">
              <h3>{data.imprint.heading}</h3>
              <ReactMarkdown source={data.imprint.text} />
            </div>
             <div className="column">
              <h3>{data.disclaimer.heading}</h3>
              <ReactMarkdown source={data.disclaimer.text} />
            </div>
            <div className="column">
              <h3>{data.privacy.heading}</h3>
              <ReactMarkdown source={data.privacy.text} />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(frontmatter: {
            templateKey: { eq: "index-page"}
          }
        ) {
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
    `}
    render={(data, count) => <Footer data={data} />}
  />
)

//
//export const pageQuery = graphql`
//  query Footer {
//    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//      frontmatter {
//        footer {
//          imprint {
//            heading
//            text
//          }
//          disclaimer {
//            heading
//            text
//          }
//          privacy {
//            heading
//            text
//          }
//        }
//      }
//    }
//  }
//`
