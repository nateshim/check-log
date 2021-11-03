import {Box, Button} from '@mui/material';

const EditLogMenu = (props) => {  
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Button onClick={props.toggleModal}>Add Column</Button>
      <Button>Edit Column</Button>
      <Button onClick={() => {props.toggleDeleteButtons(); props.setOpenDrawer(false);}}>Delete Column</Button>
    </Box>
  );
};

export default EditLogMenu;