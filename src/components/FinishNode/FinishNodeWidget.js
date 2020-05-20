import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

import FinishPortWidget from './FinishPortWidget';

const S = {
  Root: styled.div`
    background: red;
    opacity: 0.9;
    border: ${p => p.selected ? '2px solid dodgerblue' : '1px solid black'};
    border-radius: ${p => p.selected ? '4px' : '2px'};
  `,
};

const FinishNodeWidget = ({
  engine,
  node,
}) => {
  const isSelected = node.isSelected;
  
  return (
    <S.Root selected={isSelected}>
      <PortWidget
        port={node.getPort('step-finish')}
        engine={engine}
      >
        <FinishPortWidget />
      </PortWidget>
    </S.Root>
  );
};

export default FinishNodeWidget;
