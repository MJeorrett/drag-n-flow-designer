import React from 'react';
import styled from '@emotion/styled';

import TrayItem from './TrayItem';

const S = {
  Root: styled.div`
    & > *:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  `,
};

const Tray = ({
  children,
}) => {
  return (
    <S.Root>
      <TrayItem name="Step" type="step" color="dodgerblue" />
      <TrayItem name="Finish" type="finish" color="red" />
    </S.Root >
  );
};

export default Tray;
