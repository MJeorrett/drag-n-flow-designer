import React from 'react';
import styled from '@emotion/styled';

const S = {
  Tray: styled.div`
    display: inline-block;
    min-width: 200px;
    background: #eee;
    padding: 0.5em;
    & > *:not(:last-child) {
      margin-bottom: 0.5em;
    }
  `,
};

const Tray = ({
  children,
}) => {
  return (
    <S.Tray>{children}</S.Tray>
  );
};

export default Tray;
