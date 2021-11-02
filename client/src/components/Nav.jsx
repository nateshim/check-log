import {useHistory} from "react-router-dom";
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import ButtonLink from './ButtonLink';
import {logout} from "../services";

const useStyles = makeStyles({
  buttonLink: {
    textDecoration: 'inherit',
    color: 'inherit',
  },
  left: {
    color: 'white',
  },
  right: {
    color: 'white',
  },
});

const Nav = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = async() => {
    await logout();
    props.setUser(null);
    history.push("/");
  }
  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <ButtonLink 
          classes={classes}
          position="left"
          path="/"
          name="CheckLog"
        />
        {props.user ? (
          <>
            <Button className={classes.right} onClick={handleClick}>Log out!</Button>
          </>
        ): (
          <Box display="flex" flexGrow={1} justifyContent="flex-end">
            <ButtonLink 
              classes={classes}
              position="right"
              path="/register"
              name="Register"
            />
            <ButtonLink 
              classes={classes}
              position="right"
              path="/login" 
              name="Login"
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;