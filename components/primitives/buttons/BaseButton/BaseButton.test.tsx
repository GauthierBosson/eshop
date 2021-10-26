import { render, screen } from "@testing-library/react";

import { Small, Medium, Large } from "./BaseButton.stories";

it("Renders the small button", function () {
  render(<Small {...Small.args} />);
  expect(screen.getByRole("button")).toHaveClass("p-2");
});

it("Renders the medium button", function () {
  render(<Medium {...Medium.args} />);
  expect(screen.getByRole("button")).toHaveClass("p-6");
});

it("Renders the large button", function () {
  render(<Large {...Large.args} />);
  expect(screen.getByRole("button")).toHaveClass("p-10");
});
