import React, { Component } from 'react'

import {connect} from 'react-redux';

import Monster from '../../Components/Monster/Monster';
import Navbar from '../Navbar/Navbar';

import './Entry.css'

class Entry extends Component {
    render() {
        return (
            <div className='Entry'>
                < Monster />
                < Navbar />
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

export default connect(mapStateToProps, mapDispatchToProps)(Entry);