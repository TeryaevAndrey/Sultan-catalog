const sortProductsByTitle = (
  productsList: IProduct[],
  by: "desc" | "asc"
): IProduct[] => {
  let sortedProducts = productsList.sort((prev, current) => {
    let prevValue = prev.title.toLowerCase().split(" ")[0];
    let currentValue = current.title.toLowerCase().split(" ")[0];

    if (prevValue < currentValue) {
      return by === "desc" ? 1 : -1;
    }
    if (prevValue > currentValue) {
      return by === "desc" ? -1 : 1;
    }
    return 0;
  });

  return sortedProducts;
};

export default sortProductsByTitle;
