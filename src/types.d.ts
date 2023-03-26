interface ICategories {
  categories: string[];
}

interface IProduct {
  id: number;
  img: string;
  title: string;
  typeWeight: string;
  weightValue: number;
  description: string;
  price: number;
  parameters: {
    hatch: number;
    manufacturer: string;
    brand: string;
    typeCare: string[];
  };
}
