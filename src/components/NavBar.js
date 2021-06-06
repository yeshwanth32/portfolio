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

// export default function ButtonAppBar(light) {
//   console.log(light);
//   const classes = useStyles();

//   return (
//     <div>
//       <AppBar
//         position="static"
//         style={{ background: 'transparent', boxShadow: 'none' }}
//       >
//         <Toolbar variant="regular">
//           <Typography variant="h6" className={classes.title}>
//             Test
//           </Typography>
//           <IconButton onClick={light}>
//             <Brightness4Icon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
          <Toolbar variant="regular">
            <Typography style={{ flexGrow: 1 }}>Test</Typography>
            <IconButton onClick={this.props.changeLight}>
              <Brightness4Icon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
