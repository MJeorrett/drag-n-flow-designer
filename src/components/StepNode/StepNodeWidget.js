import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

import StepPortWidget from './StepPortWidget';

const S = {
  Container: styled.div`
    background: white;
    opacity: 0.9;
    border: ${p => p.selected ? '2px solid dodgerblue' : '1px solid black'};
    border-radius: 5px;
  `,
  Title: styled.h4`
    padding: 5px;
    text-align: center;
  `,
  Ports: styled.div`
    display: flex;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: darkblue;
    opacity: 0.9;
  `,
  Spacer: styled.div`
    flex-grow: 1;
    min-width: 1em;
  `,
}

const StepNodeWidget = ({
  engine,
  node,
  step,
  isSelected,
}) => {
  return (
    <S.Container selected={isSelected}>
      <S.Title>{step.title || '<no title>'}</S.Title>
      <S.Ports>
        <PortWidget
          port={node.getPort('prev')}
          engine={engine}
        >
          <StepPortWidget type="prev" />
        </PortWidget>
        <S.Spacer />
        <PortWidget
          port={node.getPort('next')}
          engine={engine}
        >
          <StepPortWidget type="next" />
        </PortWidget>
      </S.Ports>
    </S.Container>
  );
};

export default StepNodeWidget;