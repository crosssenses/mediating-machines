import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


import Layout from '../components/Layout'
import Activities from '../components/Activities'
import Team from '../components/Team'
import Readings from '../components/Readings'
import Initiatives from '../components/Readings'
import NewsFeed from '../components/NewsFeed'

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
          <div className="column is-7">
            <h2>{about.heading}</h2>
            <ReactMarkdown parserOptions={{ commonmark: true }} source={about.description} />
          </div>
          <div className="column is-offset-1">
            <ReactMarkdown parserOptions={{ commonmark: true }} source={about.partners} />
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
          <div className="column is-7">
            <h2>{updates.headingUpdates}</h2>
            <NewsFeed />
          </div>
          <div className="column is-offset-1">
            <h2>{updates.headingTwitter}</h2>
            <div className="twitterFeed">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{height: 400}}
              />
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
          <div className="column is-7">
            <h2>{resources.backgroundReadings.heading}</h2>
            <Readings gridItems={resources.backgroundReadings.readings} />
          </div>
          <div className="column is-offset-1">
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

