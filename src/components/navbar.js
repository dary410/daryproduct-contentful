import React from 'react';
import { Link } from 'gatsby';
import './mystyles.scss';
import Logo from './logo.png'

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
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={Logo} width="28" height="28" />
            </a>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item has-text-weight-semibold	" to="/" activeStyle={{ color: "#ffc340" }}>
                Projects
              </Link>
              <Link className="navbar-item has-text-weight-semibold	" to="/photography">
                Photography
              </Link>
              <Link className="navbar-item has-text-weight-semibold	" to="/blog">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
