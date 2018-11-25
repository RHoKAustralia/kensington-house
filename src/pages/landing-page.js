import React from "react";
import { Link } from "react-router-dom";
import './landing-page.css'
import imgurl from '../images/logo/logo.svg'

export class LandingPage extends React.Component {
    render() {
        return (
        <div className="wrapper">
          <div className="logo-wrapper">
            <img src={imgurl} alt="" className='logo'/>
          </div>
          <div className="button-wrapper">
            <Link to="/signup" className="landing-page-link">I'M IN</Link>
            <div className="or">
              <h1>or</h1>
            </div>
            <Link to="/moreinfo" className="landing-page-link">TELL ME MORE</Link>
          </div>
        </div>
      )
    }
}