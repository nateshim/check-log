import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Box, Button, SwipeableDrawer, Typography} from '@mui/material';
import {getLogs} from '../services';

const Log = (props) => {
  const {table_id} = useParams();
  const [toggleFetch, setToggleFetch] = useState(false);
  const [logs, setLogs] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (curr) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpen(curr);
  }

  useEffect(() => {
    const retrieveLogs = async () => {
      const currLogs = await getLogs(table_id);
      setLogs(currLogs);
    }
    retrieveLogs();
  }, [toggleFetch]);

  return (
    <Container>
      <Button onClick={toggleDrawer(true)}>Edit</Button>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div>This is a test</div>
      </SwipeableDrawer>
      <Box>
        {logs.map((log) => (
          <Typography>{log}</Typography>
        ))}
      </Box>
    </Container>
  );
};

export default Log;