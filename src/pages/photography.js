import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/layout'
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import Image from "../components/image"

class RootIndex extends React.Component {

  constructor(props) {
  super(props)
  Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  this.state = {
    modalShow: false,
    modalCurrent: 0
  }
  this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
  this.setModal = this.setModal.bind(this);
}

  handlePortfolioClick(index, e) {
  e.preventDefault();
  this.setModal(true, index);
}

setModal(isShown, current) {
  this.setState({
    modalShow: isShown,
    modalCurrent: current
  });
}
  render() {
    return (
      <Layout location={this.props.location} >

      <section id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">
                    Category
                  </div>
                  <div className="project-name">
                    Project Name
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
  <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
</PortfolioModal>
      </Layout>
 )
}
}

export default RootIndex

export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
