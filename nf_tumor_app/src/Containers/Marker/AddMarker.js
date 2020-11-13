import React, { Component } from 'react'

import {connect} from 'react-redux';

import { changeMarkerType, submitMarker } from '../../Redux/Actions/marker'

import TypeofMarker from './TypeofMarker';

import './Marker.css'
import BodyLocation from '../BodyLocation/BodyLocation';

class AddMarker extends Component {
    render() {
        return (
            <div>
                Add a new Marker
                <form onSubmit={(e) => this.props.handleSubmitMarker(e, this.props.markerCoords) } >
                    
                    < BodyLocation />
                    
                    < br />
                    <div className='Marker-Type'>
                        <p><strong>Mark</strong></p>
                        <label>
                            Type:
                        </label>
                        <select name='markerType' value={this.props.type} onChange={this.props.handleChangeType}>
                            <option value='Tumor'>Tumor</option>
                            <option value='Freckle'>Freckle</option>
                        </select>
                        <select name='hasDetails' onChange={this.props.handleChangeType} >
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>

                        </select>
                    </div>
                        { this.props.hasDetails ? < TypeofMarker detailMenuType={this.props.type} /> : null }
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        markerCoords: {section: state.bodyLocation.section, sub_section: state.bodyLocation.subSection},
        markerData: {},
        type: state.marker.markerType,
        hasDetails: state.marker.hasDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeType: (e) => {dispatch(changeMarkerType(e))},
        handleSubmitMarker: (e, coords) => {dispatch(submitMarker(e, coords))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker);