import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import Cart from "../components/Header/Cart/Cart";

const mockStore = configureMockStore();

describe("Cart component", () => {
  test("renders cart with 0 items", () => {
    const store = mockStore({
      cart: {
        productsCart: [],
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Корзина/i)).toBeInTheDocument();
    expect(screen.getByText(/0 ₸/i)).toBeInTheDocument();
  });

  test("renders cart with 1 item", () => {
    const store = mockStore({
      cart: {
        productsCart: [
          {
            id: 1,
            img: "https://pr0.zoon.ru/roXL8ppne7wvfJLAdwHWWA/2080x4232,q90/W2Wjf8C0GZwMGAfH5etaIjIeG6J87q4_g8JVB7bTiVsed9oGMnC6vFv-Vyn1u4koFCltF7wlH_LQV-SMM7e_xQ",
            title: "AOS средство для мытья посуды Crystal",
            typeWeight: "volume",
            weightValue: 450,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
            price: 100,
            parameters: {
              hatch: 111111111,
              manufacturer: "Нэфис",
              brand: "AOS",
              typeCare: ["Уход за одеждой"],
            },
            amount: 1,
          },
        ],
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Корзина/i)).toBeInTheDocument();
    expect(screen.getByText("100.00 ₸")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("renders cart with multiple items", () => {
    const store = mockStore({
      cart: {
        productsCart: [
          {
            id: 1,
            img: "https://pr0.zoon.ru/roXL8ppne7wvfJLAdwHWWA/2080x4232,q90/W2Wjf8C0GZwMGAfH5etaIjIeG6J87q4_g8JVB7bTiVsed9oGMnC6vFv-Vyn1u4koFCltF7wlH_LQV-SMM7e_xQ",
            title: "AOS средство для мытья посуды Crystal",
            typeWeight: "volume",
            weightValue: 450,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
            price: 50,
            parameters: {
              hatch: 111111111,
              manufacturer: "Нэфис",
              brand: "AOS",
              typeCare: ["Уход за одеждой"],
            },
            amount: 2,
          },
          {
            id: 2,
            img: "https://cdn.rf.market/360161/Ariel-avtomat3.png",
            title: "ARIEL стиральный порошок",
            typeWeight: "weight",
            weightValue: 800,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
            price: 100,
            parameters: {
              hatch: 222222222,
              manufacturer: "Grifon",
              brand: "ARIEL",
              typeCare: ["Уход за одеждой"],
            },
            amount: 1,
          },
          {
            id: 3,
            img: "https://static.selvis.com/web/images/1b1112a8-bab9-479c-a85f-ee71ef5ea12d.png?large",
            title: "ARIEL автомат гель",
            typeWeight: "weight",
            weightValue: 1500,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
            price: 60,
            parameters: {
              hatch: 333333333,
              manufacturer: "CleanWave",
              brand: "ARIEL",
              typeCare: ["Уход за одеждой"],
            },
            amount: 1,
          },
        ],
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Корзина/i)).toBeInTheDocument();
    expect(screen.getByText("260.00 ₸")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
