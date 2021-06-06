import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import NavBar from '../components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: false,
    };
    //this.changeLight = this.changeLight.bind(this);
  }
  changeLight = () => {
    this.setState({ light: !this.state.light });
  };
  render() {
    return (
      <div>
        <MuiThemeProvider theme={this.state.light ? themeLight : themeDark}>
          <CssBaseline />
          <NavBar
            changeLight={this.changeLight}
            theme={this.state.light ? themeLight : themeDark}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default IndexPage;
