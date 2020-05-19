/** @jsx jsx */

import { TextField } from '@material-ui/core';
import { css, jsx } from '@emotion/core';

import CustomInput from './CustomInput';

const CustomField = ({
  ...props
}) => {
  return (
    <CustomInput
      {...props}
      render={renderProps => (
        <TextField
          css={css`
            width: 100%;
          `}
          {...renderProps}
        />
      )}
    />
  );
};

export default CustomField;
