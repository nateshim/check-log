import {Grid, Typography} from '@mui/material';
const LogRow = (props) => {
  return (
    <Grid container item spacing={2}>
      <Grid item>
        <Typography>{props.date}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.location}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.party}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.subject}</Typography>
      </Grid>
      <Grid item>
        <Typography>{props.details}</Typography>
      </Grid>
    </Grid>
  );
};

export default LogRow;