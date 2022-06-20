import React, { useState } from "react";
import { AppInput } from "../ui/AppInput";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "react-bootstrap";
import { addOperation } from "../redux/operations/operationsSlice";

export const ProcessOperation = () => {
  const [amount, setAmount] = useState(0);
  const { operations } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  console.log("operations=", operations);

  return (
    <div>
      <AppInput
        inputId={"process-operation"}
        label={"Enter amount"}
        type={"number"}
        placeholder={"amount"}
        value={amount}
        handleChange={(value) => setAmount(Number(value))}
      />
      <Button
        onClick={() => {
          dispatch(
            addOperation({
              id: Date.now(),
              amount,
            })
          );
        }}
      >
        Add
      </Button>
    </div>
  );
};
