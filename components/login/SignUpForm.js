import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  buttonWrapper: {
    marginTop: 15
  },
  formControll: {
    marginBottom: 20
  },
  alreadyAccount: {
    display: 'inline-block',
    marginLeft: 20
  },
  errorWrapper: {
    padding: 10,
    border: '1px solid red',
    marginTop: '20px',
    marginBottom: '30px',
    boxShadow: 'none',
    color: 'red'
  }
}));
export default function SignUpForm(props) {
  const classes = useStyles();
  const defaultFormFields = {
    firstName: {
      error: false,
      errorText: ''
    },
    lastName: {
      error: false,
      errorText: ''
    },
    userName: {
      error: false,
      errorText: ''
    },
    password: {
      error: false,
      errorText: ''
    }
  }
  const [formFields, setFormFieldsStatus] = React.useState(defaultFormFields);
  const [isValid, setValidation] = React.useState(true);
  const [genericErrorMessage, setGenericErrorMessage] = React.useState('');

  const swapToSignIn = () => {
    props.swapFormTo('signIn')
  }
  const signUpSuccess = res => {
    
  }
  const signUpFailure = res => {
 
  }
  const validateForm = formObj => {
    let validatedFormObj = {}
    let isFormValid = true
    let errorMsg = ''
    Object.keys(formObj).forEach((key, index) => {
      let { ...newObj } = formObj[key]
      if(formObj[key].data === '') {
        newObj.error = true
        isFormValid = false
        errorMsg = 'Please fill all required fields.'
      }
      if(key === 'userName' && formObj[key].data !== '') {
        newObj.error = true
        isFormValid = false
        errorMsg = 'Please enter valid email'
      }
      validatedFormObj[key] = newObj
    })
    setFormFieldsStatus(validatedFormObj)
    setValidation(isFormValid)
    if(errorMsg) {
      setGenericErrorMessage(errorMsg)
      setValidation(false)
    }
    return isFormValid
  }
  const doSignUp = evnt => {
    evnt.preventDefault()
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value
    const currentFormFieldStatus = {
      firstName: {
        error: false,
        msg: '',
        data: firstName
      },
      lastName: {
        error: false,
        msg: '',
        data: lastName
      },
      userName: {
        error: false,
        msg: '',
        data: userName
      },
      password: {
        error: false,
        msg: '',
        data: password
      }
    }
    const isFormValid = validateForm(currentFormFieldStatus)
    if(isFormValid) {
      // setinProgress(true)
      props.fetchProgressStatus({ inProgress: true, status: '' })
      const payLoad = {
        username: document.getElementById('userName').value,
        password: document.getElementById('password').value,
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value
      }
      athinaSignUp(payLoad, signUpSuccess, signUpFailure);
    }
  }
  return (
    <div>
      {!isValid ? (
        <Paper className={classes.errorWrapper}>
          <Typography variant="body2">
            {genericErrorMessage}
          </Typography>
        </Paper>
      ) : null}
      <form onSubmit={doSignUp} method="post" autoComplete="off">
        <FormControl
          fullWidth={false}
          className={classes.formControll}
          style={{ marginRight: 20 }}
          error={formFields.firstName.error}
        >
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input id="firstName" variant="outlined" />
        </FormControl>
        <FormControl fullWidth={false} className={classes.formControll} error={formFields.lastName.error}>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input id="lastName" variant="outlined" />
        </FormControl>
        <FormControl fullWidth={true} className={classes.formControll} error={formFields.userName.error}>
          <InputLabel htmlFor="userName">Email address</InputLabel>
          <Input id="userName" inputProps={{ maxLength: 254 }}/>
        </FormControl>
        <FormControl fullWidth={true} className={classes.formControll} error={formFields.password.error}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" inputProps={{ maxLength: 128 }} />
        </FormControl>
        <div className={classes.buttonWrapper}>
          <Button type="submit" variant="contained" color="primary" className={classes.button} onClick={doSignUp}>
            Sign Up
          </Button>
          <Typography variant="body1" className={classes.alreadyAccount}>
            Already have an account?&nbsp;
            <Link
              component="button"
              variant="body2"
              onClick={swapToSignIn}
              style={{color: 'blue'}}
            >
              Sign In
            </Link>
          </Typography>
        </div>
      </form>
    </div>
  );
}
