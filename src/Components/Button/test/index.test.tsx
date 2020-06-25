import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../";

describe("<Button/>", () => {
  it("render in DOM", () => {
    const { getByText } = render(<Button text="Add" type="create" onClick={() => undefined} />);
    expect(getByText("Add")).toBeInTheDocument();
  });

  it("check button click", () => {
    const { getByText } = render(
      <Button
        text="Add"
        type="create"
        onClick={() => {
          const button = document.querySelector(".create-button") as HTMLButtonElement;
          button.textContent = "Delete";
        }}
      />
    );
    const button = getByText("Add");
    fireEvent.click(button);
    expect(getByText("Delete")).toBeInTheDocument();
  });
});
