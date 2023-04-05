import sortProductsByTitle from "../utils/sortProducts";

describe("sort-products-by-title", () => {
  const productsList = [
    {
      id: 1,
      img: "https://pr0.zoon.ru/roXL8ppne7wvfJLAdwHWWA/2080x4232,q90/W2Wjf8C0GZwMGAfH5etaIjIeG6J87q4_g8JVB7bTiVsed9oGMnC6vFv-Vyn1u4koFCltF7wlH_LQV-SMM7e_xQ",
      title: "AOS средство для мытья посуды Crystal",
      typeWeight: "volume",
      weightValue: 450,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
      price: 48.12,
      parameters: {
        hatch: 111111111,
        manufacturer: "Нэфис",
        brand: "AOS",
        typeCare: ["Уход за одеждой"],
      },
    },
    {
      id: 2,
      img: "https://cdn.rf.market/360161/Ariel-avtomat3.png",
      title: "ARIEL стиральный порошок",
      typeWeight: "weight",
      weightValue: 800,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
      price: 50.26,
      parameters: {
        hatch: 222222222,
        manufacturer: "Grifon",
        brand: "ARIEL",
        typeCare: ["Уход за одеждой"],
      },
    },
    {
      id: 3,
      img: "https://cdn.rf.market/360161/Ariel-avtomat3.png",
      title: "SPORT стиральный порошок",
      typeWeight: "weight",
      weightValue: 800,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
      price: 50.26,
      parameters: {
        hatch: 222222222,
        manufacturer: "Grifon",
        brand: "ARIEL",
        typeCare: ["Уход за одеждой"],
      },
    },
  ];

  test("by-desc-title", () => {
    const sortedProducts = sortProductsByTitle(productsList, "desc");
    const expectedProducts = [
      productsList[0],
      productsList[1],
      productsList[2],
    ];

    expect(sortedProducts).toEqual(expectedProducts);
  });

  test("by-asc-title", () => {
    const sortedProducts = sortProductsByTitle(productsList, "asc");
    const expectedProducts = [
      productsList[0],
      productsList[1],
      productsList[2],
    ];

    expect(sortedProducts).toEqual(expectedProducts);
  });
});
