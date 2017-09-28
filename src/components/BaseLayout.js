import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class BaseLayout extends Component {
  render() {
    return (
      <div>
          <nav>
            <Link className="navLink" to="/">Home</Link>

            <Link className="navLink" to="/about">About</Link>

            <Link className="navLink" to="/portfolio">Portfolio</Link>

            <Link className="navLink" to="/contact">contact</Link>

            <Link className="navLink" to="/References">References</Link>
          </nav>

          {this.props.children}
    </div>
    )
  }
}

export default BaseLayout
