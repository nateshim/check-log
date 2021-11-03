import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {Container, Box, Button, Grid, SwipeableDrawer, Modal} from '@mui/material';
import EditLogMenu from '../components/EditLogMenu';
import FormInput from '../components/FormInput';
import LogRow from '../components/LogRow';
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
    setLogs([...logs, res]);
    toggleModal();
    setToggleFetch((curr) => !curr);
  }

  useEffect(() => {
    if (!props.user || props.user.username !== username) {
      history.push('/');
    }
    getLogs(table_id).then((currLogs) => {
      setLogs(currLogs);
    })
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
      <Box display="flex" justifyContent="flex-start">
        <Button onClick={toggleDrawer(true)}>Edit</Button>
      </Box>
      <Grid container spacing={2}>
        <LogRow 
            key={0}
            date="Date"
            location="Location"
            party="Party"
            subject="Subject"
            details="Details"
          />
        {logs?.map((log) => (
          <LogRow 
            key={log.id}
            date={log.date}
            location={log.location}
            party={log.party}
            subject={log.subject}
            details={log.details}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Log;