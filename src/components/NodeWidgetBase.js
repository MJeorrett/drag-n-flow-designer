import React from 'react';
import styled from '@emotion/styled';

const S = {
  Root: styled.div`
    background: ${p => p.bgColor};
    border: ${p => p.isSelected ? '1.5px solid dodgerblue' : `0.5px solid ${p.color}`};
    border-radius: 2px;
    box-shadow: ${p => p.isSelected ? '4px 4px 7px 0px rgba(74,74,74,0.7)' : 'none'};
    transition: all 200ms ease-out;
    opacity: 0.9;
    `,
  Label: styled.p`
    border-bottom: 1px solid ${p => p.color};
    color: ${p => p.labelColor};
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  `,
  Ports: styled.div`
    background: ${p => p.color};
    padding: 3px;
  `,
};

const NodeWidgetBase = ({
  label,
  color,
  backgroundColor,
  labelColor = 'black',
  isSelected,
  renderPorts
}) => {
  return (
    <S.Root
      color={color}
      bgColor={backgroundColor}
      isSelected={isSelected}
    >
      <S.Label labelColor={labelColor}>
        {label}
      </S.Label>
      <S.Ports color={color}>
        {renderPorts()}
      </S.Ports>
    </S.Root>
  );
};

export default NodeWidgetBase;
