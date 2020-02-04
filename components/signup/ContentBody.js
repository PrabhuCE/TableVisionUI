import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { baseURL } from '../constants';
import { TextField } from '@material-ui/core';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: true
    }
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  doSignUp = () => {

    let userInfo = {}
    //loginCredentials.username = this.state.username;
    //loginCredentials.password = this.state.password;
    userInfo.firstName = "admin";
    userInfo.lastName = "cont";
    userInfo.email = "admin@ce.com";
    userInfo.password = "cont";

    let url = baseURL + 'user/authenticate/';

    return fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(userInfo)
    }).then(Response => Response.json()).then(response => {
      console.log("response", response)
      this.setState({ open: false })
    })
  }

  render() {
    return (
      <div>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" style={{ "text-align": "end" }}>
            <IconButton aria-label="close" onClick={this.handleClose}>
              x
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <div>
              <div>
                <TextField style={{ marginBottom: "20px", width: "100%" }} placeholder="First Name" value={this.state.firstName} />
              </div>
              <div>
                <TextField style={{ marginBottom: "20px", width: "100%" }} placeholder="Last Name" value={this.state.lastName} />
              </div>
              <div>
                <TextField style={{ marginBottom: "20px", width: "100%" }} placeholder=" Email Address" value={this.state.email} />
              </div>
              <div>
                <TextField style={{ marginBottom: "20px", width: "100%" }} placeholder="Password" value={this.state.password} />
              </div>
              <div style={{ marginBottom: "20px", display: "flex" }}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  onClick={this.doSignUp}
                >
                  Sign Up
                </Button>
                <Typography variant="body1" style={{ paddingLeft: "20px", paddingTop: "5px" }}>
                  Already have an account?&nbsp;
                <Link
                    component="button"
                    variant="body2"
                    style={{ color: 'blue' }}
                  >
                    Sign In
                </Link>
                </Typography>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
