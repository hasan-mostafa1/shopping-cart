import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import Cart from "../Cart";
import routes from "../../../routes";
import userEvent from "@testing-library/user-event";

const router = createMemoryRouter(routes);

vi.mock("../../app/hooks/useProducts", () => {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops tech",
      description: "test test",
      category: "men's clothing",
      price: 22.4,
    },
  ];
  return {
    default: vi.fn(() => [products, null, false]),
  };
});

window.matchMedia = vi.fn(() => {
  return false;
});

describe("Cart component", () => {
  it("Display empty cart initially", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const cartLink = screen.getByRole("link", { name: "Cart" });

    user.click(cartLink);

    await waitFor(() => {
      expect(screen.queryAllByTestId("cart-item").length).toBe(0);
      expect(
        screen.getByText("Your cart is currently empty.")
      ).toBeInTheDocument();
    });
  });

  it("Show Added product in cart", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "Shop" });
    user.click(shopLink);

    await waitFor(() => {
      const addBtn = screen.getByRole("button", { name: "Add" });
      user.click(addBtn);
    });

    const cartLink = screen.getByRole("link", { name: "Cart" });
    user.click(cartLink);

    await waitFor(() => {
      expect(screen.queryAllByTestId("cart-item").length).toBe(1);
    });
  });

  it("Remove product from cart", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "Shop" });
    user.click(shopLink);

    await waitFor(() => {
      const addBtn = screen.getByRole("button", { name: "Add" });
      user.click(addBtn);
    });

    const cartLink = screen.getByRole("link", { name: "Cart" });
    user.click(cartLink);

    await waitFor(() => {
      const removeBtn = screen.getByAltText("Remove item from cart");
      user.click(removeBtn);
    });

    await waitFor(() => {
      expect(screen.queryAllByTestId("cart-item").length).toBe(0);
      expect(
        screen.getByText("Your cart is currently empty.")
      ).toBeInTheDocument();
    });
  });

  it("Renders correctly", async () => {
    const user = userEvent.setup();
    const { container } = render(<RouterProvider router={router} />);
    const cartLink = screen.getByRole("link", { name: "Cart" });

    user.click(cartLink);

    await waitFor(() => {
      expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
