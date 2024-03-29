import React from 'react'
//import { Link } from 'gatsby'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              Mediating machines
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="button"
              tabIndex="0"
            >
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" smooth={true} offset={-100} to="about">
                About
              </Link>
              <Link className="navbar-item" smooth={true} offset={-100} to="activities">
                Activities
              </Link>
              <Link className="navbar-item" smooth={true} offset={-100} to="updates">
                Updates
              </Link>
              <Link className="navbar-item" smooth={true} offset={-100} to="team">
                Team
              </Link>
              <Link className="navbar-item" smooth={true} offset={-100} to="resources">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
