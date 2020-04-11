import React from 'react'
import PropTypes from 'prop-types'
import { graphql, withPrefix } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/Layout'
import Activities from '../components/Activities'
import Team from '../components/Team'
import Readings from '../components/Readings'
import Initiatives from '../components/Readings'
import UpdatesFeed from '../components/UpdatesFeed'

import bg_hero from '../img/backgrounds/bg_hero.png'
import bg_title from '../img/backgrounds/bg_title.png'


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
  <div class="pageWrapper">
    <section className="section" id="hero"
     style={{backgroundImage: `url(${bg_hero})`}}>
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-6 pageTitle"
           style={{backgroundImage: `url(${bg_title})`}}>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="section" id="about">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <h2>{about.heading}</h2>
            <ReactMarkdown source={about.description} />
          </div>
          <div className="column">
            <ReactMarkdown source={about.partners} />
          </div>
        </div>
      </div>
    </section>
    <section className="section" id="activities">
      <div className="container">
        <h2>{activities.heading}</h2>
        <Activities gridItems={activities.workstreams} />
      </div>
    </section>
    <section className="section" id="updates">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <h2>{updates.headingUpdates}</h2>
            <UpdatesFeed />
          </div>
          <div className="column">
            <h2>{updates.headingTwitter}</h2>
            <div className="twitterFeed">
              <a class="twitter-timeline" data-width="300" data-height="500" data-dnt="true" href="https://twitter.com/hirblinger?ref_src=twsrc%5Etfw">Tweets by hirblinger</a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" id="team">
      <div className="container">
        <h2>{team.heading}</h2>
        <Team gridItems={team.teamMembers} />
      </div>
    </section>
    <section className="section" id="resources">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <h2>{resources.backgroundReadings.heading}</h2>
            <Readings gridItems={resources.backgroundReadings.readings} />
          </div>
          <div className="column">
            <h2>{resources.relatedInitiatives.heading}</h2>
            <Initiatives gridItems={resources.relatedInitiatives.initiatives} />
          </div>
        </div>
      </div>
    </section>
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
          partners
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
            }
          }
        }
      }
    }
  }
`

