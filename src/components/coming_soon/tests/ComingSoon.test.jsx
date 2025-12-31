import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import ComingSoon from "../ComingSoon";

describe("ComingSoon component", () => {
  it("Renders correctly", async () => {
    const { container } = render(
      <MemoryRouter>
        <ComingSoon />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
