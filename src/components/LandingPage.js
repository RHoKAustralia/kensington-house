import React from 'react'
import './LandingPage.css'
import imgurl from '../images/logo/logo.svg'

export default class LandingPage extends React.Component {

  constructor() {
    super()
    
  }

  render() {
    return (
      <div className="wrapper">
        <div className="logo-wrapper">
          <img src={imgurl} alt="" className='logo'/>
        </div>
        <div className="button-wrapper">
          <button>IM IN</button>
          <div className="or">
            <h1>OR</h1>
          </div>
          <button>TELL ME MORE</button>
        </div>
      </div>
    )
  }
}