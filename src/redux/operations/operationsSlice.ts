import { createSlice } from "@reduxjs/toolkit";
import { Operation } from "../../modelTypes";

// const initialState: Operation[] = [];
const initialState = [] as Operation[];

const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    addOperation(state, action) {
      state.push({
        id: action.payload.id,
        amount: action.payload.amount,
        completed: false,
      });
    },
    toggleOperation(state, action) {
      const operation = state.find(
        (operation) => operation.id === action.payload
      );
      // @ts-ignore
      operation.completed = !operation.completed;
    },
  },
});

export const { addOperation, toggleOperation } = operationsSlice.actions;
export const operationsReducer = operationsSlice.reducer;
