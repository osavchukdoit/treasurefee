import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  inputId: string;
  value: string | number;
  handleChange: (val: any) => void;
  label?: string;
  type?: string;
  className?: string;
  placeholder?: string;
}

export const AppInput: React.FC<Props> = ({
  label,
  inputId,
  type = "text",
  className = "",
  placeholder = "placeholder",
  value,
  handleChange,
}) => {
  return (
    <Form className={className}>
      <Form.Group controlId={inputId} className={"mb-3"}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
          min={"0"}
        />
      </Form.Group>
    </Form>
  );
};
