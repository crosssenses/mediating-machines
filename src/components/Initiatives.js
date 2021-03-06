import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const InitiativesList = ({ gridItems }) => (
  <div className="initiative">
    {gridItems.map(item => (
      <div key={item.tag} className="column">
        <h3>{item.title}</h3>
        <ReactMarkdown parserOptions={{ commonmark: true }} source={item.text} />
      </div>
    ))}
  </div>
)

InitiativesList.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      tag: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default InitiativesList;
