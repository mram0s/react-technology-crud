import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Technologies from "../../pages/Technologies";

describe("Testing Technologies Page", () => {
  it("should be able to add new technology", () => {
    render(<Technologies />);

    userEvent.type(screen.getByRole("textbox"), "React  Native");
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(screen.getByText(/react native/i)).toBeTruthy();
  });

  it("should be able to list three techs", () => {
    render(<Technologies />);

    userEvent.type(screen.getByRole("textbox"), "React  Native");
    userEvent.click(screen.getByRole("button", { name: /save/i }));
    userEvent.type(screen.getByRole("textbox"), "Flutter");
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(screen.getByRole("list").children.length).toBe(3);
  });

  it("should de able to delete one tech", () => {
    render(<Technologies />);

    userEvent.type(screen.getByRole("textbox"), "React  Native");
    userEvent.click(screen.getByRole("button", { name: /save/i }));
    userEvent.click(screen.getByTestId("React Native-btn-delete"));

    expect(screen.queryByText(/react native/i)).not.toBeInTheDocument();
    expect(screen.getByRole("list").children.length).toBe(1);
  });

  it("button delete should be disable only for first technology on list", () => {
    render(<Technologies />);

    userEvent.type(screen.getByRole("textbox"), "React  Native");
    userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(screen.getByTestId("React-btn-delete")).toBeDisabled();
    expect(screen.getByTestId("React Native-btn-delete")).not.toBeDisabled();
  });
});
