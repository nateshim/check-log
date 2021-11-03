import {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Grid, Button, Container, Modal } from '@mui/material'; 
import FormInput from '../components/FormInput';
import { getTables, createTable } from '../services';

const useStyles = makeStyles({
  createTableForm: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Tables = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const {username} = useParams(); 
  const [toggleFetch, setToggleFetch] = useState(false);
  const [open, setOpen] = useState(false);
  const [tables, setTables] = useState([]);
  const [name, setName] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreateTable = async () => {
    const tableInfo = {
      name: name,
      user: props.user
    }
    await createTable(tableInfo);
    handleClose();
    setToggleFetch((curr) => !curr);
  }

  useEffect(() => {
    if (!props.user || props.user.username !== username) {
      history.push("/");
    }
    getTables().then((currTables) => {
      setTables(currTables)
    })
  }, [toggleFetch]);

  return (
    <Container>
      <Modal
        open={open}
      >
        <form className={classes.createTableForm}>
          <FormInput
            for="name"
            setter={setName}
            inputType="text"
            formValue={name}
            required={true}
          />
          <Button onClick={handleCreateTable}>Create Table</Button>
        </form>
      </Modal>
      <Grid container spacing={2}>
        {tables.map((table) => (
          <Grid item xs={4} key={table.id}>
            <Button>
              <Link to={`${table.id}/log`}>
                {table.name}
              </Link>
            </Button>
          </Grid>
        ))}
        <Grid item xs={4}>
          <Button onClick={handleOpen}>+</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tables;