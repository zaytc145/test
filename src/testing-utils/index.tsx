import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../Store";

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
