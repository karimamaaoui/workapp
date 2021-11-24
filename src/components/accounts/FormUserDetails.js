import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
           <AppBar title="Enter Personal Details "  />
            <TextField
              placeholder="Enter Your Birthday "
              label="birthday"
              onChange={handleChange('birthday')}
              defaultValue={values.birthday}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your level Of Education"
              label="level Of Education"
              onChange={handleChange('levelOfEducation')}
              defaultValue={values.levelOfEducation}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
          
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;