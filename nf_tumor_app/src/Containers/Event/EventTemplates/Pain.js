import React, { Component } from 'react'

import BodyCanvas from '../../../Components/BodyCanvas/BodyCanvas'
import Intensity from '../Intensity'
import DurationMenu from '../DurationMenu'

export default class Pain extends Component {
    render() {
        return (
            <>
                <div className='Event-Text'>Where have you experienced this?</div>

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
                </div>
            </>
        )
    }
}
