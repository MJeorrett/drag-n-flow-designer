import React from 'react';
import { TextField } from '@material-ui/core';

import CustomInput from './CustomInput';

const CustomField = ({
  ...props
}) => {
  return (
    <CustomInput
      {...props}
      render={renderProps => (
        <TextField {...renderProps} />
      )}
    />
  );
};

export default CustomField;
