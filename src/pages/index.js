import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />

        <section className="page-section" id="review">
          <div className="container">
            <h2 className="text-center mt-0">Reviews</h2>
            <hr className="divider my-4" />
            <p className="text-uppercase mb-4 text-center">
              Read and Write About My Salon
            </p>
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="mt-5">
                  <a
                    href="http://www.facebook.com/pages/Erins-Hair-Salon/165284053482251"
                    className="icon icon-facebook text-center mb-2"
                  >
                    <span className="d-none">Facebook</span>
                  </a>
                  <a href="http://www.facebook.com/pages/Erins-Hair-Salon/165284053482251">
                    <h3>Facebook</h3>
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="mt-5">
                  <a
                    href="https://goo.gl/maps/LxqASMLnnHk"
                    className="icon icon-google text-center mb-2"
                  >
                    <span className="d-none">Google</span>
                  </a>
                  <a href="https://goo.gl/maps/LxqASMLnnHk">
                    <h3>Google</h3>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <a
                    href="http://www.yelp.com/biz/erins-hair-salon-dallas"
                    className="icon icon-yelp text-center mb-2"
                  >
                    <span className="d-none">Yelp</span>
                  </a>
                  <a href="http://www.yelp.com/biz/erins-hair-salon-dallas">
                    <h3>Yelp</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="page-section bg-dark text-white img-1"
          id="all-occasions"
        >
          <div className="container text-center">
            <h2 className="mb-4">Experienced stylist for every occasion</h2>
            <hr className="divider light my-4" />
            <p className="text-white text-uppercase mb-4">
              Contemporary Hair Styles
            </p>
          </div>
        </section>

        <section
          className="page-section bg-dark text-white img-2"
          id="special-occasions"
        >
          <div className="container text-center">
            <h2 className="mb-4">Prom, Weddings, Special Occasions</h2>
            <hr className="divider light my-4" />
            <p className="text-white text-uppercase mb-4">
              One Of A Kind Styles
            </p>
          </div>
        </section>

        <section
          className="page-section bg-dark text-white img-brushes"
          id="contact"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">By Appointment Only</h2>
                <hr className="divider my-4" />
                <p className="mb-10">
                  <a
                    href="https://goo.gl/maps/UxVEGJTTPVoxUbdS8"
                    className="text-white"
                  >
                    4485 Trinity Mill Road, Suite 200, Room 51 Dallas, Texas
                    75287
                  </a>
                </p>
                <p className="mb-5">
                  <a href="tel:9725677379" className="text-size-big text-white">
                    (972) 567-7379
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
