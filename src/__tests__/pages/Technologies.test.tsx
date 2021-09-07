import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Technologies from "../../pages/Technologies";

describe("Testing Technologies Page", () => {
  it("should be able to add new technology", () => {
    render(<Technologies />);

    userEvent.type(screen.getByRole("textbox"), "React  Native");
    userEvent.click(screen.getByRole("button", { name: /salvar/i }));

    expect(screen.getByText(/react native/i)).toBeTruthy();
  });
});
