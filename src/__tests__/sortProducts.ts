import sortProductsByPrice from "../utils/sortProductsByPrice";
import sortProductsByTitle from "../utils/sortProductsByTitle";

describe("sort-products-by-title", () => {
  const productsList: IProduct[] = [
    {
      id: 1,
      img: "product1.jpg",
      title: "Banana bread",
      typeWeight: "loaf",
      weightValue: 0.5,
      description: "Delicious banana bread, perfect for breakfast or dessert",
      price: 8,
      parameters: {
        hatch: 12,
        manufacturer: "Baker's Kitchen",
        brand: "Baker's Kitchen",
        typeCare: ["vegetarian", "organic"],
      },
    },
    {
      id: 2,
      img: "product2.jpg",
      title: "Chocolate cake",
      typeWeight: "cake",
      weightValue: 1,
      description:
        "Rich and moist chocolate cake, made with premium ingredients",
      price: 15,
      parameters: {
        hatch: 8,
        manufacturer: "ChocoFiesta",
        brand: "ChocoFiesta",
        typeCare: ["vegetarian"],
      },
    },
    {
      id: 3,
      img: "product3.jpg",
      title: "Blueberry muffin",
      typeWeight: "muffin",
      weightValue: 0.1,
      description: "Fluffy and sweet blueberry muffin, perfect for a snack",
      price: 3,
      parameters: {
        hatch: 24,
        manufacturer: "Sweet Treats",
        brand: "Sweet Treats",
        typeCare: ["vegetarian", "gluten-free"],
      },
    },
  ];

  it("sort-by-asc", () => {
    const sortedProducts = sortProductsByTitle(productsList, "asc");
    const expectedProducts = [
      {
        id: 1,
        img: "product1.jpg",
        title: "Banana bread",
        typeWeight: "loaf",
        weightValue: 0.5,
        description: "Delicious banana bread, perfect for breakfast or dessert",
        price: 8,
        parameters: {
          hatch: 12,
          manufacturer: "Baker's Kitchen",
          brand: "Baker's Kitchen",
          typeCare: ["vegetarian", "organic"],
        },
      },
      {
        id: 3,
        img: "product3.jpg",
        title: "Blueberry muffin",
        typeWeight: "muffin",
        weightValue: 0.1,
        description: "Fluffy and sweet blueberry muffin, perfect for a snack",
        price: 3,
        parameters: {
          hatch: 24,
          manufacturer: "Sweet Treats",
          brand: "Sweet Treats",
          typeCare: ["vegetarian", "gluten-free"],
        },
      },
      {
        id: 2,
        img: "product2.jpg",
        title: "Chocolate cake",
        typeWeight: "cake",
        weightValue: 1,
        description:
          "Rich and moist chocolate cake, made with premium ingredients",
        price: 15,
        parameters: {
          hatch: 8,
          manufacturer: "ChocoFiesta",
          brand: "ChocoFiesta",
          typeCare: ["vegetarian"],
        },
      },
    ];

    expect(sortedProducts).toEqual(expectedProducts);
  });

  it("sort-by-desc", () => {
    const sortedProducts = sortProductsByTitle(productsList, "desc");
    const expectedProducts = [
      {
        id: 2,
        img: "product2.jpg",
        title: "Chocolate cake",
        typeWeight: "cake",
        weightValue: 1,
        description:
          "Rich and moist chocolate cake, made with premium ingredients",
        price: 15,
        parameters: {
          hatch: 8,
          manufacturer: "ChocoFiesta",
          brand: "ChocoFiesta",
          typeCare: ["vegetarian"],
        },
      },
      {
        id: 3,
        img: "product3.jpg",
        title: "Blueberry muffin",
        typeWeight: "muffin",
        weightValue: 0.1,
        description: "Fluffy and sweet blueberry muffin, perfect for a snack",
        price: 3,
        parameters: {
          hatch: 24,
          manufacturer: "Sweet Treats",
          brand: "Sweet Treats",
          typeCare: ["vegetarian", "gluten-free"],
        },
      },
      {
        id: 1,
        img: "product1.jpg",
        title: "Banana bread",
        typeWeight: "loaf",
        weightValue: 0.5,
        description: "Delicious banana bread, perfect for breakfast or dessert",
        price: 8,
        parameters: {
          hatch: 12,
          manufacturer: "Baker's Kitchen",
          brand: "Baker's Kitchen",
          typeCare: ["vegetarian", "organic"],
        },
      },
    ];

    expect(sortedProducts).toEqual(expectedProducts);
  });

  it("sort-empty", () => {
    const products: [] = [];
    const expectedProducts: [] = [];

    expect(products).toEqual(expectedProducts);
  });
});

describe("sort-products-by-price", () => {
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
      price: 30.26,
      parameters: {
        hatch: 222222222,
        manufacturer: "Grifon",
        brand: "ARIEL",
        typeCare: ["Уход за одеждой"],
      },
    },
    {
      id: 3,
      img: "https://static.selvis.com/web/images/1b1112a8-bab9-479c-a85f-ee71ef5ea12d.png?large",
      title: "ARIEL автомат гель",
      typeWeight: "weight",
      weightValue: 1500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
      price: 90.54,
      parameters: {
        hatch: 333333333,
        manufacturer: "CleanWave",
        brand: "ARIEL",
        typeCare: ["Уход за одеждой"],
      },
    },
  ];

  it("sort-by-asc", () => {
    const sortedProducts = sortProductsByPrice(productsList, "asc");
    const expectedProducts = [
      {
        id: 2,
        img: "https://cdn.rf.market/360161/Ariel-avtomat3.png",
        title: "ARIEL стиральный порошок",
        typeWeight: "weight",
        weightValue: 800,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
        price: 30.26,
        parameters: {
          hatch: 222222222,
          manufacturer: "Grifon",
          brand: "ARIEL",
          typeCare: ["Уход за одеждой"],
        },
      },
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
        id: 3,
        img: "https://static.selvis.com/web/images/1b1112a8-bab9-479c-a85f-ee71ef5ea12d.png?large",
        title: "ARIEL автомат гель",
        typeWeight: "weight",
        weightValue: 1500,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
        price: 90.54,
        parameters: {
          hatch: 333333333,
          manufacturer: "CleanWave",
          brand: "ARIEL",
          typeCare: ["Уход за одеждой"],
        },
      },
    ];

    expect(sortedProducts).toEqual(expectedProducts);
  });

  it("sort-by-desc", () => {
    const sortedProducts = sortProductsByPrice(productsList, "desc");
    const expectedProducts = [
      {
        id: 3,
        img: "https://static.selvis.com/web/images/1b1112a8-bab9-479c-a85f-ee71ef5ea12d.png?large",
        title: "ARIEL автомат гель",
        typeWeight: "weight",
        weightValue: 1500,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
        price: 90.54,
        parameters: {
          hatch: 333333333,
          manufacturer: "CleanWave",
          brand: "ARIEL",
          typeCare: ["Уход за одеждой"],
        },
      },
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
        price: 30.26,
        parameters: {
          hatch: 222222222,
          manufacturer: "Grifon",
          brand: "ARIEL",
          typeCare: ["Уход за одеждой"],
        },
      },
    ];

    expect(sortedProducts).toEqual(expectedProducts);
  });

  it("sort-empty", () => {
    const products: [] = [];
    const expectedProducts: [] = [];

    expect(products).toEqual(expectedProducts);
  });
});
