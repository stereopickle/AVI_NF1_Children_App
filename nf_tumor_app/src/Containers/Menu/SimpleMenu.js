import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class SimpleMenu extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    }

    // this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    // this.handleLogout = this.handleLogout.bind(this)
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose() {
    this.setState({
      anchorEl: null
    })
  };

  handleLogout() {
    localStorage.removeItem('user');
    this.handleClose();
  }

  render() {

    const local = localStorage

    return (
      <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}>
              <Avatar />
          </Button>
          <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={() => this.handleClose()}
          >
             {local.user ? <MenuItem onClick={() => this.handleLogout()}>Logout</MenuItem> : 
               <div>
                 <Link to='/login' ><MenuItem onClick={() => this.handleClose()}>Login / Register</MenuItem></Link>
                 <MenuItem onClick={() => this.handleLogout()}>Logout</MenuItem>   
               </div>
             }
          </Menu>
      </div>
    );
  }
}

// const actionCreators = {
//   logout: userActions.logout
// };

export default connect(null)(SimpleMenu)
