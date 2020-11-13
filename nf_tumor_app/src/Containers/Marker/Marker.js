import React, { Component } from 'react'

import {connect} from 'react-redux';

import { changeMarkerMenu, cleanupMarker} from '../../Redux/Actions/marker'
import AddMarker from './AddMarker';

import './Marker.css'
import MarkerList from './MarkerList';

class Marker extends Component {

    componentWillUnmount(){
        this.props.cleanup();
    }

    render() {
        return (
            <div className='Marker'>
                Marker 

                <div className='Marker-toggleMenu'>
                    <div className='Marker-toggleMenuItem' onClick={() => this.props.renderView(1)}>Show</div>
                    <div className='Marker-toggleMenuItem' onClick={() => this.props.renderView(2)}>Add</div>
                </div>
                
                {this.props.currentView === 1 ? < MarkerList /> : < AddMarker /> }
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentView: state.marker.viewState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cleanup: () => {dispatch(cleanupMarker())},
        renderView: (viewId) => {dispatch(changeMarkerMenu(viewId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Marker);