import React from 'react';
import createEngine, {
  DefaultNodeModel,
  DiagramModel
} from '@projectstorm/react-diagrams';

import { CanvasWidget } from '@projectstorm/react-canvas-core';

import './App.css';

function App() {
  const engine = createEngine();
  engine.maxNumberPointsPerLink = 0;
  
  const start = new DefaultNodeModel({
    name: 'Start',
    color: 'green',
  });
  start.setPosition(0, 100);
  start.addOutPort('');

  const node1 = new DefaultNodeModel({
    name: 'Step 1: Personal Information',
    color: 'rgb(0, 192, 255)',
  });
  node1.setPosition(100, 100);
  node1.addInPort('Prev');
  node1.addOutPort('Has Children: true');
  node1.addOutPort('Has Children: false');

  const node2 = new DefaultNodeModel({
    name: 'Step 2a: Children Verification',
    color: 'rgb(0,192,255)',
  });
  node2.setPosition(350, 100);
  node2.addInPort('Prev.');
  node2.addOutPort('Next')

  const node3 = new DefaultNodeModel({
    name: 'Step 2b: Address Verification',
    color: 'rgb(0,192,255)',
  });
  node3.setPosition(350, 200);
  node3.addInPort('Prev.');
  node3.addOutPort('Next');

  const node4 = new DefaultNodeModel({
    name: 'Step 3: Police Check',
    color: 'rgb(0,192,255)',
  });
  node4.setPosition(550, 100);
  node4.addInPort('Prev.');
  node4.addOutPort('Next');

  const end = new DefaultNodeModel({
    name: 'Finish',
    color: 'red',
  });
  end.setPosition(750, 100);
  end.addInPort('');

  const model = new DiagramModel();
  model.addAll(start, node1, node2, node3, node4, end);
  engine.setModel(model);

  return (
    <div>
      <h1>Siccar Storm</h1>
      <CanvasWidget className="canvas" engine={engine} />
    </div>
  );
}

export default App;
