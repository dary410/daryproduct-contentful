import React from 'react'
import Img from 'gatsby-image'
import "./mystyles.scss"
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default ({ data }) => (
  <footer className="footer">
    <div className="content has-text-centered has-margin-top-50">
      <p><strong>Designed and handcrafted in San Francisco.</strong></p>
    </div>
    <div className="content has-text-centered">
      <span className="icon is-primary"><a href="https://www.linkedin.com/in/daryhsu/" target="_blank"><FaLinkedin /></a></span>
      <span className="icon is-primary"><a href="https://twitter.com/daryhsu/" target="_blank"><FaTwitter /></a></span>
      <span className="icon is-primary"><a href="https://www.instagram.com/daryproduct/" target="_blank"><FaInstagram /></a></span>
    </div>
    <div className="content is-size-7 has-text-centered has-text-weight-light">
      <p>Dary Hsu © 2020 All Rights Reserved</p>
    </div>
</footer>
)
