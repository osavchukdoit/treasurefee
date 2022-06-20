import React from "react";
import { Container } from "react-bootstrap";
import { ProcessOperation } from "../operations/ProcessOperation";
import { OperationsList } from "../operations/OperationsList";

export const Main = () => {
  return (
    <Container>
      <ProcessOperation />
      <OperationsList />
    </Container>
  );
};
