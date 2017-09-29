import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return (
      <div className='contactDiv'>
        <div className='ccontact'>
          <div className='card'>
            <img className='card-img-top' src='http://www.quailcreekrockwall.org/wp-content/uploads/2015/04/Contact-Info.png' alt='matt-phone' />
          </div>
          <h1>
          Contact Info Below
          </h1>
          <h2>
          <h4 className='card-title'>Contact BRIAN KIBAGENDI</h4>
            <p className='card-text'><strong>Phone: </strong>651-706-5315</p>
            <p className='card-text'><strong>Email: </strong>info@blackgoldsolutions.net</p>
              <div>
                <h2>Link to <a href="https://github.com/Blessed1ne">GitHub</a></h2>
              </div>
              <div>
                <h2>Link to <a href="https://www.linkedin.com/in/brian-kibagendi-3165b011b/">Linkedin</a></h2>
              </div>
          </h2>
        </div>
      </div>
    )
  }
}

export default Contact
