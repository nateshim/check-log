import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Grid, Button, Container, Modal, Typography } from '@mui/material';
import FormInput from '../components/FormInput';
import { getTables, createTable, deleteTable } from '../services';

const useStyles = makeStyles({
  createTableForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
  },
  table: {
    height: '150px',
    width: '200px',
  },
  tableContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '90vh',
    padding: '10px',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
  }
});

const Tables = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { username } = useParams();
  const [toggleFetch, setToggleFetch] = useState(false);
  const [open, setOpen] = useState(false);
  const [tables, setTables] = useState([]);
  const [name, setName] = useState('');
  const [toggleDeleteButtons, setToggleDeleteButtons] = useState(false);

  const handleToggleDeleteButtons = () => {
    setToggleDeleteButtons(!toggleDeleteButtons);
  }
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

  const handleDeleteTable = async (id) => {
    await deleteTable(id);
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
    <Container className={classes.tableContainer}>
      <Modal
        open={open}
        hideBackdrop={true}
        style={{
          background: 'white'
        }}
      >
        <form className={classes.createTableForm}>
          <FormInput
            for="name"
            setter={setName}
            inputType="text"
            formValue={name}
            required={true}
          />
          <Button color="secondary" variant="contained" onClick={handleCreateTable}>Create Table</Button>
        </form>
      </Modal>
      <Container>
        <Grid container spacing={2} className={classes.tableContainer}>
          {tables.map((table) => (
            <Grid item className={classes.item} xs={12} sm={4} key={table.id}>
              <Container>
                {toggleDeleteButtons && <Button
                  color="error"
                  variant="outlined"
                  style={{ position: 'absolute', zIndex: '10' }}
                  onClick={() => handleDeleteTable(table.id)}
                >X</Button>}
                <Link to={`${table.id}/log`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button color="secondary" variant="contained" className={classes.table}>
                    {table.name}
                  </Button>
                </Link>
              </Container>
            </Grid>
          ))}
          <Grid item className={classes.item} xs={12} sm={4}>
            <Container>
              <Button color="secondary" variant="outlined" onClick={handleOpen} className={classes.table}>
                <Typography>Add Table</Typography>
              </Button>
            </Container>
          </Grid>
          <Grid item className={classes.item} xs={12} sm={4}>
            <Container>
              <Button color="error" variant="outlined" onClick={handleToggleDeleteButtons} className={classes.table}>
                <Typography>Delete Table</Typography>
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Tables;