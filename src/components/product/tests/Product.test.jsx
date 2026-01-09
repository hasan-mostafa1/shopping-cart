import { render, waitFor, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router";
import Product from "../Product";
import userEvent from "@testing-library/user-event";

window.matchMedia = vi.fn(() => {
  return false;
});

const product = { id: 0, title: "Test Product", price: "22.5" };

describe("Product component", () => {
  it("Add product to cart", async () => {
    let cart = [];
    const setCart = vi.fn((updatedCart) => {
      cart = updatedCart;
    });
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Product product={product} cart={cart} setCart={setCart} />
      </MemoryRouter>
    );
    const addBtn = screen.getByRole("button", { name: "Add" });

    user.click(addBtn);

    await waitFor(() => {
      expect(cart.length).toBe(1);
      expect(cart[0].productId).toBe(0);
      expect(cart[0].quantity).toBe(1);
    });
  });

  it("Add product with a specified quantity to cart", async () => {
    let cart = [];
    const setCart = vi.fn((updatedCart) => {
      cart = [...updatedCart];
    });
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Product product={product} cart={cart} setCart={setCart} />
      </MemoryRouter>
    );
    const increaseQuantityBtn = screen.getByRole("button", { name: "+" });
    const addBtn = screen.getByRole("button", { name: "Add" });

    user.click(increaseQuantityBtn);
    user.click(addBtn);

    await waitFor(() => {
      expect(cart.length).toBe(1);
      expect(cart[0].productId).toBe(0);
      expect(cart[0].quantity).toBe(2);
    });
  });

  it("Update product quantity in cart", async () => {
    let cart = [];
    const setCart = vi.fn((updatedCart) => {
      cart = [...updatedCart];
    });
    const user = userEvent.setup();
    const { rerender } = render(
      <MemoryRouter>
        <Product
          product={product}
          cart={cart}
          setCart={setCart}
          key={product.id}
        />
      </MemoryRouter>
    );
    const increaseQuantityBtn = screen.getByRole("button", { name: "+" });
    const addBtn = screen.getByRole("button", { name: "Add" });

    user.click(increaseQuantityBtn);
    user.click(addBtn);

    await waitFor(() => {
      expect(cart.length).toBe(1);
      expect(cart[0].productId).toBe(0);
      expect(cart[0].quantity).toBe(2);
    });

    rerender(
      <MemoryRouter>
        <Product
          product={product}
          cart={cart}
          setCart={setCart}
          key={product.id}
        />
      </MemoryRouter>
    );

    const decreaseQuantityBtn = screen.getByRole("button", { name: "–" });
    user.click(decreaseQuantityBtn);
    await waitFor(() => {
      const updateBtn = screen.getByRole("button", { name: "Update" });
      user.click(updateBtn);
    });

    await waitFor(() => {
      expect(cart.length).toBe(1);
      expect(cart[0].productId).toBe(0);
      expect(cart[0].quantity).toBe(1);
    });
  });

  it("Renders correctly", async () => {
    let cart = [];
    const setCart = vi.fn((updatedCart) => {
      cart = updatedCart;
    });
    const { container } = render(
      <MemoryRouter>
        <Product product={product} cart={cart} setCart={setCart} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
