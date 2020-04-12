
import React from 'react'
import Layout from '../../components/Layout'
import NewsFeed from '../../components/NewsFeed'

import bg_hero from '../../img/backgrounds/bg_hero.png'
import bg_title from '../../img/backgrounds/bg_title.png'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section
          className="full-width-image-container" id="pageHeader"
          style={{backgroundImage: `url(${bg_hero})`}}
        >
          <div className="container">
            <h1
              style={{backgroundImage: `url(${bg_title})`}}
            >Latest Updates</h1>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <NewsFeed />
          </div>
        </section>
      </Layout>
    )
  }
}
