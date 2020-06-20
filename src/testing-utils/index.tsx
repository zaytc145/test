import React, { ReactNode } from "react";
import store from "../Store";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};



const Wrapper = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
