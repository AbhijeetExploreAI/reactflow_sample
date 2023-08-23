// src/NodeTypes.js
import React from "react";

export const InputNode = ({ data }: any) => {
  return <div>{data.label}</div>;
};

export const OutputNode = ({ data }: any) => {
  return <div>{data.label}</div>;
};
