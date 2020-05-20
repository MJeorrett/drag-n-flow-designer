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

const labels = {
  next: 'next',
  prev: 'prev',
  'next-true': 'when true',
  'next-false': 'when false',
};

const StepPortWidget = ({
  type,
}) => {
  return (
    <S.Port>{labels[type]}</S.Port>
  );
};

export default StepPortWidget;
