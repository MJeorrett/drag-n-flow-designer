/** @jsx jsx */

import { v4 as generateId } from 'uuid';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { css, jsx } from '@emotion/core';

import CustomInput from './CustomInput';

const CustomDropdown = (props) => {
  const {
    name,
    label,
    options,
  } = props;

  const renderOptions = () => options.map(option => (
    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
  ));

  return (
    <FormControl 
      css={css`
        width: 100%;
      `}
    >
      <InputLabel id={`${name}-${generateId()}`}>{label}</InputLabel>
      <CustomInput
        {...props}
        render={renderProps => (
          <Select {...renderProps}>
            {renderOptions()}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default CustomDropdown;
