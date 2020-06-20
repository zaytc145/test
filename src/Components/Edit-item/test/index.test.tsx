import React from "react";
import EditItem from "..";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import Wrapper from "../../../testing-utils";

describe("<EditItem/>", () => {
  it("show in DOM", () => {
    const { getByText } = render(
      <BrowserRouter>
        <EditItem match={{ params: { id: 1 } }} />
      </BrowserRouter>,
      { wrapper: Wrapper }
    );

    const task = getByText("Задача №1");
    expect(task).toBeInTheDocument();
  });

  it("input value change", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <EditItem match={{ params: { id: 1 } }} />
      </BrowserRouter>,
      { wrapper: Wrapper }
    );
    const input = getByRole("textbox") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.change(input,{
      target:{value:"task 1"}
    })
    expect(input.value).toBe("task 1");
  });


  
});
