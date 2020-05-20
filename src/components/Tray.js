import React from 'react';
import styled from '@emotion/styled';

import StepNodeWidget from './StepNode/StepNodeWidget';
import FinishNodeWidget from './FinishNode/FinishNodeWidget';

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
      <TrayItem name="Step" type="step">
        <StepNodeWidget renderDummy />
      </TrayItem>
      <TrayItem name="Finish" type="finish">
        <FinishNodeWidget renderDummy />
      </TrayItem>
    </S.Root >
  );
};

export default Tray;
