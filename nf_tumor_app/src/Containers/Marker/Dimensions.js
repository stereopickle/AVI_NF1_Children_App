import React, { Component } from 'react'

import {connect} from 'react-redux';

import { changeMarkerDimensions, cleanupMarker } from '../../Redux/Actions/dimensions'

import './Marker.css'

class Tumor extends Component {

    componentWillUnmount() {
        this.props.cleanup();
    }

    render() {
        return (
            <div className='Marker-Dimensions'>
                
                <div className='Marker-Location'>
                    <p><strong>Dimensions</strong></p>
                    <label>
                        Diameter (mm)
                    </label>
                    <input name='diameter' type='number' value={this.props.diameter} onChange={(e) => this.props.handleChangeDimensions(e)} />
                    <br />
                    <label>
                        Weight (g)
                    </label>
                    <input name='weight' type='number' value={this.props.weight} onChange={(e) => this.props.handleChangeDimensions(e)} />
                </div>
                < br />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        diameter: state.dimensions.diameter,
        weight: state.dimensions.weight
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeDimensions: (e) => {dispatch(changeMarkerDimensions(e))},
        cleanup: () => {dispatch(cleanupMarker())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tumor);