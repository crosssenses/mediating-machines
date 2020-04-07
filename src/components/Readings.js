import React from 'react'
import PropTypes from 'prop-types'

const ReadingsList = ({ gridItems }) => (
  <div className="reading">
    {gridItems.map(item => (
      <div key={item.tag} className="listItem">
        <p>{item.author}</p>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
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
