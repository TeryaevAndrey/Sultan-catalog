const sortProductsByPrice = (productsList: IProduct[], by: "desc" | "asc"): IProduct[] => {
  let sortedProducts = productsList.sort((prev, current) => {
    return by === "desc"
      ? current.price! - prev.price!
      : prev.price! - current.price!;
  });

  return sortedProducts;
};

export default sortProductsByPrice;
