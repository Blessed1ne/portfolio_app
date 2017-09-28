import React, {Component} from 'react'

class About extends Component {
  render() {
    return (
      <div className = "aboutDiv">
        <div className="photoDiv">
          <img className="aboutPhoto" src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAg0AAAAJGYzYTE0MTExLWMwMzMtNDhiOC1hMDc4LWM5NTc2NTBkM2MzYQ.jpg" alt="kyle pic"></img>
        </div>
        <div classname>
          <h2>BRIAN KIBAGENDI</h2>
        </div>
        <div className="aboutBio">
          <h2>I'm chasing dreams and changing the world one day at a time. I believe in thinking & speaking your ambitions in to existence. We are all a product of what we think of ourselves. We only have one time to live this life, why live it dwelling in someone else's reality? We are all capable of achieving remarkable things. We are all powerful beyond measure. It all begins with making a firm decision to living the life you seek. Greatness is attained by ordinary people who choose to do extra-ordinary things. Looking to network with like-minded individuals.</h2>
        </div>
      </div>
    )
  }
}

export default About
