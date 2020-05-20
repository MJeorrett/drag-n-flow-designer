import React from 'react';
import styled from '@emotion/styled';

const S = {
  Root: styled.p`
    background: red;
    border-top: 1px solid red;
    color: whitesmoke;
    cursor: crosshair;
    height: 1.5rem;
    font-size: 1rem;
    padding-left: 0.5rem;
    &:hover {
      background: lightpink;
      color: red;
    }
  `,
};

const FinishPortWidget = () => {
  return (
  <S.Root>{'<'}</S.Root>
  );
};

export default FinishPortWidget;
