import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TeamGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.tag} className="column teamMember is-one-third">
        <div className="has-text-centered">
          <div
            style={{
              width: '380px',
              display: 'inline-block',
            }}
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
        <h3>{item.name}</h3>
        <p className="bio">{item.bio}</p>
        <p className="socials">
          {item.twitter}
          {item.linkedIn}
        </p>
      </div>
    ))}
  </div>
)

TeamGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      bio: PropTypes.string,
      twitter: PropTypes.string,
      linkedIn: PropTypes.string,
    })
  ),
}

export default TeamGrid
