import React, { Component } from 'react'
import { connect } from 'react-redux'

import {changeEventInfo} from '../../Redux/Actions/event'

class Intensity extends Component {
    render() {
        return (
            <div className="Intensity"> 
                    <div className='Intensity-scale'>
                        <div id='isu-first' className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(1) }></div>
                        <div className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(2) }></div>
                        <div className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(3) }></div>
                        <div className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(4) }></div>
                        <div className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(5) }></div>
                        <div className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(6) }></div>
                        <div className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(7) }></div>
                        <div className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(8) }></div>
                        <div className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(9) }></div>
                        <div id='isu-last' className='Intensity-scale-unit' onClick={ () => this.props.handleChangeEventInfo(10) }></div>
                    </div>
                    
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventTypes: state.event.eventTypeList,
        activeType: state.event.eventType,
        description: state.event.eventDescription
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeEventInfo: (e) => {dispatch(changeEventInfo(e))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Intensity);