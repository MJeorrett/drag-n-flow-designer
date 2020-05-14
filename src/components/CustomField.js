import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const CustomField = ({
  label,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <TextField label={label} {...field} {...props} />
  );
};

export default CustomField;
