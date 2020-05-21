/** @jsx jsx */

import { v4 as generateId } from 'uuid';
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from '@material-ui/core';
import { css, jsx } from '@emotion/core';

import CustomInput from './CustomInput';

const CustomDropdown = (props) => {
  const {
    name,
    label,
    options,
    error,
    helperText,
  } = props;

  const renderOptions = () => options.map(option => (
    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
  ));

  return (
    <div>
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
      <FormHelperText error={error}>
        {helperText || ' '}
      </FormHelperText>
    </div>
  );
};

export default CustomDropdown;
