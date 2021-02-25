import React, { useState, useEffect } from 'react';

import { 
  FormGroup,
  FormControl,
  ControlLabel,
} from 'rsuite';

import useDebounce from '../tools/useDebounce';

const InputTextarea = (props) => {
  const [textValue, setTextValue] = useState("");
  const { name, label, value, onChanged, rows } = props;

  let debounceInput = useDebounce(textValue);

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  useEffect(() => {
    if (textValue !== "") {
      onChanged({name, value: textValue});
    }
  }, [debounceInput, textValue, name]);
  
  const handleChange = (val) => {
    setTextValue(val);
  };

  return (<React.Fragment>
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        name={name}
        value={textValue}
        rows={rows} 
        componentClass="textarea"
        onChange={handleChange}
      />
    </FormGroup>
  </React.Fragment>);
}


export default InputTextarea;