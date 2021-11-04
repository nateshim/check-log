import {Link} from "react-router-dom";
import {Button, Typography} from '@mui/material';

const ButtonLink = (props) => {
  return (
    <Button variant="text">
      <Link 
        className={props.classes.buttonLink} 
        to={props.path}
      >
        <Typography 
        style={(
          props.position === "left" ? 
            {
              fontSize: '30px',
              fontWeight: 'bold',
            }
            :
            {fontSize: '20px'}
        )} 
        color='textPrimary'
        >{props.name}</Typography>
      </Link>
    </Button>
  );
};

export default ButtonLink;