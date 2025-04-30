import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";


test("show 6 products by default", () => {
    render(<App />)
})

test("clicking on the button loads 6")