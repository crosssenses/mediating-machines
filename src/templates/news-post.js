import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import bg_hero from '../img/backgrounds/bg_hero.png'
import bg_title from '../img/backgrounds/bg_title.png'

export const NewsPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  author,
  date
}) => {
  const PostContent = contentComponent || Content

  return (
    <Fragment>
      <section
        className="full-width-image-container" id="pageHeader"
        style={{backgroundImage: `url(${bg_hero})`}}
      >
        <div className="container">
          <h1
            style={{backgroundImage: `url(${bg_title})`}}
          >{title}</h1>
        </div>
      </section>

      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column postMeta">
              <p>Published: {date}</p>
              <p>Author: {author}</p>
            </div>
            <div className="column is-8 is-offset-1">
              <PostContent content={content} />
              <Link to="/" className="backHome">← Go back</Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

NewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <NewsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Updates">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />
    </Layout>
  )
}

NewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NewsPost

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        author
      }
    }
  }
`
