import React, { Component } from 'react'

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <div className='Banner'>
                <Link to="/welcome"><div>Home</div></Link>
               Welcome User!
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);