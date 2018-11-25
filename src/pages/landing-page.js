import React from "react";
import { Link } from "react-router-dom";
import './landing-page.css'
import imgurl from '../images/logo/logo.svg'

export class LandingPage extends React.Component {
    render() {
        return (
        <div className="wrapper">
          <div className="nav">
            <div className="logo">
              <h1>KENSINGTON</h1>
              <h1>NEIGHBOURHOOD</h1>
              <h1>HEROES</h1>
            </div>
            <div className="links">
              <h3>VOLUNTEER STORIES</h3>
              <h3 className="link-btn">PARTNER WITH US</h3>
            </div>
          </div>
          <div className="content">
            <h1>Come volunteer around our House</h1>
            <h4>A Kensington Neighbourhood House Initiative</h4>
            <div className="button-wrapper">
              <Link to="/signup" className="landing-page-link">SIGN ME UP!</Link>
              <Link to="/moreinfo" className="landing-page-link">TELL ME MORE</Link>
            </div>
          </div>
        </div>
      )
    }
}