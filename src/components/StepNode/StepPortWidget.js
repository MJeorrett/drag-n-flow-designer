import React from 'react';
import styled from '@emotion/styled';

const S = {
  Port: styled.p`
    z-index: 10;
    color: white;
    background: darkblue;
    cursor: pointer;
    padding: 0.3em;
    border-radius: 4px;
    &:hover {
      background: dodgerblue;
    },
  `,
};

const StepPortWidget = ({
  type,
}) => {
  return (
    <S.Port type={type}>{type === 'next' ? 'next' : 'prev'}</S.Port>
  );
};

export default StepPortWidget;
