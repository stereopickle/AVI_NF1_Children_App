import React, { Component } from 'react'

import './DeleteButton.css'

class DeleteButton extends Component {
    render() {
        return (
            <div className='DeleteButton'>
                {this.props.text}
            </div>
        )
    }
}
export default DeleteButton;