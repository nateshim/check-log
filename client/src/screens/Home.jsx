import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '100px',
  },
  testimonial: {
    background: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box
        display="flex"
        height="800px"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          color='textPrimary'
          style={{
            fontWeight: 'bold',
            fontSize: '50px',
          }}
        >
          Organize your conversations wherever, whenever.
        </Typography>
      </Box>
      <Grid
        container
        className={classes.testimonial}
        height="800px"
        justifyContent="center"
        spacing={2}
      >
        <Grid item xs={12} sm={6} display="flex" alignItems="center" justifyContent="center">
          <Container style={{
            background: 'white',
            height: '400px',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography
              color='textPrimary'
              style={{
                fontSize: '25px',
                display: 'flex',
              }}
            >In an increasingly data-driven market, we need tools to record the business interactions from which that data is derived. CheckLog seeks to expedite that process.</Typography>
            <Typography
              color='textPrimary'
              style={{
                fontSize: '20px',
                fontFamily: 'Archivo'
              }}
            >- Nathanael Shim</Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} display="flex" alignItems="center" justifyContent="center">
          <Container >
            <Typography
              color='primary'
              style={{
                fontSize: '40px',
                fontFamily: 'Archivo',
              }}
            >Organize your interactions today! Get started with a customizable tool for your daily conversations.</Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;