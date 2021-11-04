import {Box, Container, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '100px',
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
        <Box 
          display="flex" 
          height="500px" 
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
        <Box 
          display="flex" 
          height="500px" 
          alignItems="center" 
          justifyContent="center"
        >
          <Typography>Testimonials go here.</Typography>
        </Box>
    </Container>
  );
};

export default Home;