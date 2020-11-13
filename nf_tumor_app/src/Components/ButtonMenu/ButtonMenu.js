import React, { Component } from 'react'

import './ButtonMenu.css'

import EditButton from '../EditButton/EditButton'
import DeleteButton from '../DeleteButton/DeleteButton'

class ButtonMenu extends Component {
    render() {
        return (
            <div className='ButtonMenu'>
                < EditButton />
                < DeleteButton />
            </div>
        )
    }
}
export default ButtonMenu;