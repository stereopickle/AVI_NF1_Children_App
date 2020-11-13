import React, { Component } from 'react'
import { connect } from 'react-redux'

import {changeDurationType} from '../../Redux/Actions/event'


class TypeMenu extends Component {
    render() {
        return (
            <div className="DurationMenu"> 
                    
                    {this.props.durationTypes.map( ( dt ) => 
                        <div className={`DurationMenu-Option ${(this.props.activeType === dt )? 'active' : ''}`} onClick={() => this.props.handleChangeDuration(dt) }>{dt}</div>
                    )}

                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        durationTypes: state.event.durationTypeList,
        activeType: state.event.durationType,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeDuration: (e) => {dispatch(changeDurationType(e))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TypeMenu);