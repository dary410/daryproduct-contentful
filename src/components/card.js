import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import "./mystyles.scss"

export default ({ article }) => (

  <div className="card">
    <div className="card-image">
      <figure>
        <Img alt="" fluid={article.heroImage.fluid} />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <h3>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <small>{article.publishDate}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
        {article.tags && article.tags.map(tag => (
          <p key={tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  </div>
)
