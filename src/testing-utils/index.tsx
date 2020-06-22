import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";

type Props = {
  children: ReactNode;
};

const initialState = [
  {
    id: 1,
    title: "task 1",
  },
  {
    id: 2,
    title: "task 2",
  },
];

const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    getItems: (_, action) => {
      return [...action.payload];
    },
    createItem: (state, action) => {
      return state.concat(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
      // return [...state, { id: 3, title: "task 3" }];
    },
    updateItem: (state, action) => {
      return state.map((el) => (el.id === +action.payload.id ? action.payload : el));
    },
  },
});

const rootReducer = combineReducers({
  items: itemsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const Wrapper = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
