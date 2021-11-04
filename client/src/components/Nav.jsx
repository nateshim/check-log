import {useState} from "react";
import {useHistory} from "react-router-dom";
import { makeStyles } from '@mui/styles';
import {AppBar, Avatar, Box, Button, Divider, Menu, MenuItem, Toolbar} from '@mui/material';
import ButtonLink from './ButtonLink';
import {logout} from "../services";

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    textDecoration: 'inherit',
    textTransform: "none",
    color: 'inherit',
  },
  divider: {
    color: theme.palette.divider.main,
  }
}));

const Nav = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.target);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleLogout = async() => {
    await logout();
    props.setUser(null);
    history.push("/");
  }
  const handleTablesDirect = () => {
    if (!props.user) {
      history.push('/');
    } else {
      history.push(`/${props.user.username}/tables`);
    }
  }
  return (
    <>
    <AppBar
      position="static"
      style={{boxShadow: "none", height: '80px', display:'flex', justifyContent: 'center'}}
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
            <Button
              id="user-menu-button"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar src="/broken-image.jpg"/>
            </Button>
            <Menu
              aria-labelledby="user-menu-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
              }}
              transformOrigin={{
                vertical: 'bottom',
              }}
            >
              <MenuItem onClick={() => {handleClose(); handleTablesDirect()}}>Tables</MenuItem>
              <MenuItem onClick={() => {handleClose(); handleLogout()}}>Logout</MenuItem>
            </Menu>
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
    <Divider className={classes.divider}/>
    </>
  );
};

export default Nav;