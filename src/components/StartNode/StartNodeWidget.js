import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

import NodeWidgetBase from '../NodeWidgetBase';
import StartPortWidget from './StartPortWidget';

const S = {
  Ports: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
};

const StartNodeWidget = ({
  engine,
  node,
  isSelected,
}) => {

  return (
    <NodeWidgetBase
      color="green"
      backgroundColor="lightGreen"
      isSelected={isSelected}
      label="START"
      labelColor="green"
      renderPorts={() => (
        <S.Ports>
          <PortWidget
            port={node.getPort('step-start')}
            engine={engine}
          >
            <StartPortWidget />
          </PortWidget>
        </S.Ports>
      )}
    />
  );
};

export default StartNodeWidget;
