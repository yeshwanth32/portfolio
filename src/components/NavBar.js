import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const text_style = {
  fontSize: 'Large',
  textTransform: 'none',
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let darkmode_button;
    if (this.props.light == true) {
      darkmode_button = <Brightness4Icon />;
    } else {
      darkmode_button = <Brightness7Icon />;
    }
    return (
      <div>
        <AppBar
          position="static"
          style={{
            background: 'transparent',
            boxShadow: 'none',
            height: '80%',
            width: '80%',
            marginRight: '10%',
            marginLeft: '10%',
            marginTop: '1%',
          }}
        >
          <Toolbar variant="regular">
            <Button style={text_style}>Home</Button>
            <Typography style={{ flexGrow: 1 }}></Typography>
            <Button style={text_style}>About</Button>
            <Button style={text_style}>Projects</Button>
            <IconButton onClick={this.props.changeLight}>
              {darkmode_button}
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
