import React from 'react';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

import TrayItem from './TrayItem';
import StepEditor from './StepEditor';

const S = {
  Tray: styled.div`
    display: inline-block;
    min-width: 450px;
    background: #eee;
    padding: 2em;
    & > *:not(:last-child) {
      margin-bottom: 2em;
    }
  `,
  Nodes: styled.div`
    & > *:not(:last-child) {
      margin-bottom: 0.5em;
    },
  `,
};

const Tray = ({
  children,
}) => {
  return (
    <S.Tray>
      <S.Nodes>
        <TrayItem name="Step" type="step" color="dodgerblue" />
        <TrayItem name="Finish" type="finish" color="red" />
      </S.Nodes>
      <div>
        <Typography variant="h4" align="center" gutterBottom>Edit Step</Typography>
        <StepEditor />
      </div>
    </S.Tray>
  );
};

export default Tray;
