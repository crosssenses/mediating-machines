import React from 'react'
import PropTypes from 'prop-types'
import { NewsPostTemplate } from '../../templates/news-post'

const NewsPostPreview = ({ entry, widgetFor }) => {
  return (
    <NewsPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

NewsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NewsPostPreview
