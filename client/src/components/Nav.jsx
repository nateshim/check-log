import {useHistory} from "react-router-dom";
import { makeStyles } from '@mui/styles';
import {AppBar, Avatar, Box, Toolbar, Typography} from '@mui/material';
import ButtonLink from './ButtonLink';
import {logout} from "../services";

const useStyles = makeStyles({
  buttonLink: {
    textDecoration: 'inherit',
    textTransform: "none",
    color: 'inherit',
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
          <Box display="flex" flexGrow={1} justifyContent="flex-end">
            <Avatar src="/broken-image.jpg" onClick={handleClick}/>
          </Box>
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