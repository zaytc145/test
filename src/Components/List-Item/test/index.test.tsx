import React from "react";
import ListItem from "../";
import { render } from "@testing-library/react";
import Wrapper from "../../../testing-utils";
import { BrowserRouter } from "react-router-dom";

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
