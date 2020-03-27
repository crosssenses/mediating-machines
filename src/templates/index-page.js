import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  about,
  activities,
  updates,
  team,
  resources,
  footer
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <h2>{about.heading}</h2>
            <p>{about.description}</p>
          </div>
          <div className="column">
            <p>{about.partners}</p>
          </div>
        </div>
      </div>
    </section>
    <Features gridItems={activities.workstreams} />
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  about: PropTypes.object,
  activities: PropTypes.object,
  updates: PropTypes.object,
  team: PropTypes.object,
  resources: PropTypes.object,
  footer: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        about={frontmatter.about}
        activities={frontmatter.activities}
        updates={frontmatter.updates}
        team={frontmatter.team}
        resources={frontmatter.resources}
        footer={frontmatter.footer}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
  }),
}

export default IndexPage

//export const pageQuery = graphql`
//  query IndexPageTemplate {
//    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//      frontmatter {
//        title
//        heading
//        subheading
//        about {
//          heading
//          description
//          partners
//        }
//      }
//    }
//  }
//`

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        about {
          heading
          description
        }
        activities {
          heading
          workstreams {
            icon {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tag
            title
            description
          }
        }
        updates {
          headingUpdates
          headingTwitter
          twitterAccount
        }
        team {
          heading
          teamMembers {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            bio
            twitter
            linkedin
          }
        }
        resources {
          backgroundReadings {
            heading
            readings {
              author
              title
              text
            }
          }
          relatedInitiatives {
            heading
            initiatives {
              title
              text
              moreLink
            }
          }
        }
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

