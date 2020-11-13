import React, { Component } from 'react'

import './History.css'

import { connect } from 'react-redux'

import HistoryGroup from './HistoryGroup'

import {cleanupLogHistory} from '../../Redux/Actions/logHistory'

class History extends Component {

    componentWillUnmount(){
        this.props.cleanup()
    }
    render() {
        return (
            <div className='History'>
                Title Section
                Menu and Log History

                <div className='HistoryGroup-wrapper'>
                    {this.props.logs.map( (l) => < HistoryGroup group={l} /> )}
                </div>

                <div className='Histroy-filter'>
                    see all starred
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.logHistory.logList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cleanup: () => {dispatch(cleanupLogHistory())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);