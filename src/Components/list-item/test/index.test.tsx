import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ListItem from "../";
import Wrapper from "../../../testing-utils";

describe("<ListItem/>", () => {
  it("render in dom", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ListItem itemId={1} text="task 1" />
      </BrowserRouter>,
      { wrapper: Wrapper }
    );
    const item = getByText("task 1");
    expect(item).toBeInTheDocument();
  });
});
