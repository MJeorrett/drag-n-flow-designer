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
};

const buildPorts = ({ node, engine, branchCondition }) => {
  const ports = []

  ports.push(
    <PortWidget
      port={node.getPort('step-prev')}
      engine={engine}
    >
      <StepPortWidget type="prev" />
    </PortWidget>
  );
  ports.push(<S.Spacer />);

  switch (branchCondition.type) {
    case 'nextStep': {
      ports.push(
        <PortWidget
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
            port={node.getPort('step-next-true')}
            engine={engine}
          >
            <StepPortWidget type="next-true" />
          </PortWidget>
          <PortWidget
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
}) => {
  return (
    <S.Container selected={isSelected}>
      <S.Title>{step.title || '<no title>'}</S.Title>
      <S.Ports>
        {buildPorts({ node, engine, branchCondition })}
      </S.Ports>
    </S.Container>
  );
};

export default StepNodeWidget;
