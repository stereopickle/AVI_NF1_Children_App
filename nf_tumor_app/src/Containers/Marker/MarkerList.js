import React, { Component } from 'react'

import {connect} from 'react-redux';

import './Marker.css'
import MarkerUnit from './MarkerUnit';



class MarkerList extends Component {
    render() {
        return (
            <div>
                MarkerList

                < MarkerUnit />

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

export default connect(mapStateToProps, mapDispatchToProps)(MarkerList);