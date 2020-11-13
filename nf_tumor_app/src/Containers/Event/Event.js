import React, { Component } from 'react'

import {connect} from 'react-redux';

import {changeEventInfo, submitEvent, cleanupEvent} from '../../Redux/Actions/event'

import Banner from '../Banner/Banner'
import Pain from './EventTemplates/Pain'

import './Event.css'
import TypeMenu from './TypeMenu';
import Marker from './EventTemplates/Marker';


class Event extends Component {
    
    componentWillUnmount(){
        this.props.cleanup();
    }

    renderEvent(type){
        switch(type){
            case "Pain":
                return < Pain />;
            case "New Mark":
                return < Marker />;
            default:
                return null;
        }
    }
    
    render() {
        return (
            <div className='Event'>
                < Banner />
                Home Link and Event
                < br />

                <form className='Event-Form' id='event-submit-form' onSubmit={(e)=>this.props.handleSubmitEventType(e)}>
               
                < TypeMenu />

                <br />

                { this.renderEvent(this.props.activeType) }              

                {/* <div className='Event-Text'>Where have you experienced this?</div>

                < BodyCanvas />

                < br />

                <div className='Event-Text'>What is the intensity of the pain?</div>
                
                < Intensity />

                < br />
                
                <div className='Event-Text'>How long did the pain last?</div>
                
                < DurationMenu />

                < br />

                <div className='Event-Description'> 
                    <label> Additional notes (optional): </label>
                    < br />
                    <textarea cols='50' rows='5' name='eventDescription' value={this.props.description} onChange={(e) => this.props.handleChangeEventInfo(e)} />
                </div> */}

                < button type='submit' form='event-submit-form' value='submit'>Submit Log</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeType: state.event.eventType,
        description: state.event.eventDescription
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeEventInfo: (e) => {dispatch(changeEventInfo(e))},
        handleSubmitEventType: (e) => {dispatch(submitEvent(e))},
        cleanup: () => {dispatch(cleanupEvent())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);