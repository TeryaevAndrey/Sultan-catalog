interface ICategory {
  title: string;
  to: string;
}

interface ICategories {
  categories: ICategory[];
}

interface IProduct {
  id: number;
  img: string;
  title: string;
  typeWeight: string;
  weightValue: number;
  hatch: number;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  typeCare: string[];
}
