import React from 'react';
import styled from '@emotion/styled';
import { Tooltip } from '@material-ui/core';

const S = {
  TrayItem: styled.div`
    cursor: pointer;
  `,
};

const TrayItem = ({
  name,
  type,
  color,
  children
}) => {
  const handleDragStart = event => {
    event.dataTransfer.setData('node-type', type);
  };

  return (
    <Tooltip title={`Drag onto canvas to create new ${name}.`}>
      <S.TrayItem
        draggable="true"
        color={color}
        onDragStart={handleDragStart}
      >
        {children}
      </S.TrayItem>
    </Tooltip>
  );
};

export default TrayItem;
