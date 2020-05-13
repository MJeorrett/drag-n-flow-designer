import React from 'react';
import styled from '@emotion/styled';

const S = {
  Tray: styled.div`
  min-width: 200px;
  height: 100%;
  background: #eee;
  flex-grow: 0;
  flex-shrink: 0;
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
