import React from "react";
import { useAppSelector } from "../redux/hooks";

export const OperationsList = () => {
  const { operations } = useAppSelector((state) => state);

  const operationsRender = operations.map(({ amount }) => {
    return <div>{amount}</div>;
  });

  return <div>{operationsRender}</div>;
};
