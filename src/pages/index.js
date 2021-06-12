import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import NavBar from '../components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import YourSvg from '../images/drawing2.svg';
//import Thumbnail from './styles';

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

const image_theme1 = {
  width: '40%',
  height: '40%',
  float: 'right',
};

const intro_theme1 = {};

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
            light={this.state.light}
            theme={this.state.light ? themeLight : themeDark}
          />
          <img src={YourSvg} alt="React Logo" style={image_theme1} />
          <h1 style={{ marginLeft: '12%', fontSize: '3rem' }}>Hi There!</h1>
          <h4
            style={{
              marginLeft: '12%',
              fontSize: '2rem',
              fontWeight: 'normal',
            }}
          >
            This page is not fully developed
          </h4>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default IndexPage;
