import React, {Component} from 'react'

class Portfolio extends Component {

    render () {
      return (
        <div className='portfolioDiv'>
        <div>
          <div className='first'>
            <div className='container'>
              <h1 className='display-3'>Portfolio</h1>
              <p className='lead'>Founded BLACKGOLD VENTURES WORLDWIDE in 2016. It changed my life forever, It has open doors for me that I could never Imagine possible.</p>
            </div>
          </div>
          <div>
            <div className='portPic'>
              <img className='BGlogo' src='http://static.tumblr.com/f1e26d97fedacb8ccdf9454ef6f0843c/mokwyt1/siEowhg4i/tumblr_static_2qtv43qw1b40soso4kokcog0k.jpg' alt='BG Logo' />
              </div>
            </div>
            <div className='portPic2'>
              <h1>BLACKGOLD RADIO</h1>
              <p className='lead'>It lead to me chasing my dreams. First venture I pursed was launching my own Internet Radio station</p>
              <div>
                <h2>Link to <a href="http://blackgoldradio.co/">BLACKGOLD RADIO</a> hope to convert it in to an app soon, DREAMS do come true.</h2>
              </div>
              <img className='onAir' src='http://www.markertek.com/productImage/HI-RES/MWL-1.JPG' alt='on air Logo' />
              <div className='portPic3'>
                <h1>BLACKGOLD SOLUTIONS</h1>
                <p className='secondly'>Second pursuit was a technology consulting firm. I got to pitch Jeff Bezos my proposal, and consulted for a foreign government so far.</p>
              </div>
            </div>
            <div>
              <h2>Link to <a href="http://blackgoldsolutions.net/">BLACKGOLD SOLUTIONS</a> big dreams, have small beginings.</h2>
            </div>
            <img className='BG SOLUTIONS' src='http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' alt='Office Logo' />

          </div>
        </div>
      )
    }
  }

export default Portfolio
