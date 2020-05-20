import React from 'react';
import styled from '@emotion/styled';

const S = {
  Root: styled.p`
    background: green;
    border-top: 1px solid green;
    color: whitesmoke;
    height: 1.5rem;
    font-size: 1rem;
    padding-right: 0.5rem;
    text-align: right;
    &:hover {
      background: lightgreen;
      color: green;
    }
  `,
}

const StartPortWidget = () => {
  return (
    <S.Root>first step</S.Root>
  );
};

export default StartPortWidget;
