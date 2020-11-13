import React, { Component } from 'react'

import BodyCanvas from '../../../Components/BodyCanvas/BodyCanvas'
import Dimensions from '../../Marker/Dimensions'
import UploadImage from '../UploadImage'

export default class Marker extends Component {
    render() {
        return (
            <>
                <div className='Event-Text'>Where is the new mark?</div>

                < BodyCanvas />

                < br />

                <div className='Event-Text'>What is the intensity of the pain?</div>

                < UploadImage />

                < br />

                <div className='Event-Text'>What size is the new mark?</div>

                < Dimensions />

                < br />

                <div className='Event-Description'> 
                    <label> What is the color, shape, and texture of the mark?: </label>
                    < br />
                    <textarea cols='50' rows='5' name='eventDescription' value={this.props.description} onChange={(e) => this.props.handleChangeEventInfo(e)} />
                </div>

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
