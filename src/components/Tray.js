import React from 'react';
import styled from '@emotion/styled';

import TrayItem from './TrayItem';
import StepEditor from './StepEditor';

const S = {
  Tray: styled.div`
    display: inline-block;
    min-width: 200px;
    background: #eee;
    padding: 0.5em;
    & > *:not(:last-child) {
      margin-bottom: 0.5em;
    }
  `,
};

const Tray = ({
  children,
}) => {
  return (
    <S.Tray>
      <div>
        <TrayItem name="Step" type="step" color="dodgerblue" />
        <TrayItem name="Finish" type="finish" color="red" />
      </div>
      <StepEditor />
    </S.Tray>
  );
};

export default Tray;
