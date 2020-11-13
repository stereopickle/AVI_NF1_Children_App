import React, { Component } from 'react'

import {connect} from 'react-redux';

import ButtonMenu from '../../Components/ButtonMenu/ButtonMenu'

import './Marker.css'

class MarkerUnit extends Component {
    render() {
        return (
            <div className='MarkerUnit'>
                MarkerUnit

                <ButtonMenu /> 
             
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerUnit);