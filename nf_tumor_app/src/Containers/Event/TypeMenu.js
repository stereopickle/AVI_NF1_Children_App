import React, { Component } from 'react'
import { connect } from 'react-redux'

import {changeEventType} from '../../Redux/Actions/event'


class TypeMenu extends Component {
    render() {
        return (
            <div className="TypeMenu"> 
                    
                    {this.props.eventTypes.map( ( et ) => 
                        <div className={`TypeMenu-Option ${(this.props.activeType === et )? 'active' : ''}`} onClick={() => this.props.handleChangeEvent(et) }>{et}</div>
                    )}

                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventTypes: state.event.eventTypeList,
        activeType: state.event.eventType,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeEvent: (e) => {dispatch(changeEventType(e))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TypeMenu);