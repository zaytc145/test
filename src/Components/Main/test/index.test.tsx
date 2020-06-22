import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Wrapper from "../../../testing-utils";
import Main from "..";

describe("<Main/>", () => {
  it("show in DOM", () => {
    const { getByText, getAllByText, getAllByRole } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
      { wrapper: Wrapper }!
    );
    const button = getByText("Добавить");
    const items = getAllByText(/task [1-2]/);
    const icons = getAllByRole("img");

    expect(button).toBeInTheDocument();
    items.forEach((el) => expect(el).toBeInTheDocument());
    icons.forEach((el) => expect(el).toBeInTheDocument());
  });
  
  //
  //doesn't delete icon
  //
  // it("delete item", () => {
  //   const { getAllByTestId, getByText } = render(
  //     <BrowserRouter>
  //       <Main />
  //     </BrowserRouter>,
  //     { wrapper: Wrapper }
  //   );

  //   const icons = getAllByTestId("icon-wrapper");
  //   fireEvent.click(icons[3]);

  //   expect(getByText("task ")).not.toBeInTheDocument();
  // });
});
