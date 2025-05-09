import { render, screen, waitFor } from "@testing-library/react";
// Add Jest types for test functions
import "@testing-library/jest-dom";
import App from "./App";

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

test("shows loading initially", async () => {
  (fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => ({ data: [] }),
  });

  render(<App />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() =>
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  );
});

test("shows cat breed data on successful fetch", async () => {
  const mockData = [
    {
      breed: "Abyssinian",
      country: "Ethiopia",
      origin: "Natural/Standard",
      coat: "Short",
      pattern: "Ticked",
    },
  ];

  (fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => ({ data: mockData }),
  });

  render(<App />);

  await waitFor(() =>
    expect(screen.getByText("Breed: Abyssinian")).toBeInTheDocument()
  );
  expect(screen.getByText("Country: Ethiopia")).toBeInTheDocument();
  expect(screen.getByText("Coat: Short")).toBeInTheDocument();
  expect(screen.getByText("Pattern Ticked")).toBeInTheDocument();
});

test("shows error on fetch failure", async () => {
  (fetch as jest.Mock).mockRejectedValueOnce(new Error("Fetch failed"));

  render(<App />);

  await waitFor(() =>
    expect(screen.getByText(/Failed to fetch data/i)).toBeInTheDocument()
  );
});
