import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  let newStyle = {
    padding: "5px 15px",
    cursor: 'pointer',
    backgroundColor: props.color,
    borderRadius: '50%'
  }
  let newStyle2 = {
    padding: "5px 15px",
    cursor: 'pointer',
    backgroundColor: props.color2,
    borderRadius: '50%'
  }
  let newStyle3 = {
    padding: "5px 15px",
    cursor: 'pointer',
    backgroundColor: props.color3,
    borderRadius: '50%'
  }
  let newStyle4 = {
    padding: "5px 15px",
    cursor: 'pointer',
    backgroundColor: props.color4,
    borderRadius: '50%'
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
        
        
      </ul>
      <div className={`${props.btnShow4} mx-1`}>
        <span onClick={props.toggle4}  style={newStyle4}></span>
      </div>
      <div className={`${props.btnShow3} mx-1`}>
        <span onClick={props.toggle3} style={newStyle3}></span>
      </div>
      <div className={`${props.btnShow2} mx-1`}>
        <span onClick={props.toggle2}   style={newStyle2}></span>
      </div>
      <div className={`${props.btnShow} mx-1`}>
        <span onClick={props.toggle} style={newStyle}></span>
      </div>
        <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Enable Dark Mode': 'Enable Light Mode'}</label>
    </div>
  </div>
</nav>
    </>
  )

  
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title here',
    about: 'set about here'
}