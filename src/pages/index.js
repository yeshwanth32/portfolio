import * as React from 'react';

import { Button } from '@material-ui/core';
import NavBar from '../components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

// markup
const IndexPage = () => {
  const [light, setLight] = React.useState(true);
  // if (
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-color-scheme: dark)').matches
  // ) {
  //   light = false;
  //   console.log('dark mode is enabled');
  // }
  return (
    <main>
      <MuiThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        <NavBar />
        <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
        <p>Work in progress</p>
      </MuiThemeProvider>
    </main>
  );
};

export default IndexPage;
