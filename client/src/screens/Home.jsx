import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Container>
        <Box 
          display="flex" 
          height="500px" 
          alignItems="center" 
          justifyContent="center"
        >
          <Typography>Organize your conversations wherever and whenener.</Typography>
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