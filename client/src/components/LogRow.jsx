import { makeStyles } from '@mui/styles';
import { Grid, Divider, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  divider: {
    color: theme.palette.divider.main,
  }
}));

const LogRow = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container item spacing={1} style={(props.id === 0 ? {background: '#331E36'} : {background: 'none'})}>
        <Grid item xs={2} style={{maxHeight: '10vh', overflowY: 'scroll', overflowX: 'hidden'}}> 
          <Typography color={(props.id === 0 ? "primary" : "secondary")}>{props.date}</Typography>
        </Grid>
        <Grid item xs={2} style={{maxHeight: '10vh', minWidth: '70px', overflowY: 'scroll', overflowX: 'hidden'}}>
          <Typography color={(props.id === 0 ? "primary" : "secondary")}>{props.location}</Typography>
        </Grid>
        <Grid item xs={2} style={{maxHeight: '10vh', overflowY: 'scroll', overflowX: 'hidden'}}>
          <Typography color={(props.id === 0 ? "primary" : "secondary")}>{props.party}</Typography>
        </Grid>
        <Grid item xs={2} style={{maxHeight: '10vh', overflowY: 'scroll', overflowX: 'hidden'}}>
          <Typography color={(props.id === 0 ? "primary" : "secondary")}>{props.subject}</Typography>
        </Grid>
        <Grid item xs={4} style={{maxHeight: '10vh', overflowY: 'scroll', overflowX: 'hidden'}}>
          <Typography color={(props.id === 0 ? "primary" : "secondary")}>{props.details}</Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider}/>
    </>
  );
};

export default LogRow;