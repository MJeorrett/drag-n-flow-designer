import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

import FinishPortWidget from './FinishPortWidget';
import NodeWidgetBase from '../NodeWidgetBase';

const S = {
  Ports: styled.div`
    display: flex;
  `,
}

const FinishNodeWidget = ({
  engine,
  node,
  isSelected,
}) => {
  return (
    <NodeWidgetBase
      color="red"
      backgroundColor="lightPink"
      isSelected={isSelected}
      label="FINISH"
      labelColor="red"
      renderPorts={() => (
        <S.Ports>
          <PortWidget
            port={node.getPort('step-finish')}
            engine={engine}
          >
            <FinishPortWidget />
          </PortWidget>
        </S.Ports>
      )}
    />
  );
};

export default FinishNodeWidget;
