import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {baseURL} from '../constants';
import { TextField } from '@material-ui/core';


export default class SignInForm extends React.Component {
 
  constructor(props)
  {
    super(props)
    this.state={
      test:0
    }
  }
 
  doSignIn = () => {
   
    let loginCredentials = {}
    //loginCredentials.username = this.state.username;
    //loginCredentials.password = this.state.password;
     loginCredentials.username = "admin@continualengine.com";
    loginCredentials.password = "cont!@#123";
    let url = baseURL + 'user/authenticate/';

    return fetch(url,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json', 
        Accept: "application/json"
      },
      body: JSON.stringify(loginCredentials)
    }).then(Response => Response.json()).then(response=> {
      console.log("ersp",response)
    })
  }
  render () {
  return (
    <div>
      <div>
      <TextField  style={{marginBottom:"20px",width:"100%"}} placeholder="Username" value={this.state.username} />
      </div>
      <div>
      <TextField style={{marginBottom:"20px",width:"100%"}}  placeholder="Password" value={this.state.password} />
      </div>
        <div style={{marginBottom:"20px",display:"flex"}}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={this.doSignIn}
          >
            Sign In
          </Button>
         
          <Typography variant="body1" style={{paddingLeft:"20px",paddingTop:"5px"}}>
            Don't have an account?&nbsp;
            <Link
              component="button"
              variant="body2"
              style={{color: 'blue'}}
            >
              Sign Up
            </Link>
          </Typography>
        </div>
    
    </div>
  );
  }
}

