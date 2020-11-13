import React, { Component } from "react";

import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./Components/ProtectedRoute";
import Event from "./Containers/Event/Event";
import History from "./Containers/History/History";
import Marker from "./Containers/Marker/Marker";
import Home from './Containers/Home/Home'
import Login from './Containers/Login/Login'
import Register from './Containers/Register/Register'
import Main from "./Containers/Main/Main";
import Diary from "./Containers/Diary/Diary";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          {/* <ProtectedRoute
            isAuth={this.props.isAuth}
            path="/event"
            component={Event}
          /> */}
         
          
          < Route path="/register" component={Register} />
          < Route path="/login" component={Login} />
          < Route path="/" component={Home} />
          < Route path='/welcome' component={Main} />
          < Route path='/events' component={Event} />
          < Route path='/patientlog' component={History} />
          < Route path='/markers' component={Marker} />
          < Route path='/message' component={Diary} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
