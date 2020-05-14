import React, { useEffect } from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const CustomField = ({
  label,
  reduxAction,
  ...props
}) => {
  const [field] = useField(props);
  const { value } = field;
  useEffect(
    () => {
      reduxAction(value);
    },
    [reduxAction, value]
  );

  return (
    <TextField label={label} {...field} {...props} />
  );
};

export default CustomField;
