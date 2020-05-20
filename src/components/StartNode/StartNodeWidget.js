import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

import StartPortWidget from './StartPortWidget';

const S = {
  Root: styled.div`
    background: lightgreen;
    border: 0.5px solid green;
    border-radius: 2px;
    box-shadow: ${p => p.isSelected ? '4px 4px 7px 0px rgba(74,74,74,0.7)' : 'none'};
    transition: all 200ms ease-out;
    color: green;
    font-size: 1.5rem;
    opacity: 0.9;
  `,
  Label: styled.p`
    padding: 0 0.5rem;
  `,
};

const StartNodeWidget = ({
  engine,
  node,
  isSelected,
}) => {

  return (
    <S.Root isSelected={isSelected}>
      <S.Label>START</S.Label>
      <PortWidget
        port={node.getPort('step-start')}
        engine={engine}
      >
        <StartPortWidget />
      </PortWidget>
    </S.Root>
  );
};

export default StartNodeWidget;
