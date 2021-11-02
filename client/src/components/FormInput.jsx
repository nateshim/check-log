import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
const FormInput = (props) => {
  return (
    <FormControl>
      <InputLabel htmlFor={props.for}>{props.for}</InputLabel>
      <Input
        id={props.for}
        aria-describedby={`${props.for}-helper-text`}
        type={props.inputType}
        value={props.formValue}
        onChange={(e) => props.setter(e.target.value)}
        required
      />
      <FormHelperText id={`${props.for}-helper-text`}>Please select 8-12 characters.</FormHelperText>
    </FormControl>
  );
};

export default FormInput;