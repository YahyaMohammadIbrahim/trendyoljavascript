import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginCaption from '../utils/login/loginCaption';
import { Button, Link, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import logo2 from  '../images/indir.png';






const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '45ch',
    },
  },
}));


export default function MyAccount() {
  
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      Your profile picture:

     
         <Grid item xs={6} style={{ textAlign:'right' }}>
             <img src={logo2} style={{height:'120px'}}/>
        </Grid>
      <div>
        <TextField
          required
          id="outlined-read-only-input"
          label="Your username"
          defaultValue="Your current username is Yahya"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
       
        <TextField
          id="outlined-read-only-input"
          label="Password"
          type="password"
          defaultValue="Your current password is ************"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="outlined-read-only-input"
          label="Your age"
          defaultValue="Your current age is 16 "
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        
        <TextField id="outlined-read-only-input" label="When your account was created"  defaultValue="18/09/2021 " InputProps={{
            readOnly: true,
          }} variant="filled" />
       
      </div>
      <div>
        <TextField
          required
          id="outlined-read-only-input"
          label="Your current location"
          defaultValue="Bolu, TR."
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-read-only-input"
          label="Your current E-mail"
          defaultValue="ytitsmaj@gmail.com"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
       
        
        
        <TextField id="outlined-read-only-input" label="Your name and surname" defaultValue="Yahya M. Ibrahim" InputProps={{
            readOnly: true,
          }} variant="outlined" />
       
      </div>
      
    </form>
     );
    }
    