import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it, vi } from "vitest";
import routes from "../../../routes";
import { render, screen, waitFor } from "@testing-library/react";

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
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      description: "test test",
      category: "jewelery",
      price: 22.4,
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 tech",
      description: "test test",
      category: "electronics",
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

describe("Shop component", () => {
  it("Display all products initially", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "Shop" });

    user.click(shopLink);

    await waitFor(() => {
      expect(screen.queryAllByTestId("product").length).toBe(3);
    });
  });

  it("Display all categories initially", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "Shop" });

    user.click(shopLink);

    await waitFor(() => {
      expect(screen.queryAllByTestId("category-btn").length).toBe(3);
    });
  });

  it("Filter products by categories", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "Shop" });

    user.click(shopLink);
    const categoryBtn = await screen.findByRole("button", { name: "jewelery" });
    user.click(categoryBtn);

    await waitFor(() => {
      expect(screen.queryAllByTestId("product").length).toBe(1);
    });
  });

  it("Filter products by search value", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "Shop" });

    user.click(shopLink);
    const searchBox = await screen.findByRole("searchbox");
    user.type(searchBox, "tech");

    await waitFor(() => {
      expect(screen.queryAllByTestId("product").length).toBe(2);
    });
  });

  it("Renders correctly", async () => {
    const user = userEvent.setup();
    const { container } = render(<RouterProvider router={router} />);
    const shopLink = screen.getByRole("link", { name: "Shop" });

    user.click(shopLink);

    await waitFor(() => {
      expect(screen.getByText("The Collection")).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
