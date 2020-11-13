import React, { Component } from 'react'

import './SubmitButton.css'

class SubmitButton extends Component {
    render() {
        return (
            <div className='SubmitButton' style={this.props.width}>
                {this.props.text}
            </div>
        )
    }
}
export default SubmitButton;