import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from "./scroller"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <a
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
              onClick={Scroller.handleAnchorScroll}
            >
              Erin Webster
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy
                  className="navbar-nav"
                  items={[
                    "review",
                    "all-occasions",
                    "special-occasions",
                    "contact",
                  ]}
                  currentClassName="active"
                  rootEl={"#mainNav"}
                  offset={0}
                >
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#review"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Reviews
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#all-occasions"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      All Occasions
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#special-occasions"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Special Occasions
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#contact"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      (972) 567-7379
                    </Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-12 align-self-end">
                <h1 className=" text-white font-weight-bold">
                  Hair Styles for All Occasions
                </h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <h3 className="text-white font-weight-light mb-5 text-uppercase">
                  Convenient Location. Affordable Prices.
                </h3>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#contact"
                  onClick={Scroller.handleAnchorScroll}
                >
                  SCHEDULE YOUR APPOINTMENT
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
