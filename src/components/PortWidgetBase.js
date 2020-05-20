import React from 'react';
import styled from '@emotion/styled';

const S = {
  Root: styled.p`
    color: ${p => p.labelColor};
    cursor: crosshair;
    padding: 5px;
    &:hover {
      border-radius: 2px;
      border: 1px solid ${p => p.labelColor};
      padding: 4px;
    }
  `,
}

const PortWidgetBase = ({
  label,
  labelColor,
}) => {
  return (
    <S.Root
      labelColor={labelColor}
    >
      {label}
    </S.Root>
  );
};

export default PortWidgetBase;
