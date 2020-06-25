import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../";
import { act } from "react-dom/test-utils";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

describe("<Modal/>", () => {
  it("render in DOM", () => {
    const handleClose = jest.fn();
    const { getByText } = render(<Modal onClick={handleClose} show={true} closeModal={handleClose} />);
    expect(getByText("Краткое описание")).toBeInTheDocument();
  });

  it("submit form", async () => {
    const handleClose = jest.fn();
    const { getByText, getByRole } = render(<Modal onClick={handleClose} show={true} closeModal={handleClose} />);
    const input = getByRole("textbox") as HTMLInputElement;
    act(() => {
      fireEvent.change(input, {
        target: { value: "task 3" },
      });
    });
    const button = getByText("Добавить");
    expect(input.value).toBe("task 3");

    fireEvent.click(button);
  });
});
