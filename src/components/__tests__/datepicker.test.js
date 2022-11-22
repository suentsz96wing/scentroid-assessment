import { render, screen } from "@testing-library/react";
import DateTimePickerInput from "../DateTimePickerInput";

describe("DatePicker component", () => {
  test("it is showing the date picker label", async () => {
    render(<DateTimePickerInput />);

    expect(screen.getByTestId("date-label")).toBeInTheDocument();
  });

  test("it is showing the date picker component", async () => {
    render(<DateTimePickerInput />);

    expect(screen.getByTestId("date-picker")).toBeInTheDocument();
  });

  
});
