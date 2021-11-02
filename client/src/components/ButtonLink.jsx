import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

const ButtonLink = (props) => {
  return (
    <Button variant="text">
      <Link 
        className={(
          props.position === "left" ? 
            `${props.classes.left} ${props.classes.buttonLink}`
            :
            `${props.classes.right} ${props.classes.buttonLink}`
        )} 
        to={props.path}
      >
        {props.name}
      </Link>
    </Button>
  );
};

export default ButtonLink;