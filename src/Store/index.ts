import { createSlice, configureStore, combineReducers, PayloadAction } from "@reduxjs/toolkit";
import API from "../api";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

type State = { id: number; title: string }[];

const initialState: State = [];

const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    getItems: (_, action: PayloadAction<State>) => {
      return [...action.payload];
    },
    createItem: (state, action) => {
      return state.concat(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
    updateItem: (state, action) => {
      return state.map((el) => (el.id === +action.payload.id ? action.payload : el));
    },
  },
});

export const getItems = () => async (dispatch: AppDispatch) => {
  const response = await API.get("");
  dispatch(itemsSlice.actions.getItems(response.data.data));
};

export const createItem = (title: string) => async (dispatch: AppDispatch) => {
  const response = await API.post("", {
    title,
  });
  const newItem = { id: response.data.id, title };
  dispatch(itemsSlice.actions.createItem(newItem));
};

export const deleteItem = (id: number) => async (dispatch: AppDispatch) => {
  await API.delete(`/${id}`);
  dispatch(itemsSlice.actions.deleteItem(id));
};

export const updateItem = (id: number, title: string) => async (dispatch: AppDispatch) => {
  await API.post(`${id}`, {
    title,
  });
  const updatedItem = { id: +id, title };
  dispatch(itemsSlice.actions.updateItem(updatedItem));
};

const rootReducer = combineReducers({
  items: itemsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
