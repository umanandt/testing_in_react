import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //assert
    const helloworldElement = screen.getByText("Hello World");
    // can use {exact: false and exact: true also }
    expect(helloworldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was Not clicked", () => {
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed! if the he button was clicked", () => {
    //arrange
    render(<Greeting />);
    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText("changed!");
    expect(outputElement).toBeInTheDocument();
  });

  // conditional test
  test("does not render good to see you if the button was clicked",() =>{
    render(<Greeting/>);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.queryByText("good to see you", {exact: false});
    expect(outputElement).toBeNull();
  })
});

// writing tests with three "A"s
// arrange, act & assert
