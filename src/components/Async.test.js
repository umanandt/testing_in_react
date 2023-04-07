import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    
    
    // it is a dummy fucntion to solve fetch method issue 
    //simulating the success, we are not sending http resquest here
    // we are reducing the amount network traffic 
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });




    //arrange
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});

// here we have to wait for the response
// we get error unable to find an accessible element
//because we get element in response with Async code
//use findallbyrole instead of getAllbyRole also use async and await
