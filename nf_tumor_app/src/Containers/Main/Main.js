import React, { Component } from 'react'

import {connect} from 'react-redux';

import Banner from '../Banner/Banner';
import Streak from '../Streak/Streak';
import Entry from '../Entry/Entry';

import './Main.css'

class Main extends Component {
    render() {
        return (
            <div className='Main'>
               < Banner />
               < Streak />
               < Entry />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);