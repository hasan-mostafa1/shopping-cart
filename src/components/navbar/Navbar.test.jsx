import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("Renders correctly", async () => {
    window.matchMedia = vi.fn(() => {
      return false;
    });
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
