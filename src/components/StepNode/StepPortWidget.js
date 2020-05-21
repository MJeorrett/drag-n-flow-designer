import React from 'react';

import PortWidgetBase from '../PortWidgetBase';

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
    <PortWidgetBase
      label={labels[type]}
      labelColor="whitesmoke"
    />
  );
};

export default StepPortWidget;
