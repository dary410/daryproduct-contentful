import React from 'react'
import { Link } from 'gatsby'
import "./mystyles.scss"
import Container from './container'
import Navbar from './navbar'

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
      </Container>
    )
  }
}

export default Template
