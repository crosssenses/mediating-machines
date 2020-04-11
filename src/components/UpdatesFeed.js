import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
//import PreviewCompatibleImage from './PreviewCompatibleImage'

class UpdatesFeed extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="newsList">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="listItem" key={post.id}>
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

UpdatesFeed.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query UpdatesFeedQuery {
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
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <UpdatesFeed data={data} count={count} />}
  />
)
