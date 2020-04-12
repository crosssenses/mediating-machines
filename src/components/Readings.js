import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const ReadingsList = ({ gridItems }) => (
  <div className="reading">
    {gridItems.map(item => (
      <div key={item.tag} className="listItem">
        <p className="author">{item.author}</p>
        <h3>{item.title}</h3>
        <ReactMarkdown parserOptions={{ commonmark: true }} source={item.text} />
      </div>
    ))}
  </div>
)

ReadingsList.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      tag: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default ReadingsList;
