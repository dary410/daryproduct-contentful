import React from 'react'
import { Link } from 'gatsby'
import "./mystyles.scss"
import Container from './container'
import Navbar from './navbar'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navbar />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Template
