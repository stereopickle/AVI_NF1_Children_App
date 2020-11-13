import React, { Component } from 'react'

import {connect} from 'react-redux';

import './Streak.css'

class Streak extends Component {
    render() {
        return (
            <div className='Streak'>
               <p>You have a ### day streak!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Streak);