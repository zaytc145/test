import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Wrapper from "../../../testing-utils";
import Main from "..";

describe("<Main/>", () => {
  it("show in DOM", () => {
    const { getByText} = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
      { wrapper: Wrapper }
    );
    const button = getByText("Добавить");
    const text = getByText("Список задач");

    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
