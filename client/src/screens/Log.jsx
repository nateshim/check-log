import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {Container, Box, Button, SwipeableDrawer, Modal, Typography} from '@mui/material';
import EditLogMenu from '../components/EditLogMenu';
import FormInput from '../components/FormInput';
import {getLogs, addLog} from '../services';

const useStyles = makeStyles({
  addColumnForm: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Log = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const {username, table_id} = useParams();

  const [toggleFetch, setToggleFetch] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [logs, setLogs] = useState([]);

  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [party, setParty] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');

  const toggleDrawer = (curr) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpenDrawer(curr);
  }

  const toggleModal = () => {
    setOpenDrawer(false);
    setOpenModal(!openModal);
  }

  const handleAddColumn = async () => {
    const newLog = {
      date,
      location,
      party,
      subject,
      details, 
      table_id
    }
    const res = await addLog(newLog, table_id);
    console.log(res);
    setLogs([...logs, res]);
  }

  useEffect(() => {
    if (!props.user || props.user.username !== username) {
      history.push('/');
    }
    const retrieveLogs = async () => {
      const currLogs = await getLogs(table_id);
      setLogs(currLogs);
    }
    retrieveLogs();
  }, [toggleFetch]);

  return (
    <Container>
      <Modal
        open={openModal}
      >
        <form className={classes.addColumnForm}>
          <FormInput
            for="date"
            setter={setDate}
            inputType="text"
            formValue={date}
          />
          <FormInput
            for="location"
            setter={setLocation}
            inputType="text"
            formValue={location}
          />
          <FormInput
            for="party"
            setter={setParty}
            inputType="text"
            formValue={party}
          />
          <FormInput
            for="subject"
            setter={setSubject}
            inputType="text"
            formValue={subject}
          />
          <FormInput
            for="details"
            setter={setDetails}
            inputType="text"
            formValue={details}
          />
          <Button onClick={handleAddColumn}>Create Table</Button>
        </form>
      </Modal>
      <Button onClick={toggleDrawer(true)}>Edit</Button>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <EditLogMenu
          toggleModal={toggleModal}
        />
      </SwipeableDrawer>
      <Box>
        {logs?.map((log) => (
          <Typography>{log.party}</Typography>
        ))}
      </Box>
    </Container>
  );
};

export default Log;