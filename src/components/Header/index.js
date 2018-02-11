import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
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
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none'
        }}
      >
        Voyage Responsable
      </Link>
      <a href="#transports">Transports</a>
      <a href="#hebergements">Hébergements</a>
      <a href="#alimentation">Alimentation</a>
      <a href="#approche-nature">Approche de la nature</a>
      <a href="#incontournable">Incontournable</a>
      <a href="#en-route">En route!</a>
    </div>
  </div>
)

export default Header
