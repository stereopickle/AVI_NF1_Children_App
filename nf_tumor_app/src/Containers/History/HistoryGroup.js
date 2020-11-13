import React, { Component } from "react";

import './History.css'

import { connect } from "react-redux";

import HistoryUnit from './HistoryUnit'

class HistoryGroup extends Component {
  render() {
    return <div className='HistoryGroup'>
        {this.props.group.name}
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryGroup);
