import React from 'react';
import styled from '@emotion/styled';

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
    <S.TrayItem
      draggable="true"
      color={color}
      onDragStart={handleDragStart}
    >
      {name}
    </S.TrayItem>
  );
};

export default TrayItem;
