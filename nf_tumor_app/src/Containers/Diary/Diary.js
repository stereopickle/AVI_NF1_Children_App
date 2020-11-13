import React, { Component } from 'react'

import Banner from '../Banner/Banner'
import SubmitButton from '../../Components/SubmitButton/SubmitButton'

import './Diary.css'

class Diary extends Component {
    render() {
        return (
            <div className='Diary'>
                < Banner />
                <div className='Diary-wrapper'> 
                    <div className='Diary-text-wrapper'>
                        <label>Notes: </label>
                        <textarea cols='50' rows='5' name='eventDescription' value={this.props.description} onChange={(e) => this.props.handleChangeEventInfo(e)} />
                    </div>
                    <div className='Diary-button-wrapper'>
                        < SubmitButton text="Submit" width={{width: "160px"}} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Diary