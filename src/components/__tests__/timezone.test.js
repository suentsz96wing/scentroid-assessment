import { render, screen } from "@testing-library/react";
import TimeZoneInput from "../TimeZoneInput";

describe("TimeZone component", () => {
  test("it is showing the timezone label", async () => {
    render(<TimeZoneInput />);

    expect(screen.getByTestId("timezone-label")).toBeInTheDocument();
  });

  test("it is showing the timezone dropdown", async () => {
    render(<TimeZoneInput />);

    expect(screen.getByTestId("timezone-dropdown")).toBeInTheDocument();
  });
});
