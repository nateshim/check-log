import {Box, Container, Typography} from '@mui/material';

const Home = () => {
  return (
    <Container>
        <Box 
          display="flex" 
          height="500px" 
          alignItems="center" 
          justifyContent="center"
        >
          <Typography color="textPrimary">Organize your conversations wherever and whenener.</Typography>
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