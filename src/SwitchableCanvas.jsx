// src/SwitchableCanvas.js
import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import { InputNode, OutputNode } from "./NodeTypes";

const initialElements = [
  {
    id: "input-node-1",
    type: "input",
    data: { label: "Input Node 1" },
    position: { x: 100, y: 100 },
  },
  {
    id: "output-node-1",
    type: "output",
    data: { label: "Output Node 1" },
    position: { x: 300, y: 100 },
  },
];

const nodeTypes = {
  input: InputNode,
  output: OutputNode,
};

const SwitchableCanvas = () => {
  const [elements, setElements] = useState(initialElements);
  const [nodeType, setNodeType] = useState("input"); // Default node type

  const onNodeDragStop = (event, node) => {
    const updatedNode = {
      ...node,
      position: { x: node.position.x, y: node.position.y },
    };
    setElements((els) =>
      els.map((el) => (el.id === updatedNode.id ? updatedNode : el))
    );
  };

  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => addEdge(newConnection, els));

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        onNodeDragStop={onNodeDragStop}
        onConnect={onEdgeUpdate}
        deleteKeyCode={46} // Delete key
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default SwitchableCanvas;
