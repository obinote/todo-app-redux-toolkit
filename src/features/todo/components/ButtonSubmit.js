import React from 'react';

import { 
  Icon  ,
  FormGroup,
  Button,
  ButtonToolbar,
} from 'rsuite';

const ButtonSubmit = (props) => {
  let { label, commit } = props;

  return (<React.Fragment>
    <FormGroup>
      <ButtonToolbar>
        <Button color="blue" appearance="primary" onClick={commit}>
          <Icon icon="plus"  /> {label}
        </Button>
      </ButtonToolbar>
    </FormGroup>
  </React.Fragment>);
}

export default ButtonSubmit;