import React, { Component } from 'react'

import {connect} from 'react-redux';

import { addFreckleCount, cleanupFreckle }from '../../Redux/Actions/freckle'

import './Marker.css'

class Freckle extends Component {

    componentWillUnmount(){
        this.props.cleanup();
    }

    render() {
        return (
            <div className='Freckle'>
               
                    <div className='Freckle-Count'>
                        <p><strong>Location</strong></p>
                        <label>
                            Number of Freckles
                        </label>
                        <input name='freckleCount' type='number' value={this.props.freckles} onChange={this.props.changeFreckleCount}/>
                                          
                    </div>
                  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        freckles: state.freckle.freckleCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cleanup: () => {dispatch(cleanupFreckle())},
        changeFreckleCount: (e) => {dispatch(addFreckleCount(e))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Freckle);