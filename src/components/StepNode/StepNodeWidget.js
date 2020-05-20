import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

import NodeWidgetBase from '../NodeWidgetBase';
import StepPortWidget from './StepPortWidget';

const S = {
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
};

const buildPorts = ({ node, engine, branchCondition }) => {
  const ports = []

  ports.push(
    <PortWidget
      key="prev"
      port={node.getPort('step-prev')}
      engine={engine}
    >
      <StepPortWidget type="prev" />
    </PortWidget>
  );
  ports.push(<S.Spacer key="spacer" />);

  switch (branchCondition.type) {
    case 'nextStep': {
      ports.push(
        <PortWidget
          key="next"
          port={node.getPort('step-next')}
          engine={engine}
        >
          <StepPortWidget type="next" />
        </PortWidget>
      );
      break;
    }
    case 'field': {
      ports.push(
        <div>
          <PortWidget
            key="true"
            port={node.getPort('step-next-true')}
            engine={engine}
          >
            <StepPortWidget type="next-true" />
          </PortWidget>
          <PortWidget
            key="false"
            port={node.getPort('step-next-false')}
            engine={engine}
          >
            <StepPortWidget type="next-false" />
          </PortWidget>
        </div>
      );
      break;
    }
    default: {
      throw new Error(`Unsupported branch type ${branchCondition.type}.`)
    }
  }

  return ports;
};

const StepNodeWidget = ({
  engine,
  node,
  step,
  branchCondition,
  isSelected,
  renderDummy,
}) => {
  return (
    <NodeWidgetBase
      color="darkblue"
      backgroundColor="white"
      isSelected={isSelected}
      label={renderDummy ? 'New Step' : step.title}
      labelColor="black"
      renderDummy={renderDummy}
      renderPorts={() => (
        <S.Ports>
          {buildPorts({ node, engine, branchCondition })}
        </S.Ports>
      )}
    />
  );
};

export default StepNodeWidget;
