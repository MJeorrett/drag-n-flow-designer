import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    border: 1px solid dodgerblue;
  `,
  Ports: styled.div`
    display: flex;
  `,
  Port: styled.div`
    width: 16px;
    height: 16px;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    z-index: 100;
    &:hover {
      background: rgba(0, 0, 0, 1);
    },
  `,
}

const StepNodeWidget = ({
  engine,
  node,
  size,
}) => {
  return (
    <S.Container>
      <h5>{node.getOptions().title}</h5>
      <S.Ports>
        <PortWidget
          port={node.getPort('prev')}
          engine={engine}
        >
          <S.Port />
        </PortWidget>
      </S.Ports>
    </S.Container>
  );
};

export default StepNodeWidget;
