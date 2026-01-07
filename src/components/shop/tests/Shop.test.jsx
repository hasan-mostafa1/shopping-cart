import userEvent from "@testing-library/user-event";
import { createBrowserRouter, RouterProvider } from "react-router";
import { describe, expect, it, vi } from "vitest";
import routes from "../../../routes";
import { render, screen } from "@testing-library/react";

const router = createBrowserRouter(routes);
const Products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    category: "jewelery",
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    category: "electronics",
  },
];

vi.mock("../../app/hooks/useProducts", () => {
  return [null, false, Products];
});

window.matchMedia = vi.fn(() => {
  return false;
});

describe("Shop component", () => {
  it("Display all products initially", () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "Shop" });

    user.click(shopLink);

    expect(screen.queryAllByTestId("product").length).toBe(3);
  });
});
