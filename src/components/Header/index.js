import React, { Component } from 'react'
import Link from 'gatsby-link'

import './style.css'

class Header extends Component {
  componentWillMount() {}
  toggleMenu = () => {
    var x = this.topnav
    if (x.className === 'topnav') {
      x.className = 'topnav responsive'
    } else {
      x.className = 'topnav'
    }
  }
  toggleMenuOff = () => {
    var x = this.topnav
    x.className = 'topnav'
  }
  render() {
    return (
      <div
        style={{
          marginBottom: '1.45rem',
          position: 'fixed',
          top: '-20px',
          width: '100%',
          backgroundColor: 'white',
          borderBottom: '1px #999 solid'
        }}
        className="header"
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem'
          }}
          className="topnav"
          ref={c => {
            this.topnav = c
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none'
            }}
            onClick={this.toggleMenuOff}
          >
            Voyage Responsable
          </Link>
          <a className="transition" href="#transports" onClick={this.toggleMenuOff}>
            Transports
          </a>
          <a className="transition" href="#hebergements" onClick={this.toggleMenuOff}>
            Hébergements
          </a>
          <a className="transition" href="#alimentation" onClick={this.toggleMenuOff}>
            Alimentation
          </a>
          <a className="transition" href="#approche-nature" onClick={this.toggleMenuOff}>
            Approche de la nature
          </a>
          <a className="transition" href="#incontournable" onClick={this.toggleMenuOff}>
            Incontournable
          </a>
          <a className="transition" href="#en-route" onClick={this.toggleMenuOff}>En route!</a>
          <a href="#" className="icon" onClick={this.toggleMenu}>
            &#9776;
          </a>
        </div>
      </div>
    )
  }
}

export default Header
