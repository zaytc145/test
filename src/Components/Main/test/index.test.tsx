import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, getAllByAltText, fireEvent } from "@testing-library/react";
import Wrapper from "../../../testing-utils";
import Main from "..";


describe("<Main/>", () => {
  it("show in DOM", () => {
    const { getByText, getAllByText, getAllByRole } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
      { wrapper: Wrapper }
    );
    const button = getByText("Добавить");
    const items = getAllByText(/task [1-2]/);
    const icons = getAllByRole("img");

    expect(button).toBeInTheDocument();
    items.forEach((el) => expect(el).toBeInTheDocument());
    icons.forEach((el) => expect(el).toBeInTheDocument());
  });

  // it("delete item", () => {
  //   const { getAllByAltText, getByText } = render(
  //     <BrowserRouter>
  //       <Main />
  //     </BrowserRouter>,
  //     { wrapper: Wrapper }
  //   );

  //   const icons = getAllByAltText("delete icon");
  //   act(() => {
  //     fireEvent.click(icons[1]);
  //   });

  //   expect(getByText("task 2")).not.toBeInTheDocument();
  // });
});
