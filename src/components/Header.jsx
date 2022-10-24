import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles ={
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles}>
      <div className='container' >
          <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback Ui',
  bgColor: '#f5f5f5',
  textColor: '#333',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
