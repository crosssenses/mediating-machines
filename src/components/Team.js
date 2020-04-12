import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Icon from '@mdi/react';
import {
  mdiTwitter,
  mdiLinkedin
  } from '@mdi/js'

const TeamGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.tag} className="column teamMember is-one-third">
        <div className="has-text-centered">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <h3>{item.name}</h3>
        <p className="bio">{item.bio}</p>
        <p className="socials">
          {!!(item.twitter)?
            <a href={`https://twitter.com/@${item.twitter}`} target="_blank" rel="noopener noreferrer">
              <Icon path={mdiTwitter} size="1em" />
            </a>
          :""}
          {!!(item.linkedin)?
            <a href={`https://linkedin.com/@${item.linkedin}`} target="_blank" rel="noopener noreferrer">
              <Icon path={mdiLinkedin} size="1em" />
            </a>
          :""}
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
      linkedin: PropTypes.string,
    })
  ),
}

export default TeamGrid
