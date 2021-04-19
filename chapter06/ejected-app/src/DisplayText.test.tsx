import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import DisplayText from './DisplayText';
import "@testing-library/jest-dom/extend-expect";

describe("Test DisplayText", () => {
  const userFullName = "John Tester";

  const getUserFullnameMock = (username: string): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
    const promise = new Promise<string>((res, rej) => {
      res(userFullName);
    });

    const getUserFullname = jest.fn(async (username: string): Promise<string> => {
      return promise;});
    
    return [promise, getUserFullname];
  }

  it("renders without crashing", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);
    const { baseElement } = render(<DisplayText getUserFullname={getUserFullname} />);
    expect(baseElement).toBeInTheDocument();
  });

  it("receives input text", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);

    const { getByTestId } = render(<DisplayText getUserFullname={getUserFullname} />);
    const input = getByTestId("user-input");
    fireEvent.change(input, {
      target: {
        value:
          username
      }
    });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(username);
  });

  /*it("shows welcome message", () => {
    const testuser = "testuser";
    const msg = `Welcome to React testing, ${testuser}`;
    const { getByTestId } = render(<DisplayText />);
    const input = getByTestId("user-input");
    const label = getByTestId("final-msg");
    fireEvent.change(input, {
      target: {
        value:
          testuser
      }
    });
    const btn = getByTestId("input-submit");
    fireEvent.click(btn);
    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toBe(msg);
  });*/

  it("matches snapshot", () => {
    const username = "testuser";
    const [promise, getUserFullname] = getUserFullnameMock(username);
    const { baseElement } = render(<DisplayText getUserFullname={getUserFullname} />);
    expect(baseElement).toMatchSnapshot();
  });
});