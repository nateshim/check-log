import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {Container, Box, Button, Grid, SwipeableDrawer, Modal} from '@mui/material';
import EditLogMenu from '../components/EditLogMenu';
import FormInput from '../components/FormInput';
import LogRow from '../components/LogRow';
import {getLogs, addLog, editLog, deleteLog} from '../services';

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
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);
  const [showEditButtons, setShowEditButtons] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [logs, setLogs] = useState([]);
  const [logToEdit, setLogToEdit] = useState({});

  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [party, setParty] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');

  const prepEditLog = (log) => {
    setLogToEdit(log);
    setDate(log?.date);
    setLocation(log?.location);
    setParty(log?.party);
    setSubject(log?.subject);
    setDetails(log?.details);
    toggleModal(true);
  }
  
  const toggleDrawer = (curr) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpenDrawer(curr);
  }

  const toggleModal = (edit) => {
    setOpenDrawer(false);
    setOpenModal(!openModal);
    setIsEdit(edit);
  }

  const toggleDeleteButtons = () => {
    setShowDeleteButtons(!showDeleteButtons);
  }

  const toggleEditButtons = () => {
    setShowEditButtons(!showEditButtons);
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
    toggleModal(false);
    setToggleFetch((curr) => !curr);
  }

  const handleEditColumn = async () => {
    const newLog = {
      date,
      location,
      party,
      subject,
      details,
      table_id
    }
    await editLog(newLog, logToEdit?.id);
    toggleModal(false);
    toggleEditButtons();
    setLogToEdit({});
    setToggleFetch((curr) => !curr);
  }

  const handleDeleteColumn = async (id) => {
    await deleteLog(id);
    toggleDeleteButtons();
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
            required={true}
          />
          <FormInput
            for="location"
            setter={setLocation}
            inputType="text"
            formValue={location}
            required={true}
          />
          <FormInput
            for="party"
            setter={setParty}
            inputType="text"
            formValue={party}
            required={true}
          />
          <FormInput
            for="subject"
            setter={setSubject}
            inputType="text"
            formValue={subject}
            required={true}
          />
          <FormInput
            for="details"
            setter={setDetails}
            inputType="text"
            formValue={details}
            required={false}
          />
          {isEdit ? <Button onClick={handleEditColumn}>Edit Table</Button> : <Button onClick={handleAddColumn}>Create Table</Button>}
        </form>
      </Modal>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <EditLogMenu
          setOpenDrawer={setOpenDrawer}
          toggleModal={toggleModal}
          toggleDeleteButtons={toggleDeleteButtons}
          toggleEditButtons={toggleEditButtons}
        />
      </SwipeableDrawer>
      <Box display="flex" justifyContent="flex-start">
        <Button onClick={toggleDrawer(true)}>Edit</Button>
      </Box>
      <Grid container spacing={3}>
        <LogRow 
            key={0}
            date="Date"
            location="Location"
            party="Party"
            subject="Subject"
            details="Details"
          />
        {logs?.map((log) => (
          <Container>
          {showDeleteButtons && <Button className={classes.circleButton} variant="outlined" color="error" onClick={() => handleDeleteColumn(log.id)}>
            -
          </Button>}
          {showEditButtons && <Button className={classes.circleButton} variant="outlined" onClick={() => {prepEditLog(log)}}>
            Edit
          </Button>}
          <LogRow 
            key={log.id}
            date={log.date}
            location={log.location}
            party={log.party}
            subject={log.subject}
            details={log.details}
          />
          </Container>
        ))}
      </Grid>
    </Container>
  );
};

export default Log;