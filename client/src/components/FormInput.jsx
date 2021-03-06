import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

const renderFormHelperText = (id) => {
  switch(id) {
    case 'email':
      return '* Required.';
    case 'username':
      return '* Required. Please select 8-12 characters.';
    case 'password':
      return '* Required. Please select 8-12 characters.';
    case 'date':
      return '* Required. e.g. 1970-01-01';
    case 'location':
      return '* Required. Please provide a location.';
    case 'subject':
      return '* Required. Please provide a subject';
    default:
      return '';
  }
}

const FormInput = (props) => {
  return (
    <FormControl style={{marginBottom: '8px', paddingLeft: '10px'}}>
      <InputLabel htmlFor={props.for}>{props.for}</InputLabel>
      <Input
        id={props.for}
        aria-describedby={`${props.for}-helper-text`}
        type={props.inputType}
        value={props.formValue}
        onChange={(e) => props.setter(e.target.value)}
        required={props.required}
        style={{color: '#331E36'}}
      />
      <FormHelperText style={{color: '#331E36'}} id={`${props.for}-helper-text`}>
        {renderFormHelperText(props.for)}
      </FormHelperText>
    </FormControl>
  );
};

export default FormInput;