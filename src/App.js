import React from 'react';
import createEngine, {
  DefaultNodeModel,
  DiagramModel
} from '@projectstorm/react-diagrams';

import { CanvasWidget } from '@projectstorm/react-canvas-core';

import './App.css';

function App() {
  const engine = createEngine();
  const node1 = new DefaultNodeModel({
    name: 'Step 1: Personal Information',

    color: 'rgb(0, 192, 255)',
  });
  node1.setPosition(100, 100);
  let port1 = node1.addOutPort('Out');

  const node2 = new DefaultNodeModel({
    name: 'Children Verification',
    color: 'rgb(0,192,255)',
  });
  node2.setPosition(300, 100);
  let port2 = node2.addInPort('In');

  const link = port1.link(port2);

  const model = new DiagramModel();
  model.addAll(node1, node2, link);
  engine.setModel(model);

  return (
    <div>
      <h1>Siccar Storm</h1>
      <CanvasWidget className="canvas" engine={engine} />
    </div>
  );
}

export default App;
