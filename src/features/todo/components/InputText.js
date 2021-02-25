import React, { useState, useEffect } from 'react';

import { 
  FormGroup,
  FormControl,
  ControlLabel,
} from 'rsuite';

import useDebounce from '../tools/useDebounce';

const InputText = (props) => {
  const [textValue, setTextValue] = useState("");
  const { name, label, value, onChanged } = props;

  let debounceInput = useDebounce(textValue);

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  useEffect(() => {
    if (textValue !== "") {
      onChanged(name, textValue);
    }
  }, [debounceInput, textValue, name]);
  
  const handle = (val) => {
    setTextValue(val);
  };

  return (<React.Fragment>
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        name={name}
        value={textValue}
        onChange={handle}
      />
    </FormGroup>
  </React.Fragment>);
}


export default InputText;