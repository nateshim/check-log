import {Box, Button} from '@mui/material';

const EditLogMenu = (props) => {  
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" style={{background: '#331E36'}} height="100%" width="200px">
      <Button onClick={() => props.toggleModal(false)}>Add Column</Button>
      <Button onClick={() => {props.toggleEditButtons(); props.setOpenDrawer(false);}}>Edit Column</Button>
      <Button onClick={() => {props.toggleDeleteButtons(); props.setOpenDrawer(false);}}>Delete Column</Button>
    </Box>
  );
};

export default EditLogMenu;