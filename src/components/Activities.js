import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ActivityGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.tag} className="column">
        <div className="has-text-centered">
          <div
            style={{
              width: '240px',
              display: 'inline-block',
            }}
          >
            <PreviewCompatibleImage imageInfo={item.icon} />
          </div>
        </div>
        <p className="activityTag">{item.tag}</p>
        <h3>{item.title}</h3>
        <p className="description">{item.description}</p>
      </div>
    ))}
  </div>
)

ActivityGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      tag: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default ActivityGrid
