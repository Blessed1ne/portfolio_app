import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


class BaseLayout extends Component {
  render() {
    return (
      <div>
          <nav>
            <NavLink className="navLink" to="/">Home</NavLink>

            <NavLink className="navLink" to="/about">About</NavLink>

            <NavLink className="navLink" to="/portfolio">Portfolio</NavLink>

            <NavLink className="navLink" to="/contact">contact</NavLink>

            <NavLink className="navLink" to="/References">References</NavLink>
          </nav>

          {this.props.children}
    </div>
    )
  }
}

export default BaseLayout
