import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    return <button className="btn" onClick={props.onClick} style={{backgroundColor : props.color}}>{props.text}</button>
}


Button.propTypes = {
    color : PropTypes.string,
    text  : PropTypes.string.isRequired,
    onClick : PropTypes.func
}

Button.defaultProps = {
    color : 'green'
}

export default Button
