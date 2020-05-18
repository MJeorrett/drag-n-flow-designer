import React from 'react';
import styled from '@emotion/styled';
import { Tooltip } from '@material-ui/core';

const S = {
  TrayItem: styled.div`
  color: ${p => p.color};
  font-family: Helvetica, Arial;
  padding: 5px;
  border: solid 1px ${p => p.color};
  border-radius: 5px;
  margin-bottom: 2px;
  cursor: pointer;
`,
};

const TrayItem = ({
  name,
  type,
  color,
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
        {name}
      </S.TrayItem>
    </Tooltip>
  );
};

export default TrayItem;
