import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
//import PreviewCompatibleImage from './PreviewCompatibleImage'

class NewsFeed extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="newsList columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="listItem column is-one-third" key={post.id}>
              <p className="date">{post.frontmatter.date}</p>
              <Link to={post.fields.slug}>
                <h3>{post.frontmatter.title}</h3>
              </Link>
              <p>{post.excerpt}</p>
              <Link className="more" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

NewsFeed.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsFeedQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD MMMM YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <NewsFeed data={data} count={count} />}
  />
)
